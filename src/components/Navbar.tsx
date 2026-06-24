"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        <a href="#" className="logo" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img src="/assets/logo.png" alt="PIHNEXA Logo" style={{ height: "65px", width: "auto" }} />
          <span
            className="logo-text"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: "800",
              fontSize: "1.3rem",
              background: "linear-gradient(135deg, #0ea5e9, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
              lineHeight: "1",
            }}
          >
            PIHNEXA
            <br />
            <span style={{ fontSize: "0.8rem", fontWeight: "600", letterSpacing: "1px" }}>TECHNOLOGIES</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`} id="navLinks">
          <li>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          </li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="#contact"
            className="btn btn-primary"
            id="navCta"
            style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
          >
            Consultation
          </a>
          <div
            className="mobile-toggle"
            id="mobileToggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
