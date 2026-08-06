"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function PihNexaBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      text: "Hi there! 👋 I am PihNexa AI. I can help you understand our hospital queue management pricing and features. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", text: data.text }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Oops, something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "500px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "1rem",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        margin: "0 auto",
      }}
      className="float-anim"
    >
      {/* Header */}
      <div
        style={{
          padding: "1rem 1.5rem",
          background: "rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2DD4BF 0%, #6389D5 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFF",
            fontSize: "1.2rem",
          }}
        >
          <i className="fa-solid fa-robot"></i>
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#FFF", fontWeight: 600 }}>PihNexa AI</h3>
          <span style={{ fontSize: "0.8rem", color: "#2DD4BF" }}>Online &bull; Ready to help</span>
        </div>
      </div>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          padding: "1.5rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.2) transparent",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
              padding: "0.85rem 1.15rem",
              borderRadius: msg.role === "user" ? "1rem 1rem 0 1rem" : "1rem 1rem 1rem 0",
              background: msg.role === "user" 
                ? "linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)" 
                : "rgba(255, 255, 255, 0.1)",
              color: "#FFF",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              border: msg.role === "model" ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
            }}
          >
            {msg.text.split('\n').map((line, i) => (
              <span key={i}>
                {line.replace(/\*\*(.*?)\*\*/g, '$1')} {/* Simple bold strip for now */}
                <br />
              </span>
            ))}
          </div>
        ))}
        {isLoading && (
          <div
            style={{
              alignSelf: "flex-start",
              maxWidth: "85%",
              padding: "0.85rem 1.15rem",
              borderRadius: "1rem 1rem 1rem 0",
              background: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.95rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-circle-notch fa-spin"></i> Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{ padding: "1rem", background: "rgba(0,0,0,0.15)" }}>
        <form
          onSubmit={handleSend}
          style={{
            display: "flex",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "2rem",
            padding: "0.25rem",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about pricing or features..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#FFF",
              padding: "0.75rem 1rem",
              fontSize: "0.95rem",
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            style={{
              background: "#2DD4BF",
              border: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: (!input.trim() || isLoading) ? "not-allowed" : "pointer",
              opacity: (!input.trim() || isLoading) ? 0.5 : 1,
              color: "#0B1B3E",
              transition: "opacity 0.2s",
            }}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
