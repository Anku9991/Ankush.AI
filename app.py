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
        "👋 Namaste! I'm the Ankush.AI Virtual Assistant. I help businesses automate their sales and build premium digital presences. How can I help you today?",
        "Hey! Looking for a Website, Mobile App, or WhatsApp Automation? I'm here to provide you with the best rates and quality!"
    ],
    "pricing": [
        "Here is our transparent pricing 💰:\n\n🌐 Website Dev: ₹5,000+\n📄 Landing Page: ₹2,000 – ₹8,000\n🪪 Digital Visiting Card: ₹1,000 – ₹5,000\n🛍️ WA Catalog Setup: ₹2,000 – ₹7,000\n📱 Mobile App: ₹15,000 – ₹50,000+\n🏥 Hospital Portal: ₹25,000+\n🤖 WhatsApp Bot: ₹3,000 – ₹20,000\n\nWhich one are you interested in?",
    ],
    "services": [
        "We build high-performance solutions 🚀:\n1. Custom Websites & SEO\n2. High-Converting Landing Pages\n3. Digital Visiting Cards (Smart QR)\n4. WhatsApp Catalog Automation\n5. Flutter Mobile Apps (iOS/Android)\n6. Hospital & Clinic Portals\n7. AI WhatsApp Bots\n\nWould you like to see a demo of any of these?",
    ],
    "trust": [
        "We take pride in our work! 🏆 We have delivered 50+ projects like Mishra Dental Clinic, Patient Tracker, and Zoya AI. We offer 1 year of free support and guaranteed delivery in 7-10 days.",
    ],
    "contact": [
        "You can chat with Ankush directly on WhatsApp here: +91 73078 52235. Or just drop your number here, and we'll call you back within 2 hours!",
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
