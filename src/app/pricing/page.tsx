import PackagesSection from "@/components/PackagesSection";
import ProcessSection from "@/components/ProcessSection";

export const metadata = {
  title: "Pricing & Process | PihNexa Technologies",
  description: "View our healthcare automation pricing packages and delivery process.",
};

export default function PricingPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <PackagesSection />
      <ProcessSection />
    </main>
  );
}
