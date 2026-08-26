import {
  Eye,
  Lightbulb,
  Wrench,
  FlaskConical,
  ShieldCheck,
  UploadCloud,
  UserCheck,
  SearchCheck,
  KeyRound,
  GitCommitHorizontal,
  EyeOff,
  WifiOff,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const PIPELINE = [
  { label: "Read", icon: Eye },
  { label: "Understand", icon: Lightbulb },
  { label: "Fix", icon: Wrench },
  { label: "Test", icon: FlaskConical },
];

const GUARANTEES: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Human approval",
    desc: "No commit or push happens before your explicit sign-off on the resolution.",
    icon: UserCheck,
  },
  {
    title: "Trust, but verify",
    desc: "Resolvr re-checks branch, HEAD, and PR state against Git and GitHub before writing anything — it never trusts what the agent claims it changed.",
    icon: SearchCheck,
  },
  {
    title: "Fail-closed by default",
    desc: "A production instance refuses to start without an API key configured. There's no accidental open mode.",
    icon: KeyRound,
  },
  {
    title: "One write path",
    desc: "A single tool ever commits or pushes to GitHub — every other action is read-only.",
    icon: GitCommitHorizontal,
  },
  {
    title: "Secrets never logged",
    desc: "Your GitHub token and API key are never echoed back in a response, log line, or commit message.",
    icon: EyeOff,
  },
  {
    title: "No webhooks, no polling",
    desc: "There's no server-side event system. Your agent drives every interaction — Resolvr only acts when asked.",
    icon: WifiOff,
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Security model"
          title="Automation with a human in the loop."
          sub="Every resolution passes through the same pipeline. The approval gate is not optional, and it is not skippable from the outside."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-col items-center gap-6 rounded-3xl p-6 sm:p-10">
            <div className="flex w-full flex-wrap items-center justify-center gap-3">
              {PIPELINE.map((step) => (
                <div
                  key={step.label}
                  className="neu flex items-center gap-2 rounded-xl px-4 py-2.5"
                >
                  <step.icon size={14} className="text-text-secondary" />
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-text-secondary">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <div className="h-6 w-px bg-black/15" />
              <div className="clay flex items-center gap-2 !rounded-2xl px-6 py-3 text-accent-coral">
                <ShieldCheck size={18} />
                <span className="font-mono text-[12.5px] font-semibold uppercase tracking-[0.1em]">
                  Approval required
                </span>
              </div>
              <div className="h-6 w-px bg-black/15" />
            </div>

            <div className="neu flex items-center gap-2 rounded-xl px-4 py-2.5">
              <UploadCloud size={14} className="text-text-secondary" />
              <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-text-secondary">
                Commit / Push
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.07}>
              <div className="glass h-full rounded-2xl p-5">
                <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-sage">
                  <g.icon size={16} />
                </span>
                <h3 className="mt-3 text-[14.5px] font-semibold text-text-primary">
                  {g.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary">
                  {g.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <a
            href="https://github.com/DEADSERPENT/resolvr/blob/main/docs/SECURITY.md"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent-sage transition-colors hover:text-accent-coral"
          >
            Read the full security documentation
            <ArrowUpRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
