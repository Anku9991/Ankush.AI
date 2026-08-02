import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyPihNexaSection from "@/components/WhyPihNexaSection";
import SecuritySection from "@/components/SecuritySection";
import TechStackSection from "@/components/TechStackSection";
import PackagesSection from "@/components/PackagesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";
import BlogTeaser from "@/components/BlogTeaser";
import { FAQSection } from "@/components/FAQSection";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      {/* ─── Navigation ─────────────────────────────────────────── */}
      <Navbar />

      {/* ─── 1. Hero ─────────────────────────────────────────────── */}
      <HeroSection />

      {/* ─── 2. Trust Marquee Bar ────────────────────────────────── */}
      <TrustBar />

      {/* ─── 3. Problems We Solve ────────────────────────────────── */}
      <ProblemsSection />

      {/* ─── 4. Solutions / Products ─────────────────────────────── */}
      <SolutionsSection />

      {/* ─── 5. Case Studies / Real Results ──────────────────────── */}
      <CaseStudiesSection />

      {/* ─── 6. Why PihNexa ──────────────────────────────────────── */}
      <WhyPihNexaSection />

      {/* ─── 7. Security & Compliance ────────────────────────────── */}
      <SecuritySection />

      {/* ─── 8. Technology Stack ─────────────────────────────────── */}
      <TechStackSection />

      {/* ─── 9. Packages / Pricing ───────────────────────────────── */}
      <PackagesSection />

      {/* ─── 10. Delivery Process ────────────────────────────────── */}
      <ProcessSection />

      {/* ─── 11. Testimonials ────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ─── 12. Founder ─────────────────────────────────────────── */}
      <FounderSection />

      {/* ─── 13. Blog / Resources Teaser ─────────────────────────── */}
      <BlogTeaser />

      {/* ─── 14. FAQ ─────────────────────────────────────────────── */}
      <FAQSection />

      {/* ─── 15. Instagram Feed ───────────────────────────────────── */}
      <section
        id="instagram-feed"
        style={{ padding: "5rem 0", background: "var(--bg-alt)" }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <div className="section-label">Social Wall</div>
            <h2 className="section-heading" style={{ marginTop: "0.5rem" }}>
              Latest From{" "}
              <span className="gradient-text">PihNexa</span>
            </h2>
            <p className="section-subheading mx-auto" style={{ marginTop: "0.75rem" }}>
              Follow us on Instagram for the latest reels, product demos, and company updates.
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* ─── 16. Promo Video ──────────────────────────────────────── */}
      <section
        id="promo-video"
        style={{ padding: "5rem 0" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-label">Featured Video</div>
          <h2 className="section-heading" style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>
            See Our{" "}
            <span className="gradient-text">Technology</span> in Action
          </h2>
          <div className="video-wrapper">
            <video
              src="/assets/promo.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="none"
              style={{
                width: "100%",
                minHeight: "300px",
                background: "var(--navy-950)",
                objectFit: "cover",
                display: "block",
              }}
              aria-label="PihNexa Technologies product demonstration video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ─── 17. Contact / Final CTA ──────────────────────────────── */}
      <section
        id="contact"
        className="contact-section"
      >
        <div className="container">
          <div className="contact-grid">
            {/* Left: heading + contact info */}
            <div>
              <div
                className="section-label"
                style={{
                  background: "rgba(13,148,136,0.15)",
                  borderColor: "rgba(13,148,136,0.35)",
                  color: "var(--teal-400)",
                }}
              >
                Book Free Tech Audit
              </div>
              <h2
                className="section-heading section-heading-white"
                style={{ marginTop: "0.75rem", marginBottom: "1rem" }}
              >
                Ready to Transform Your Hospital&apos;s Operations?
              </h2>
              <p className="section-subheading section-subheading-white" style={{ marginBottom: "2.5rem" }}>
                Book a free, no-obligation consultation. We will map your current workflows, identify
                automation opportunities, and propose a solution with a clear ROI projection.
              </p>

              {/* Contact items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href="tel:+917992203671" className="contact-item" style={{ display: "flex" }}>
                  <div className="contact-item-icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <div className="contact-item-label">Call Us</div>
                    <div className="contact-item-value">+91 7992203671</div>
                  </div>
                </a>
                <a href="mailto:info@pihnexa.co.in" className="contact-item" style={{ display: "flex" }}>
                  <div className="contact-item-icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <div className="contact-item-label">Email Us</div>
                    <div className="contact-item-value">info@pihnexa.co.in</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/917992203671?text=Hi%20PihNexa,%20I%20want%20to%20book%20a%20free%20Tech%20Audit."
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex" }}
                >
                  <div className="contact-item-icon">
                    <i className="fa-brands fa-whatsapp" />
                  </div>
                  <div>
                    <div className="contact-item-label">WhatsApp</div>
                    <div className="contact-item-value">Chat Directly on WhatsApp</div>
                  </div>
                </a>
              </div>

              {/* Trust signal */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem",
                  background: "rgba(13,148,136,0.1)",
                  border: "1px solid rgba(13,148,136,0.25)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    color: "var(--teal-400)",
                    marginBottom: "0.35rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  <i className="fa-solid fa-shield-halved" style={{ marginRight: "0.4rem" }} />
                  Zero Obligation
                </div>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.55" }}>
                  Our Tech Audit is 100% free and comes with no sales pressure. You will receive a clear
                  written assessment regardless of whether we work together.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
