import Hero from "@/components/hero/Hero";
import CoreWorkflow from "@/components/workflow/CoreWorkflow";
import Problem from "@/components/problem/Problem";
import WhyResolvr from "@/components/why/WhyResolvr";
import AudienceSection from "@/components/audience/AudienceSection";
import McpSection from "@/components/mcp/McpSection";
import ProductDemo from "@/components/demo/ProductDemo";
import SecuritySection from "@/components/security/SecuritySection";
import InstallationSection from "@/components/installation/InstallationSection";
import CiFeedbackLoop from "@/components/ci/CiFeedbackLoop";
import TechnicalCredibility from "@/components/credibility/TechnicalCredibility";
import FinalCta from "@/components/cta/FinalCta";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Hero />
      <CoreWorkflow />
      <Problem />
      <WhyResolvr />
      <AudienceSection />
      <McpSection />
      <ProductDemo />
      <SecuritySection />
      <InstallationSection />
      <CiFeedbackLoop />
      <TechnicalCredibility />
      <FinalCta />
    </main>
  );
}
