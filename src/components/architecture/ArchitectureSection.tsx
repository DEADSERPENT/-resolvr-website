import {
  Bot,
  Workflow,
  FolderGit2,
  FlaskConical,
  ShieldCheck,
  UploadCloud,
  ArrowDown,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Architecture"
          title="Small surface. Clear boundaries."
          sub="Every component in the loop has one job. Nothing writes to GitHub without passing through the approval gate."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-col items-center gap-2 rounded-3xl p-8 sm:p-10">
            <span className="clay flex h-10 w-10 items-center justify-center !rounded-lg text-text-primary">
              <Bot size={17} />
            </span>
            <span className="mt-2 font-mono text-[11.5px] text-text-secondary">
              Coding Agent
            </span>
            <span className="my-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-coral">
              MCP
            </span>
            <ArrowDown size={16} className="text-text-tertiary" />
            <span className="clay mt-1.5 flex h-11 w-11 items-center justify-center !rounded-xl text-accent-coral">
              <Workflow size={18} />
            </span>
            <span className="mt-2 font-mono text-[12px] font-semibold text-text-primary">
              Resolvr
            </span>

            <div className="mt-8 grid w-full grid-cols-3 gap-4 border-t border-glass-border pt-8">
              {[
                { label: "Workspace", icon: FolderGit2 },
                { label: "GitHub", icon: GithubMark },
                { label: "CI", icon: FlaskConical },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-sage">
                    <s.icon size={15} />
                  </span>
                  <span className="font-mono text-[10.5px] text-text-tertiary">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <ArrowDown size={16} className="mt-8 text-text-tertiary" />
            <div className="neu mt-2 flex items-center gap-2 rounded-xl px-4 py-2.5">
              <ShieldCheck size={14} className="text-accent-coral" />
              <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-text-secondary">
                Approval gate
              </span>
            </div>
            <ArrowDown size={16} className="mt-2 text-text-tertiary" />
            <div className="neu mt-2 flex items-center gap-2 rounded-xl px-4 py-2.5">
              <UploadCloud size={14} className="text-text-secondary" />
              <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-text-secondary">
                Commit / Push
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
