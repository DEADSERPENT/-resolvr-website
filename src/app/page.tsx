import Hero from "@/components/hero/Hero";
import Problem from "@/components/problem/Problem";
import CoreWorkflow from "@/components/workflow/CoreWorkflow";
import ProductDemo from "@/components/demo/ProductDemo";
import McpSection from "@/components/mcp/McpSection";
import SecuritySection from "@/components/security/SecuritySection";
import IndividualSection from "@/components/developers/IndividualSection";
import OrganizationSection from "@/components/organizations/OrganizationSection";
import CloudArchitecture from "@/components/cloud/CloudArchitecture";
import InstallationSection from "@/components/installation/InstallationSection";
import DeveloperTerminal from "@/components/terminal/DeveloperTerminal";
import ArchitectureSection from "@/components/architecture/ArchitectureSection";
import WhyResolvr from "@/components/why/WhyResolvr";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import GithubSection from "@/components/github/GithubSection";
import DocsSection from "@/components/docs/DocsSection";
import OpenSourceSection from "@/components/opensource/OpenSourceSection";
import FinalCta from "@/components/cta/FinalCta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Problem />
      <CoreWorkflow />
      <ProductDemo />
      <McpSection />
      <SecuritySection />
      <IndividualSection />
      <OrganizationSection />
      <CloudArchitecture />
      <InstallationSection />
      <DeveloperTerminal />
      <ArchitectureSection />
      <WhyResolvr />
      <ComparisonTable />
      <GithubSection />
      <DocsSection />
      <OpenSourceSection />
      <FinalCta />
    </main>
  );
}
