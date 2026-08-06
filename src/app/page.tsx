import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import dynamic from "next/dynamic";

const InstagramFeed = dynamic(() => import("@/components/InstagramFeed"));

export default function HomePage() {
  return (
    <main>
      {/* ─── 1. Hero ─────────────────────────────────────────────── */}
      <HeroSection />

      {/* ─── 2. Trust Marquee Bar ────────────────────────────────── */}
      <TrustBar />

      {/* ─── 3. Instagram Feed ───────────────────────────────────── */}
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
    </main>
  );
}
