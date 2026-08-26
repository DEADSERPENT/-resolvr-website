import type { Metadata } from "next";
import SecuritySection from "@/components/security/SecuritySection";
import FinalCta from "@/components/cta/FinalCta";

export const metadata: Metadata = {
  title: "Security — Resolvr",
  description:
    "Resolvr's security model: local-first resolution, an explicit human approval gate, fail-closed authentication, and a controlled write path to GitHub.",
};

export default function SecurityPage() {
  return (
    <main id="main" className="flex flex-1 flex-col pt-20">
      <SecuritySection />
      <FinalCta />
    </main>
  );
}
