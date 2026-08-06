import { FAQSection } from "@/components/FAQSection";

export const metadata = {
  title: "FAQ | PihNexa Technologies",
  description: "Frequently asked questions about PihNexa's healthcare software.",
};

export default function FAQPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <FAQSection />
    </main>
  );
}
