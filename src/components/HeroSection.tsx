"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PihNexaBot from "./PihNexaBot";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", prefix = "", duration = 2200 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      id="home"
      aria-label="PihNexa Technologies — Enterprise Healthcare Technology"
    >
      {/* Background orbs */}
      <div className="hero-bg-orb hero-bg-orb-1" aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="hero-eyebrow fade-up">
              <i className="fa-solid fa-hospital-user" />
              Enterprise Healthcare Technology · India
            </div>

            <h1 className="hero-title fade-up delay-100">
              Enterprise-Grade Queue &amp; Workflow{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2DD4BF 0%, #6389D5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Automation for Hospitals
              </span>{" "}
              and Clinics
            </h1>

            <p className="hero-description fade-up delay-200">
              PihNexa Technologies delivers production-proven healthcare automation systems — from Smart
              Queue Management to Patient Checklist Tracking. Already powering{" "}
              <strong style={{ color: "#2DD4BF" }}>7,500+ patient checklists</strong> in live hospital
              environments with zero performance issues.
            </p>

            <div className="hero-ctas fade-up delay-300">
              <a href="/#contact" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-calendar-check" />
                Book Free Demo
              </a>
              <a href="/solutions#case-studies" className="btn btn-outline-white btn-lg">
                <i className="fa-solid fa-chart-line" />
                View Case Studies
              </a>
            </div>

            {/* Trust signals */}
            <div className="hero-trust-bar fade-up delay-400">
              <div className="hero-trust-item">
                <i className="fa-solid fa-circle-check" />
                Trusted by hospitals &amp; clinics
              </div>
              <div className="hero-trust-item">
                <i className="fa-solid fa-shield-halved" />
                Data secure &amp; reliable
              </div>
              <div className="hero-trust-item">
                <i className="fa-solid fa-flag" />
                Built for Indian healthcare
              </div>
            </div>
          </div>

          {/* Visual - AI Bot */}
          <div className="hero-visual scale-in delay-300" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '-3rem' }}>
            <PihNexaBot />
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="fade-up delay-500"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            {
              end: 7500,
              suffix: "+",
              label: "Patient Checklists Processed",
              icon: "fa-file-medical",
            },
            {
              end: 100,
              suffix: "+",
              label: "Students on SaaS Platform",
              icon: "fa-graduation-cap",
            },
            {
              end: 100,
              suffix: "% Uptime",
              label: "in Live Hospital Deployments",
              icon: "fa-server",
            },
            {
              end: 24,
              suffix: "/7",
              label: "Technical Support Available",
              icon: "fa-headset",
            },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <i
                className={`fa-solid ${stat.icon}`}
                style={{ color: "rgba(45,212,191,0.6)", fontSize: "1.25rem", marginBottom: "0.75rem", display: "block" }}
                aria-hidden="true"
              />
              <div className="stat-number">
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
