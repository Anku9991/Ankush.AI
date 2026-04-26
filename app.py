import os
import json
import re
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# ─── CONFIGURATION ───────────────────────────────────────────
LEADS_FILE = 'data/chat_leads.json'
os.makedirs('data', exist_ok=True)
if not os.path.exists(LEADS_FILE):
    with open(LEADS_FILE, 'w') as f:
        json.dump([], f)

# ─── INTENT REPLIES (High-Conversion) ──────────────────────
INTENTS = {
    "greeting": [
        "👋 Namaste! I'm the Ankush.AI Virtual Assistant. How can I help you grow your digital presence today?",
        "Hey! Looking to upgrade your business with AI or a new website? I'm here to help!"
    ],
    "pricing": [
        "Our pricing is very competitive! 🚀\n- Websites: ₹5,000+\n- Landing Pages: ₹2,000+\n- Mobile Apps: ₹15,000+\n- WhatsApp Bots: ₹3,000+\n\nWhich one fits your budget?",
    ],
    "services": [
        "We offer a full suite of digital solutions:\n✅ Web Development (React/Next.js)\n✅ Mobile Apps (Flutter)\n✅ WhatsApp Automation\n✅ Hospital Management Systems\n\nWant to see our portfolio?",
    ],
    "trust": [
        "We've delivered 50+ successful projects across India. 🏆 We offer 1 year of free support and a 100% satisfaction guarantee. You're in safe hands!",
    ],
    "contact": [
        "The best way to get a custom quote is via WhatsApp: +91 73078 52235. Or leave your number here and I'll have Ankush call you!",
    ]
}

# ─── UTILS ──────────────────────────────────────────────────
def save_chat_lead(lead_data):
    try:
        with open(LEADS_FILE, 'r+') as f:
            leads = json.load(f)
            lead_data['timestamp'] = datetime.now().isoformat()
            leads.insert(0, lead_data)
            f.seek(0)
            json.dump(leads, f, indent=2)
    except Exception as e:
        print(f"Error saving lead: {e}")

def send_email_alert(lead_info):
    email_user = os.getenv('EMAIL_USER')
    email_pass = os.getenv('EMAIL_PASS')
    notify_email = os.getenv('NOTIFY_EMAIL') or email_user

    if not email_user or not email_pass:
        return

    msg = MIMEMultipart()
    msg['From'] = email_user
    msg['To'] = notify_email
    msg['Subject'] = f"🔥 NEW CHAT LEAD: {lead_info.get('name', 'User')}"

    body = f"New lead captured from Chatbot:\n\n"
    for k, v in lead_info.items():
        body += f"{k.upper()}: {v}\n"
    
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email_user, email_pass)
        server.send_message(msg)
        server.quit()
    except Exception as e:
        print(f"Email error: {e}")

def detect_intent(text):
    text = text.lower()
    if any(word in text for word in ['hi', 'hello', 'hey', 'namaste']):
        return "greeting"
    if any(word in text for word in ['price', 'cost', 'charge', 'how much', 'budget']):
        return "pricing"
    if any(word in text for word in ['service', 'what do you do', 'build', 'create']):
        return "services"
    if any(word in text for word in ['trust', 'reliable', 'experience', 'reviews', 'portfolio']):
        return "trust"
    if any(word in text for word in ['call', 'contact', 'whatsapp', 'number', 'talk to human']):
        return "contact"
    return None

# ─── ROUTES ─────────────────────────────────────────────────
@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_msg = data.get('message', '').strip()
    
    if not user_msg:
        return jsonify({"reply": "I didn't quite catch that. Could you repeat?"})

    # 1. Detect Leads (Phone/Email)
    email_match = re.search(r'[\w\.-]+@[\w\.-]+\.\w+', user_msg)
    phone_match = re.search(r'(\+?\d{10,12})', user_msg)
    
    if email_match or phone_match:
        lead = {"message": user_msg}
        if email_match: lead['email'] = email_match.group(0)
        if phone_match: lead['phone'] = phone_match.group(0)
        save_chat_lead(lead)
        send_email_alert(lead)
        return jsonify({
            "reply": "Got it! I've saved your contact details. Our team will reach out to you within 2 hours. Anything else you'd like to know?",
            "is_lead": True
        })

    # 2. Hybrid Intent Detection
    intent = detect_intent(user_msg)
    if intent:
        return jsonify({"reply": INTENTS[intent][0]})

    # 3. AI Fallback (Optional)
    # Here you would integrate Claude/Gemini/OpenAI
    # For now, we use a smart fallback
    fallback_reply = "That sounds interesting! I'm still learning about specific custom requests, but I'd love to discuss this further. Should I connect you with Ankush on WhatsApp for a quick consultation?"
    
    return jsonify({"reply": fallback_reply})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
