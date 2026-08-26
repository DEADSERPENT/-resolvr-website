import { Bot, Code2, Blocks, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const AGENTS: { name: string; desc: string; icon: LucideIcon }[] = [
  {
    name: "VS Code",
    desc: "Copilot Agent Mode connects over MCP.",
    icon: Code2,
  },
  {
    name: "JetBrains",
    desc: "Copilot Agent Mode connects the same way.",
    icon: Blocks,
  },
  {
    name: "Claude Code",
    desc: "Add Resolvr as an MCP server.",
    icon: Sparkles,
  },
];

export default function McpSection() {
  return (
    <section id="integrations" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Integrations"
          title="Works with the coding agent you already use."
          sub="Resolvr's primary use case is resolving GitHub Copilot PR reviews. Every agent below connects to Resolvr the same way, over the Model Context Protocol."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-col items-center gap-4 rounded-3xl p-8 text-center sm:p-10">
            <span className="clay flex h-14 w-14 items-center justify-center !rounded-2xl text-accent-coral">
              <Bot size={24} />
            </span>
            <span className="glass rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent-sage">
              Primary integration
            </span>
            <h3 className="font-display text-xl font-bold text-text-primary">
              GitHub Copilot
            </h3>
            <p className="max-w-md text-[14px] leading-relaxed text-text-secondary">
              Copilot can review your pull request and leave comments.
              Resolvr is what turns those comments into a verified,
              approved fix.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.name} delay={0.06 + i * 0.06}>
              <div className="glass flex h-full flex-col items-center gap-2 rounded-2xl p-6 text-center">
                <span className="clay flex h-10 w-10 items-center justify-center !rounded-lg text-accent-sage">
                  <agent.icon size={17} />
                </span>
                <h4 className="mt-1 text-[14.5px] font-semibold text-text-primary">
                  {agent.name}
                </h4>
                <p className="text-[12.5px] leading-relaxed text-text-secondary">
                  {agent.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 flex justify-center">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11.5px] text-text-secondary">
            One MCP endpoint. Same connection for every agent.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
