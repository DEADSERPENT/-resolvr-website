import { Laptop, Server, Building2, FlaskConical, FolderGit2, Bot, ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

export default function CloudArchitecture() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Deployment"
          title="Run it where your team works."
          sub="Resolvr runs the same resolution loop whether it's on a single developer's machine or centrally for an organization."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-col items-center gap-2 rounded-3xl p-8 sm:p-10">
            <span className="clay flex h-10 w-10 items-center justify-center !rounded-lg text-text-primary">
              <Laptop size={17} />
            </span>
            <span className="mt-2 font-mono text-[11.5px] text-text-secondary">
              Developer
            </span>
            <span className="my-2 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-coral">
              MCP
            </span>
            <ArrowDown size={16} className="text-text-tertiary" />
            <span className="clay mt-2 flex h-11 w-11 items-center justify-center !rounded-xl text-accent-coral">
              <Server size={18} />
            </span>
            <span className="mt-2 font-mono text-[12px] font-semibold text-text-primary">
              Resolvr Server
            </span>

            <div className="mt-8 grid w-full grid-cols-3 gap-4 border-t border-glass-border pt-8">
              {[
                { label: "GitHub", icon: GithubMark },
                { label: "CI", icon: FlaskConical },
                { label: "Workspace", icon: FolderGit2 },
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
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-2 text-text-primary">
                <Laptop size={16} />
                <h3 className="font-display text-[15px] font-bold">Local</h3>
              </div>
              <div className="mt-4 flex items-center gap-2 font-mono text-[12px] text-text-secondary">
                <span>Developer machine</span>
                <ArrowRight size={13} className="text-text-tertiary" />
                <span>Resolvr</span>
                <ArrowRight size={13} className="text-text-tertiary" />
                <span>Coding agent</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-2 text-text-primary">
                <Building2 size={16} />
                <h3 className="font-display text-[15px] font-bold">
                  Organization
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[12px] text-text-secondary">
                <span className="flex items-center gap-1">
                  <Bot size={12} /> Developer / agent
                </span>
                <ArrowRight size={13} className="text-text-tertiary" />
                <span>Org Resolvr</span>
                <ArrowRight size={13} className="text-text-tertiary" />
                <span>GitHub + CI</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
