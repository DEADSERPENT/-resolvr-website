import {
  Lock,
  ShieldCheck,
  PowerOff,
  RefreshCw,
  WifiOff,
  Server,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const CARDS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "One approval-gated write path",
    desc: "A single tool ever commits or pushes, and it never runs without your explicit sign-off in between.",
    icon: Lock,
  },
  {
    title: "Trust, but verify",
    desc: "Before writing anything, Resolvr independently re-checks branch, HEAD, and PR state against Git and GitHub — rather than trusting what the agent claims it changed.",
    icon: ShieldCheck,
  },
  {
    title: "Fail-closed by default",
    desc: "A production instance refuses to start without an API key configured. There's no accidental “open” mode.",
    icon: PowerOff,
  },
  {
    title: "Built-in CI feedback loop",
    desc: "Poll-friendly check status and failure-log excerpts, so your agent can diagnose and re-fix without leaving the editor.",
    icon: RefreshCw,
  },
  {
    title: "No webhooks, no background polling",
    desc: "Your agent drives every interaction — Resolvr only acts when asked.",
    icon: WifiOff,
  },
  {
    title: "Runs anywhere",
    desc: "Self-hosted via Docker, or installed as a native CLI on Windows, macOS, or Linux — no Java or Maven required.",
    icon: Server,
  },
];

export default function WhyResolvr() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Why Resolvr" title="Why teams trust it with the write path." align="center" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-accent-coral">
                  <c.icon size={18} />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
