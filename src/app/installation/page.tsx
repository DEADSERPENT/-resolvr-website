import type { Metadata } from "next";
import InstallationSection from "@/components/installation/InstallationSection";
import DeveloperTerminal from "@/components/terminal/DeveloperTerminal";
import FinalCta from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Installation — Resolvr",
  description:
    "Install Resolvr on Windows, macOS, or Linux. Native packages, a CLI, and a bundled MCP server.",
};

export default function InstallationPage() {
  return (
    <main id="main" className="flex flex-1 flex-col pt-20">
      <InstallationSection />
      <DeveloperTerminal />
      <FinalCta />
    </main>
  );
}
