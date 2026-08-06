import WhyPihNexaSection from "@/components/WhyPihNexaSection";
import SecuritySection from "@/components/SecuritySection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";

export const metadata = {
  title: "About Us | PihNexa Technologies",
  description: "Learn why hospitals choose PihNexa, our technology stack, and security compliance.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <WhyPihNexaSection />
      <SecuritySection />
      <TechStackSection />
      <TestimonialsSection />
      <FounderSection />
    </main>
  );
}
