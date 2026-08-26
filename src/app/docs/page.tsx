import type { Metadata } from "next";
import { Rocket, Package, Boxes, Code2, FlaskConical, Wrench, TriangleAlert, ArrowRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Documentation — Resolvr",
  description: "Getting started, architecture, development, testing, tools, and known limitations for Resolvr.",
};

type Topic = {
  id: string;
  title: string;
  icon: LucideIcon;
  body: string;
  href?: string;
};

const TOPICS: Topic[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    body: "Install Resolvr, point it at a repository, and run `resolvr doctor` to confirm your environment is ready before connecting a coding agent.",
  },
  {
    id: "installation",
    title: "Installation",
    icon: Package,
    body: "Windows, macOS, and Linux installers plus a portable Linux tarball — developer checkout vs. installed mode, PATH setup, RESOLVR_API_KEY, and the packaging security model.",
    href: "/docs/installation",
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: Boxes,
    body: "Resolvr sits between a coding agent and your workspace, GitHub, and CI, exposing its capabilities through an MCP server and gating every write behind explicit approval.",
  },
  {
    id: "development",
    title: "Development",
    icon: Code2,
    body: "Resolvr is built to run locally against your existing toolchain. Contributions run through the same CI and review process as any other pull request.",
  },
  {
    id: "testing",
    title: "Testing",
    icon: FlaskConical,
    body: "Focused unit tests and full CLI tests run before a resolution is presented for approval, and CI status is checked as part of the same validation step.",
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    body: "The MCP surface exposes workspace, PR, and resolution tools to a connected coding agent — nothing that bypasses the approval gate.",
  },
  {
    id: "limitations",
    title: "Limitations",
    icon: TriangleAlert,
    body: "Resolvr does not autonomously merge pull requests, guarantee a fix for every review comment, or claim support for every coding agent. Coverage grows deliberately.",
  },
];

export default function DocsPage() {
  return (
    <main className="flex flex-1 flex-col pt-20">
      <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Documentation"
            title="Built for developers. Documented for humans."
            align="center"
          />

          <div className="mt-14 flex flex-col gap-4">
            {TOPICS.map((topic, i) => {
              const inner = (
                <>
                  <div className="flex items-center gap-3">
                    <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-coral">
                      <topic.icon size={16} />
                    </span>
                    <h2 className="font-display text-[17px] font-bold text-text-primary">
                      {topic.title}
                    </h2>
                    {topic.href ? (
                      <ArrowRight
                        size={15}
                        className="ml-auto shrink-0 text-text-tertiary"
                      />
                    ) : null}
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-text-secondary">
                    {topic.body}
                  </p>
                </>
              );

              return (
                <Reveal key={topic.id} delay={(i % 3) * 0.06}>
                  {topic.href ? (
                    <a
                      id={topic.id}
                      href={topic.href}
                      className="glass scroll-mt-28 block rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div id={topic.id} className="glass scroll-mt-28 rounded-2xl p-6">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
