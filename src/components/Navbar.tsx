"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setIsMobileMenuOpen(false);

  const links = [
    { href: "#solutions", label: "Solutions" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#packages", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/assets/logo.png"
            alt="PihNexa Technologies Logo"
            width={50}
            height={50}
            style={{ height: "46px", width: "auto" }}
            priority
          />
          <span
            className="logo-text"
            style={{
              fontWeight: "800",
              fontSize: "1.2rem",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            PihNexa
            <br />
            <span style={{ fontSize: "0.65rem", fontWeight: "600", letterSpacing: "0.1em", opacity: 0.8 }}>
              TECHNOLOGIES
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`} id="navLinks">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            id="navCta"
            onClick={close}
            style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <i className="fa-solid fa-calendar-check" style={{ fontSize: "0.85rem" }} />
            Book Free Demo
          </a>
          <div
            className="mobile-toggle"
            id="mobileToggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`} />
          </div>
        </div>
      </div>
    </nav>
  );
};
