import { AppWindow, Laptop, TerminalSquare, Bot, Container, Users, KeyRound, ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const DEVELOPER_LINES = [
  "$ resolvr doctor",
  "[OK] Platform detected",
  "[OK] Repository found",
  "[OK] MCP endpoint reachable",
];

export default function AudienceSection() {
  return (
    <section id="developers" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who it's for"
          title="For individual developers, and for teams."
          sub="Install it yourself in a few minutes, or self-host it once for the whole team — the same approval-gated write path applies either way."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7 sm:p-8">
              <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-accent-coral">
                <Bot size={18} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-text-primary">
                Individual developers
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Install Resolvr locally, connect the coding agent you already
                use, and let it turn review comments into approved fixes —
                without leaving your editor.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { label: "Windows", icon: AppWindow },
                  { label: "macOS", icon: Laptop },
                  { label: "Linux", icon: TerminalSquare },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium text-text-secondary"
                  >
                    <p.icon size={13} />
                    {p.label}
                  </span>
                ))}
              </div>

              <div className="skeuo-terminal mt-5 rounded-xl p-4 font-mono text-[11.5px] leading-relaxed">
                {DEVELOPER_LINES.map((line, i) => (
                  <p
                    key={i}
                    className={
                      line.startsWith("$") ? "text-text-primary" : "text-accent-sage"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <a
                href="https://github.com/DEADSERPENT/resolvr/releases/latest"
                className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent-sage transition-colors hover:text-accent-coral"
              >
                Install Resolvr
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="organizations" className="glass h-full rounded-3xl p-7 sm:p-8">
              <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-accent-sage">
                <Users size={18} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-text-primary">
                Teams &amp; organizations
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                Self-host one shared instance for the whole team via Docker.
                An API key makes sharing it safe — every developer's agent
                still goes through the same approval gate before anything
                reaches GitHub.
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                <div className="neu flex items-center gap-2.5 rounded-xl px-4 py-3">
                  <Container size={15} className="shrink-0 text-accent-coral" />
                  <span className="text-[13px] font-medium text-text-primary">
                    Self-hosted via Docker — no per-seat install
                  </span>
                </div>
                <div className="neu flex items-center gap-2.5 rounded-xl px-4 py-3">
                  <KeyRound size={15} className="shrink-0 text-accent-coral" />
                  <span className="text-[13px] font-medium text-text-primary">
                    One API key shared across the team&apos;s agents
                  </span>
                </div>
              </div>

              <p className="mt-5 text-[12.5px] leading-relaxed text-text-tertiary">
                Resolvr uses a single shared GitHub token for whatever repos
                that token can reach — reasonable for a team hosting it
                themselves, not a multi-tenant service for hosting strangers.
              </p>

              <a
                href="https://github.com/DEADSERPENT/resolvr/tree/main/docker"
                className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent-sage transition-colors hover:text-accent-coral"
              >
                See the Docker setup
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
