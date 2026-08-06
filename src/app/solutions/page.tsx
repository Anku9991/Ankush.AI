import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export const metadata = {
  title: "Solutions | PihNexa Technologies",
  description: "Explore our hospital workflow automation and queue management solutions.",
};

export default function SolutionsPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <ProblemsSection />
      <SolutionsSection />
      <CaseStudiesSection />
    </main>
  );
}
