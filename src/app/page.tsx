import Hero from "@/components/hero/Hero";
import CoreWorkflow from "@/components/workflow/CoreWorkflow";
import Problem from "@/components/problem/Problem";
import AudienceSection from "@/components/audience/AudienceSection";
import ProductDemo from "@/components/demo/ProductDemo";
import McpSection from "@/components/mcp/McpSection";
import SecuritySection from "@/components/security/SecuritySection";
import InstallationSection from "@/components/installation/InstallationSection";
import FinalCta from "@/components/cta/FinalCta";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <Hero />
      <CoreWorkflow />
      <Problem />
      <AudienceSection />
      <ProductDemo />
      <McpSection />
      <SecuritySection />
      <InstallationSection />
      <FinalCta />
    </main>
  );
}
