import { Bot, Workflow, FolderGit2, FlaskConical, ArrowDown } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

const SPOKES = [
  { label: "GitHub", icon: GithubMark },
  { label: "Local workspace", icon: FolderGit2 },
  { label: "CI", icon: FlaskConical },
];

const AGENT_CARDS = [
  {
    name: "Claude Code",
    desc: "Connects to Resolvr's MCP server to pull PR context and drive the resolution loop from the CLI.",
  },
  {
    name: "GitHub Copilot",
    desc: "Uses the same MCP surface to read workspace and PR context before proposing a fix.",
  },
];

export default function McpSection() {
  return (
    <section id="mcp" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Protocol"
          title="Built around MCP."
          sub="Resolvr exposes its workflow through a Model Context Protocol server, so a coding agent can interact with repository and PR resolution capabilities directly."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-col items-center gap-2 rounded-3xl p-8 sm:p-12">
            <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-text-primary">
              <Bot size={18} />
            </span>
            <span className="mt-2 font-mono text-[12px] text-text-secondary">
              Claude Code
            </span>
            <ArrowDown size={16} className="my-2 text-text-tertiary" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent-coral">
              MCP
            </span>
            <ArrowDown size={16} className="my-2 text-text-tertiary" />
            <span className="clay flex h-12 w-12 items-center justify-center !rounded-xl text-accent-coral">
              <Workflow size={20} />
            </span>
            <span className="mt-2 font-mono text-[12px] font-semibold text-text-primary">
              Resolvr
            </span>

            <div className="mt-8 grid w-full grid-cols-3 gap-4 border-t border-glass-border pt-8">
              {SPOKES.map((spoke) => (
                <div
                  key={spoke.label}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-sage">
                    <spoke.icon size={15} />
                  </span>
                  <span className="text-center font-mono text-[10.5px] text-text-tertiary">
                    {spoke.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-md text-center font-mono text-[11.5px] text-text-tertiary">
          Connect your coding agent to Resolvr through MCP.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {AGENT_CARDS.map((card, i) => (
            <Reveal key={card.name} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-text-primary">
                  {card.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
