import {
  AppWindow,
  Laptop,
  TerminalSquare,
  Workflow,
  Bot,
  RefreshCw,
  Stethoscope,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const FEATURES = [
  { label: "Windows, macOS, Linux", icon: AppWindow },
  { label: "CLI + MCP server", icon: TerminalSquare },
  { label: "Claude Code & GitHub Copilot", icon: Bot },
  { label: "Local development mode", icon: Laptop },
  { label: "One-command diagnostics", icon: Stethoscope },
  { label: "Live status reporting", icon: RefreshCw },
];

const TERMINAL_LINES = [
  "$ resolvr doctor",
  "[OK] Platform detected",
  "[OK] Repository found",
  "[OK] MCP endpoint reachable",
  "",
  "$ resolvr status",
  "workspace   ready",
  "mcp server  running",
];

export default function IndividualSection() {
  return (
    <section id="developers" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <SectionHeading
            eyebrow="For individuals"
            title="For developers who want the boring parts automated."
            sub="Install locally, connect your coding agent, and let Resolvr carry review context from GitHub straight into your workspace."
          />

          <Reveal delay={0.1} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="neu flex items-center gap-2.5 rounded-xl px-4 py-3"
              >
                <f.icon size={15} className="shrink-0 text-accent-coral" />
                <span className="text-[13px] font-medium text-text-primary">
                  {f.label}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.16} className="mt-8">
            <a
              href="#install"
              className="skeuo-btn inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-semibold"
            >
              <Workflow size={16} />
              Install Resolvr
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="skeuo-terminal rounded-2xl p-6 font-mono text-[12.5px] leading-relaxed">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            </div>
            {TERMINAL_LINES.map((line, i) => (
              <p
                key={i}
                className={
                  line.startsWith("$")
                    ? "text-text-primary"
                    : line.startsWith("[OK]")
                      ? "text-accent-sage"
                      : line === ""
                        ? "h-3"
                        : "text-text-tertiary"
                }
              >
                {line || " "}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
