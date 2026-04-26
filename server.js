require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── MIDDLEWARE ───────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // Handled by vercel.json for consistency
}));
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://127.0.0.1:5500'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting — max 10 submissions per IP per hour
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});

// ─── LEADS FILE (simple JSON file DB) ───────────────────
const LEADS_FILE = path.join(__dirname, 'data', 'leads.json');

function ensureDataDir() {
  const dir = path.join(__dirname, 'data');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  if (!fs.existsSync(LEADS_FILE)) fs.writeFileSync(LEADS_FILE, JSON.stringify([]));
}

function saveLead(lead) {
  ensureDataDir();
  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
  leads.unshift({ ...lead, id: Date.now(), createdAt: new Date().toISOString() });
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

function getLeads() {
  ensureDataDir();
  return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
}

// ─── EMAIL TRANSPORTER ───────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS   // Use App Password for Gmail
  }
});

async function sendEmailNotification(lead) {
  if (!process.env.EMAIL_USER) return; // Skip if not configured

  // Email to Ankush (notification)
  await transporter.sendMail({
    from: `"Ankush.AI Website" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
    subject: `🔥 New Lead: ${lead.service} from ${lead.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d3b1a; color: #f0fff4; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #27ae60, #f5c518); padding: 24px; text-align: center;">
          <h1 style="margin: 0; color: #081a0d; font-size: 24px;">🚀 New Lead — Ankush.AI</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #a8d5b5; font-size: 13px; width: 40%;">NAME</td>
              <td style="padding: 12px 0; font-weight: 700;">${lead.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #a8d5b5; font-size: 13px;">PHONE</td>
              <td style="padding: 12px 0; font-weight: 700;"><a href="https://wa.me/${lead.phone.replace(/\D/g, '')}" style="color: #25D366;">${lead.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #a8d5b5; font-size: 13px;">SERVICE</td>
              <td style="padding: 12px 0; font-weight: 700; color: #f5c518;">${lead.service}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #a8d5b5; font-size: 13px; vertical-align: top;">MESSAGE</td>
              <td style="padding: 12px 0;">${lead.message || 'No message provided'}</td>
            </tr>
          </table>
          <a href="https://wa.me/${lead.phone?.replace(/\D/g, '')}" 
             style="display: inline-block; margin-top: 24px; background: #25D366; color: #000; padding: 14px 28px; border-radius: 50px; font-weight: 700; text-decoration: none;">
            💬 Reply on WhatsApp
          </a>
        </div>
        <div style="padding: 16px; text-align: center; font-size: 12px; color: #a8d5b5; border-top: 1px solid rgba(255,255,255,0.1);">
          Submitted ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
        </div>
      </div>
    `
  });

  // Auto-reply to client (if email provided)
  if (lead.email) {
    await transporter.sendMail({
      from: `"Ankush.AI" <${process.env.EMAIL_USER}>`,
      to: lead.email,
      subject: `✅ We received your request — Ankush.AI`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>Namaste ${lead.name}! 👋</h2>
          <p>We've received your enquiry about <strong>${lead.service}</strong>.</p>
          <p>We'll get back to you within <strong>2 hours</strong> via WhatsApp.</p>
          <p>Or WhatsApp us directly: <a href="https://wa.me/917307852235">+91 73078 52235</a></p>
          <br>
          <p>— Ankush<br>Ankush.AI · Your Digital Creator</p>
        </div>
      `
    });
  }
}

// ─── STATIC FILES ─────────────────────────────────────────
app.use(express.static(path.join(__dirname)));

// ─── ROUTES ──────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Ankush.AI Backend', time: new Date().toISOString() });
});

// Submit contact form
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, phone, service, message, email } = req.body;

    // Basic validation
    if (!name?.trim() || !phone?.trim() || !service?.trim()) {
      return res.status(400).json({ success: false, message: 'Name, phone, and service are required.' });
    }

    const lead = { name: name.trim(), phone: phone.trim(), service, message: message?.trim() || '', email: email?.trim() || '', ip: req.ip };
    saveLead(lead);
    sendEmailNotification(lead).catch(err => console.error('Email error:', err));
    res.json({ success: true, message: 'Lead saved. We will contact you soon!' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try WhatsApp instead.' });
  }
});

// ─── AI CHATBOT LOGIC ──────────────────────────────────────
const INTENTS = {
  greeting: [
    "👋 Namaste! I'm the Ankush.AI Virtual Assistant. I help businesses automate their sales and build premium digital presences. How can I help you today?",
    "Hey! Looking for a Website, Mobile App, or WhatsApp Automation? I'm here to provide you with the best rates and quality!"
  ],
  pricing: [
    "Here is our transparent pricing 💰:\n\n🌐 Website Dev: ₹5,000+\n📄 Landing Page: ₹2,000 – ₹8,000\n🪪 Digital Visiting Card: ₹1,000 – ₹5,000\n🛍️ WA Catalog Setup: ₹2,000 – ₹7,000\n📱 Mobile App: ₹15,000 – ₹50,000+\n🏥 Hospital Portal: ₹25,000+\n🤖 WhatsApp Bot: ₹3,000 – ₹20,000\n\nWhich one are you interested in?"
  ],
  services: [
    "We build high-performance solutions 🚀:\n1. Custom Websites & SEO\n2. High-Converting Landing Pages\n3. Digital Visiting Cards (Smart QR)\n4. WhatsApp Catalog Automation\n5. Flutter Mobile Apps (iOS/Android)\n6. Hospital & Clinic Portals\n7. AI WhatsApp Bots\n\nWould you like to see a demo of any of these?"
  ],
  trust: [
    "We take pride in our work! 🏆 We have delivered 50+ projects like Mishra Dental Clinic, Patient Tracker, and Zoya AI. We offer 1 year of free support and guaranteed delivery in 7-10 days."
  ],
  contact: [
    "You can chat with Ankush directly on WhatsApp here: +91 73078 52235. Or just drop your number here, and we'll call you back within 2 hours!"
  ]
};

function detectIntent(text) {
  text = text.toLowerCase();
  if (/\b(hi|hello|hey|namaste|fresh|start)\b/.test(text)) return "greeting";
  if (/\b(price|pricing|cost|charge|how much|budget)\b/.test(text)) return "pricing";
  if (/\b(service|services|what do you do|build|create)\b/.test(text)) return "services";
  if (/\b(trust|reliable|experience|reviews|portfolio|done)\b/.test(text)) return "trust";
  if (/\b(call|contact|whatsapp|number|expert|human|talk)\b/.test(text)) return "contact";
  if (/\b(hospital|clinic|doctor|patient|medical|appointment)\b/.test(text)) return "hospital";
  if (/\b(website|web|site|portal|e-commerce|shop|store|sell|billing)\b/.test(text)) return "website";
  if (/\b(app|mobile|flutter|android|ios)\b/.test(text)) return "mobile";
  if (/\b(yes|yeah|sure|ok|okay|definitely)\b/.test(text)) return "affirmative";
  if (/\b(no|nah|not now|nope|later)\b/.test(text)) return "negative";
  return null;
}

app.post('/api/chat', (req, res) => {
  const userMsg = req.body.message || "";
  
  // 1. Detect Leads (Phone/Email)
  const emailMatch = userMsg.match(/[\w\.-]+@[\w\.-]+\.\w+/);
  const phoneMatch = userMsg.match(/(\+?\d{10,12})/);
  
  if (emailMatch || phoneMatch) {
    try {
      const lead = {
        name: "Chat Lead",
        email: emailMatch ? emailMatch[0] : "N/A",
        phone: phoneMatch ? phoneMatch[0] : "N/A",
        service: "General Inquiry (Chat)",
        message: userMsg
      };
      
      // Try saving lead, but don't crash if filesystem is read-only (like Vercel)
      try {
        saveLead(lead); 
      } catch (e) {
        console.error("Lead saving skipped (Read-only filesystem):", e.message);
      }

      return res.json({
        reply: "Got it! I've saved your contact details. 🚀 Ankush will call you within 2 hours to discuss. Is there anything else you'd like to ask?",
        is_lead: true
      });
    } catch (err) {
      console.error("Chat API error:", err);
      return res.json({ reply: "Got it! I've noted your contact details. Is there anything else you'd like to ask?" });
    }
  }

  // 2. Hybrid Intent Detection
  const intent = detectIntent(userMsg);
  
  const replies = {
    greeting: INTENTS.greeting[0],
    pricing: INTENTS.pricing[0],
    services: INTENTS.services[0],
    trust: INTENTS.trust[0],
    contact: "Sure! You can chat with Ankush directly on WhatsApp for an immediate consultation here: https://wa.me/917307852235?text=Hi!%20I%20found%20you%20through%20your%20AI%20Bot. \n\nIs there anything else I can help you with?",
    hospital: "Our Hospital Portal (₹25k+) includes appointment booking, patient records, and billing. It's built to make your clinic 100% paperless. Would you like to share your number for a live demo?",
    website: "We build premium SEO-optimized websites (starting ₹5k). From landing pages to full e-commerce sites. Shall I connect you with Ankush to discuss your specific requirements?",
    mobile: "We specialize in high-performance Flutter apps for iOS & Android. Our apps are smooth, fast, and secure. Do you have a specific app idea in mind?",
    affirmative: "Great! Click here to chat on WhatsApp: https://wa.me/917307852235 or share your phone number here and I'll have our expert reach out to you.",
    negative: "No problem at all! 😊 I'm here if you have any other questions. Feel free to explore our portfolio or services whenever you're ready!"
  };

  if (intent && replies[intent]) {
    return res.json({ reply: replies[intent] });
  }

  // 3. Fallback
  res.json({
    reply: "That sounds interesting! I'm still learning about specific custom requests, but I'd love to discuss this further. Should I connect you with Ankush on WhatsApp for a quick consultation?"
  });
});

// Catch-all route to serve index.html for frontend navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ─── START ───────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`\n🚀 Ankush.AI Backend running on http://localhost:${PORT}`);
  });
}

module.exports = app;
