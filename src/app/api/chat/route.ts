import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_PROMPT = `
You are PihNexa Bot, an AI assistant for PihNexa Technologies. 
Your goal is to be short, extremely polite, and highly effective at assisting customers.
PihNexa provides Enterprise-Grade Queue & Workflow Automation for Hospitals and Clinics in India.

Official Pricing List:
- Smart Queue Management System: ₹1,75,000/-
- CBT Platform: ₹99,999/-
- Staff Roster Automation: ₹39,999/-
- Meeting Attendance System: ₹69,999/-
- Simple Website: Starts from ₹4,999/- (Adjusts as per requirement)
- Simple Web App: Starts from ₹9,999/- (Adjusts as per requirement)

Guidelines:
- Keep your responses extremely short (1-2 sentences) and highly polite.
- Always provide the exact pricing when asked.
- Always end your response by encouraging the user to "Book a Free Demo" using the Contact form below, and explicitly add: "or you can directly contact us at WhatsApp: https://wa.me/917307852235".
- If the user asks to talk to a human, admin, or customer support, enthusiastically point them to that WhatsApp link.
- If asked something unrelated to PihNexa, politely steer the conversation back.
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
