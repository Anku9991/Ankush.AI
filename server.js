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
const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json');

function ensureDataDir() {
  try {
    const dir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(LEADS_FILE)) fs.writeFileSync(LEADS_FILE, JSON.stringify([]));
  } catch (err) {
    console.warn('⚠️ File system warning (expected on Vercel):', err.message);
  }
}

function saveLead(lead) {
  try {
    ensureDataDir();
    if (fs.existsSync(LEADS_FILE)) {
      const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
      leads.unshift({ ...lead, id: Date.now(), createdAt: new Date().toISOString() });
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
      console.log('✅ Lead saved locally');
    }
  } catch (err) {
    console.error('❌ Lead saving failed (Read-only filesystem):', err.message);
    // On Vercel, we rely on Email notifications as the primary lead capture
  }
}

function getLeads() {
  try {
    ensureDataDir();
    if (fs.existsSync(LEADS_FILE)) {
      return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
    }
  } catch (err) {
    console.error('Error reading leads:', err.message);
  }
  return [];
}

// ─── EMAIL TRANSPORTER ───────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS   // Use App Password for Gmail
  }
});

async function sendEmailNotification(lead) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️ Email credentials missing. Skipping notification.');
    return;
  }

  // Email to Ankush (notification)
  const ankushMail = {
    from: `"Ankush.AI Notifications" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
    subject: `🔥 NEW LEAD: ${lead.service} — ${lead.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #050a06; color: #e0f2f1; border-radius: 20px; overflow: hidden; border: 1px solid #27ae60;">
        <div style="background: linear-gradient(135deg, #27ae60, #f5c518); padding: 30px; text-align: center;">
          <h1 style="margin: 0; color: #081a0d; font-size: 28px; letter-spacing: 1px;">🚀 New Opportunity</h1>
        </div>
        <div style="padding: 40px;">
          <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; border: 1px solid rgba(39,174,96,0.2);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
                <td style="padding: 12px 0; font-weight: 700; font-size: 16px;">${lead.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contact</td>
                <td style="padding: 12px 0; font-weight: 700; font-size: 16px;"><a href="tel:${lead.phone}" style="color: #27ae60; text-decoration: none;">${lead.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service</td>
                <td style="padding: 12px 0; font-weight: 700; font-size: 16px; color: #f5c518;">${lead.service}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #a8d5b5; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; line-height: 1.5;">${lead.message || '—'}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px; text-align: center;">
            <a href="https://wa.me/${lead.phone.replace(/\D/g, '')}?text=Hi%20${encodeURIComponent(lead.name)},%20this%20is%20Ankush%20from%20Ankush.AI.%20I%20saw%20your%20enquiry%20about%20${encodeURIComponent(lead.service)}."
               style="display: inline-block; background: #25D366; color: #fff; padding: 16px 32px; border-radius: 50px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 15px rgba(37,211,102,0.3);">
              💬 Connect on WhatsApp
            </a>
          </div>
        </div>
        <div style="padding: 20px; text-align: center; font-size: 11px; color: #a8d5b5; border-top: 1px solid rgba(39,174,96,0.1); background: rgba(255,255,255,0.02);">
          Captured at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST • Ankush.AI Intelligence
        </div>
      </div>
    `
  };

  await transporter.sendMail(ankushMail);

  // Auto-reply to client (if email provided)
  if (lead.email) {
    const clientMail = {
      from: `"Ankush.AI" <${process.env.EMAIL_USER}>`,
      to: lead.email,
      subject: `✅ We've received your request — Ankush.AI`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #27ae60;">Namaste ${lead.name}! 👋</h2>
          <p>Thank you for reaching out to <strong>Ankush.AI</strong>. We've received your inquiry regarding <strong>${lead.service}</strong>.</p>
          <p>Our team is reviewing your requirements and will contact you on WhatsApp within <strong>2 hours</strong> for a detailed consultation.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 14px; color: #666;">Need immediate help? WhatsApp us directly:</p>
          <a href="https://wa.me/917307852235" style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">+91 73078 52235</a>
          <p style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; font-size: 12px;">
            <strong>Ankush.AI</strong><br>
            Your Digital Growth Partner<br>
            Lucknow, India
          </p>
        </div>
      `
    };
    await transporter.sendMail(clientMail);
  }
}

// ─── STATIC FILES ─────────────────────────────────────────
app.use(express.static(path.join(process.cwd())));

// ─── ROUTES ──────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Ankush.AI Backend',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Submit contact form
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, phone, service, message, email } = req.body;

    if (!name?.trim() || !phone?.trim() || !service?.trim()) {
      return res.status(400).json({ success: false, message: 'Required fields missing: name, phone, service' });
    }

    const lead = {
      name: name.trim(),
      phone: phone.trim(),
      service,
      message: message?.trim() || '',
      email: email?.trim() || '',
      ip: req.ip || req.headers['x-forwarded-for']
    };

    saveLead(lead);

    // We send email asynchronously to not block the response
    sendEmailNotification(lead).catch(err => console.error('📧 Email alert failed:', err));

    res.json({
      success: true,
      message: 'Thank you! Your request has been logged. We will contact you shortly.'
    });
  } catch (err) {
    console.error('🔥 Contact form error:', err);
    res.status(500).json({ success: false, message: 'Internal server error. Please try again later or use WhatsApp.' });
  }
});

// ─── AI CHATBOT LOGIC (Enhanced) ───────────────────────────
const BOT_REPLIES = {
  greeting: [
    "👋 Namaste! I'm the Ankush.AI assistant. Ready to build something amazing?",
    "Hey there! Looking for a website, app, or automation? You're in the right place! 🚀",
    "Welcome! I can help you with pricing, services, or connecting with our expert team. What's on your mind?"
  ],
  pricing: [
    "💰 **Transparent Pricing**:\n\n🌐 Website: ₹5,000+\n📄 Landing Page: ₹2,000 – ₹8,000\n📱 Mobile App: ₹15,000+\n🤖 WhatsApp Bot: ₹3,000 – ₹20,000\n🏥 Hospital Portal: ₹25,000+\n\nPrices depend on complexity. Want a custom quote?",
  ],
  services: [
    "🚀 **Our Core Expertise**:\n1. Custom Web Dev & SEO\n2. Flutter Mobile Apps (iOS/Android)\n3. AI-Powered WhatsApp Bots\n4. Digital Business Cards\n5. Specialized Hospital Portals\n\nWhich one should we discuss?",
  ],
  trust: [
    "🏆 **Why Ankush.AI?**\n- 50+ Projects Delivered Successfully\n- 1 Year FREE Technical Support\n- Guaranteed 7-10 Day Delivery for most projects\n- Verified clients like Mishra Dental Clinic & Zoya AI.",
  ],
  contact: [
    "Best way to talk is WhatsApp! 📱 Tap here: https://wa.me/917307852235\n\nOr just drop your number here and I'll have Ankush call you back within 2 hours!",
  ],
  fallback: [
    "That sounds like an interesting project! 🚀 I'm still learning the specifics of that, but I'd love to discuss it. Should I connect you with Ankush on WhatsApp right now?",
    "Interesting! To give you the best advice, I'd need a bit more detail. Would you like to share your phone number so our expert can call you?",
  ]
};

function detectIntent(text) {
  text = text.toLowerCase().trim();
  if (/\b(hi|hello|hey|namaste|start|menu|options)\b/.test(text)) return "greeting";
  if (/\b(price|pricing|cost|charge|how much|budget|rate|fee)\b/.test(text)) return "pricing";
  if (/\b(service|services|what do you do|build|create|make|work)\b/.test(text)) return "services";
  if (/\b(trust|reliable|experience|reviews|portfolio|done|projects|client)\b/.test(text)) return "trust";
  if (/\b(call|contact|whatsapp|number|expert|human|talk|person|reach)\b/.test(text)) return "contact";
  if (/\b(hospital|clinic|doctor|patient|medical|appointment|health)\b/.test(text)) return "hospital";
  if (/\b(website|web|site|portal|e-commerce|shop|store|sell|billing|online)\b/.test(text)) return "website";
  if (/\b(app|mobile|flutter|android|ios|phone app)\b/.test(text)) return "mobile";
  if (/\b(yes|yeah|sure|ok|okay|definitely|yep|yup)\b/.test(text)) return "affirmative";
  if (/\b(no|nah|not now|nope|later|maybe|bye|thanks)\b/.test(text)) return "negative";
  return null;
}

app.post('/api/chat', (req, res) => {
  const userMsg = (req.body.message || "").trim();

  if (!userMsg) return res.json({ reply: "I'm listening! How can I help you today?" });

  // 1. Detect Leads (Phone/Email)
  const emailMatch = userMsg.match(/[\w\.-]+@[\w\.-]+\.\w+/);
  const phoneMatch = userMsg.match(/(\+?\d{10,12})/);

  if (emailMatch || phoneMatch) {
    const lead = {
      name: "Chat Lead",
      email: emailMatch ? emailMatch[0] : "N/A",
      phone: phoneMatch ? phoneMatch[0] : "N/A",
      service: "General Chat Inquiry",
      message: userMsg
    };

    saveLead(lead);
    sendEmailNotification(lead).catch(e => console.error("📧 Lead email failed:", e.message));

    return res.json({
      reply: "Got it! I've noted your contact details. 🚀 Ankush will call you within 2 hours. Anything else you'd like to ask in the meantime?",
      is_lead: true
    });
  }

  // 2. Hybrid Intent Detection
  const intent = detectIntent(userMsg);

  const replies = {
    greeting: BOT_REPLIES.greeting[Math.floor(Math.random() * BOT_REPLIES.greeting.length)],
    pricing: BOT_REPLIES.pricing[0],
    services: BOT_REPLIES.services[0],
    trust: BOT_REPLIES.trust[0],
    contact: BOT_REPLIES.contact[0],
    hospital: "Our Hospital Portal (₹25k+) includes appointment booking, patient records, and billing. It's built to make your clinic 100% paperless. Shall I show you a demo?",
    website: "We build premium SEO-optimized websites starting at just ₹5k. Everything from business portfolios to e-commerce stores. Interested?",
    mobile: "We specialize in Flutter apps for iOS & Android. Smooth, fast, and secure. Do you have a specific app idea?",
    affirmative: "Awesome! You can message Ankush directly on WhatsApp here: https://wa.me/917307852235 or share your phone number here for a callback.",
    negative: "No problem! 😊 I'm here if you change your mind. Feel free to explore our portfolio at your own pace!"
  };

  if (intent && replies[intent]) {
    return res.json({ reply: replies[intent] });
  }

  // 3. Smart Fallback
  res.json({
    reply: BOT_REPLIES.fallback[Math.floor(Math.random() * BOT_REPLIES.fallback.length)]
  });
});

// Catch-all route to serve index.html for frontend navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

// ─── START ───────────────────────────────────────────────
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`\n🚀 Ankush.AI Backend running on http://localhost:${PORT}`);
    console.log(`📂 Working Directory: ${process.cwd()}`);
  });
}

module.exports = app;
