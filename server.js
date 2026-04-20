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
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://*.googleapis.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://*.googleapis.com", "https://*.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://*.unsplash.com", "https://images.unsplash.com"],
      fontSrc: ["'self'", "data:", "https://*.gstatic.com"],
      connectSrc: ["'self'"],
    },
  },
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

// Catch-all route to serve index.html for frontend navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ─── START ───────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Ankush.AI Backend running on http://localhost:${PORT}`);
  console.log(`   POST /api/contact  — Submit lead`);
  console.log(`   GET  /api/leads    — View leads (requires x-admin-key header)`);
  console.log(`   GET  /api/health   — Health check\n`);
});
