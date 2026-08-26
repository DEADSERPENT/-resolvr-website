import { Bot, Workflow, ArrowRight, ArrowUpRight, Scale, Tag, CircleCheck } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

const BADGES = [
  { label: "MIT licensed", icon: Scale },
  { label: "v1.0.0 stable release", icon: Tag },
  { label: "CI passing", icon: CircleCheck },
];

export default function TechnicalCredibility() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Built in the open"
          title="Local-first, agent-driven — nothing hidden."
          sub="There's no server-side event system, queue, or webhook ingress. The coding agent decides when to act; Resolvr is the execution, verification, and safety layer underneath it."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-wrap items-center justify-center gap-3 rounded-2xl p-6 sm:gap-4 sm:p-8">
            <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-text-primary">
              <Bot size={18} />
            </span>
            <span className="font-mono text-[11px] text-text-tertiary">
              IDE Agent
            </span>
            <ArrowRight size={16} className="text-text-tertiary" />
            <span className="glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-coral">
              MCP
            </span>
            <ArrowRight size={16} className="text-text-tertiary" />
            <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-accent-coral">
              <Workflow size={18} />
            </span>
            <span className="font-mono text-[11px] text-text-tertiary">
              Resolvr
            </span>
            <ArrowRight size={16} className="text-text-tertiary" />
            <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-text-primary">
              <GithubMark size={18} />
            </span>
            <span className="font-mono text-[11px] text-text-tertiary">
              GitHub
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {BADGES.map((b) => (
            <span
              key={b.label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium text-text-secondary"
            >
              <b.icon size={14} className="text-accent-sage" />
              {b.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/DEADSERPENT/resolvr/blob/main/docs/ARCHITECTURE.md"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent-sage transition-colors hover:text-accent-coral"
          >
            Read the architecture docs
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://github.com/DEADSERPENT/resolvr"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            <GithubMark size={14} />
            Browse the source
          </a>
        </Reveal>
      </div>
    </section>
  );
}
