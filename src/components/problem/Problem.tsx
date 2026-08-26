import {
  MessageCircle,
  ArrowLeftRight,
  Search,
  Wrench,
  PlayCircle,
  Upload,
  Clock,
  CornerDownLeft,
  CheckCheck,
  ArrowDown,
  GitPullRequest,
  Bot,
  Workflow,
  FlaskConical,
  UserCheck,
  GitCommitHorizontal,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

type IconComponent = LucideIcon | typeof GithubMark;
type Step = { label: string; icon: IconComponent };

const TRADITIONAL: Step[] = [
  { label: "GitHub", icon: GithubMark },
  { label: "Read comment", icon: MessageCircle },
  { label: "Switch to IDE", icon: ArrowLeftRight },
  { label: "Find the code", icon: Search },
  { label: "Fix it by hand", icon: Wrench },
  { label: "Run tests", icon: PlayCircle },
  { label: "Push", icon: Upload },
  { label: "Wait for CI", icon: Clock },
  { label: "Back to GitHub", icon: CornerDownLeft },
  { label: "Resolve thread", icon: CheckCheck },
];

const WITH_RESOLVR: Step[] = [
  { label: "GitHub PR Review", icon: GitPullRequest },
  { label: "Coding Agent", icon: Bot },
  { label: "Resolvr", icon: Workflow },
  { label: "Local Fix", icon: Wrench },
  { label: "Tests / CI", icon: FlaskConical },
  { label: "Human Approval", icon: UserCheck },
  { label: "Commit & Push", icon: GitCommitHorizontal },
  { label: "Review Resolved", icon: CheckCircle2 },
];

function Timeline({
  steps,
  tone,
}: {
  steps: Step[];
  tone: "muted" | "accent";
}) {
  return (
    <ol className="flex flex-col items-stretch">
      {steps.map((step, i) => (
        <li key={step.label} className="flex flex-col items-center">
          <div
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 ${
              tone === "accent" ? "clay" : "neu"
            }`}
          >
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                tone === "accent"
                  ? "text-accent-coral"
                  : "text-text-tertiary"
              }`}
            >
              <step.icon size={15} strokeWidth={2.25} />
            </span>
            <span className="text-[13.5px] font-medium text-text-primary">
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 ? (
            <ArrowDown
              size={14}
              strokeWidth={2}
              className="my-1.5 text-text-tertiary/70"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default function Problem() {
  return (
    <section id="product" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The problem"
          title="A review comment isn't a fix — someone still has to make it one."
          sub="GitHub Copilot can review your pull request and leave comments — but turning those comments into verified code changes, tests, and resolved threads still requires a workflow. Someone has to open the editor, read every thread, fix the code, and resolve each conversation by hand."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-6">
          <Reveal>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
              Without Resolvr
            </p>
            <Timeline steps={TRADITIONAL} tone="muted" />
          </Reveal>

          <div className="hidden items-center justify-center px-2 lg:flex">
            <div className="glass-strong flex h-12 w-12 items-center justify-center rounded-full font-mono text-[11px] font-semibold text-text-tertiary">
              vs
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-coral">
              With Resolvr
            </p>
            <Timeline steps={WITH_RESOLVR} tone="accent" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
