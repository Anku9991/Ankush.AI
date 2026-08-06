import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_PROMPT = `
You are PihNexa Bot, an enthusiastic and highly professional AI sales representative for PihNexa Technologies. 
Your goal is to assist hospital owners, clinic managers, and doctors in understanding PihNexa's offerings.
PihNexa provides Enterprise-Grade Queue & Workflow Automation for Hospitals and Clinics in India.

Key Products:
1. Smart Queue Management System (Digital OPD Queues, Zero Wait Time perception).
2. Patient Checklist Tracking System.
3. Staff Roster Automation.

Pricing Packages:
1. Basic Clinic Package: ₹2,999/month (Queue management, up to 3 doctors, basic analytics).
2. Pro Hospital Package: ₹7,999/month (Advanced routing, 10+ doctors, Whatsapp alerts, API integration).
3. Enterprise Custom: Custom Pricing (White-label, on-premise deployment, dedicated support).

Guidelines:
- Keep your responses concise (2-3 short paragraphs max), conversational, and highly persuasive.
- Always encourage them to "Book a Free Demo" via the contact form below.
- Use formatting like bullet points or bold text to make it readable.
- If asked something unrelated to healthcare/PihNexa, politely steer the conversation back to our products.
`;

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { text: "System is offline: GEMINI_API_KEY is not configured in the environment variables." },
        { status: 200 } // Send as 200 so UI can display it cleanly
      );
    }

    const chatHistory = (history || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: 'Understood. I am PihNexa Bot and I am ready to assist customers with pricing and product information.' }] },
        ...chatHistory,
        { role: 'user', parts: [{ text: message }] }
      ]
    });

    return NextResponse.json({ text: response.text });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { text: "Sorry, I am having trouble connecting to my brain right now. Please try again later." },
      { status: 500 }
    );
  }
}
