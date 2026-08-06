"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const close = () => setIsMobileMenuOpen(false);

  const links = [
    { href: "/solutions", label: "Solutions" },
    { href: "/solutions#case-studies", label: "Case Studies" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              src="/assets/logo.png"
              alt="PihNexa Technologies Logo"
              width={50}
              height={50}
              style={{ height: "44px", width: "auto" }}
              priority
            />
            <span
              className="logo-text"
              style={{
                fontWeight: "800",
                fontSize: "1.15rem",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              PihNexa
              <br />
              <span style={{ fontSize: "0.63rem", fontWeight: "600", letterSpacing: "0.12em", opacity: 0.8 }}>
                TECHNOLOGIES
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" id="navLinks">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href.split("#")[0] ? "active" : ""}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link
              href="/#contact"
              className="btn btn-primary btn-sm mobile-hide"
              id="navCta"
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <i className="fa-solid fa-calendar-check" style={{ fontSize: "0.85rem" }} />
              Book Free Demo
            </Link>
            <button
              className="mobile-toggle"
              id="mobileToggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(0,0,0,0.4)",
          }}
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile nav drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "1rem",
            right: "1rem",
            zIndex: 999,
            background: "var(--navy-900)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "1.25rem",
            padding: "0.75rem 1.25rem 1.25rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {links.map((l, idx) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  style={{
                    display: "block",
                    padding: "0.9rem 0",
                    borderBottom: idx < links.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: pathname === l.href.split("#")[0] ? "var(--teal-400)" : "rgba(255,255,255,0.85)",
                    transition: "color 0.2s",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: "1rem" }}>
              <Link
                href="https://wa.me/917307852235?text=Hi%20PihNexa,%20I%20want%20to%20book%20a%20free%20demo."
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "var(--teal-600)",
                  color: "#FFFFFF",
                  borderRadius: "var(--radius-md)",
                  padding: "0.85rem 1.5rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  width: "100%",
                }}
              >
                <i className="fa-solid fa-calendar-check" />
                Book Free Demo
              </Link>
            </li>
            <li style={{ marginTop: "0.75rem" }}>
              <a
                href="https://wa.me/917307852235"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "#25D366",
                  color: "#FFFFFF",
                  borderRadius: "var(--radius-md)",
                  padding: "0.85rem 1.5rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  width: "100%",
                }}
              >
                <i className="fa-brands fa-whatsapp" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
