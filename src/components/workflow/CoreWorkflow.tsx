import {
  FolderGit2,
  FileSearch,
  Wrench,
  FlaskConical,
  ClipboardCheck,
  UserCheck,
  GitCommitHorizontal,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

type Stage = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const STAGES: Stage[] = [
  {
    n: "01",
    title: "Discover",
    desc: "Resolvr finds the pull request for your current branch and workspace.",
    icon: FolderGit2,
  },
  {
    n: "02",
    title: "Understand",
    desc: "Every review thread, comment, changed file, and CI status — in one call.",
    icon: FileSearch,
  },
  {
    n: "03",
    title: "Fix locally",
    desc: "Your coding agent edits the code with its own tools, right in your editor.",
    icon: Wrench,
  },
  {
    n: "04",
    title: "Validate",
    desc: "The agent runs its own tests and linters before proposing anything.",
    icon: FlaskConical,
  },
  {
    n: "05",
    title: "Prepare",
    desc: "Resolvr stages the change and re-verifies branch, HEAD, and PR state.",
    icon: ClipboardCheck,
  },
  {
    n: "06",
    title: "Approve",
    desc: "You review and explicitly approve — nothing moves without it.",
    icon: UserCheck,
  },
  {
    n: "07",
    title: "Commit & push",
    desc: "The one and only tool that ever writes to GitHub.",
    icon: GitCommitHorizontal,
  },
  {
    n: "08",
    title: "Resolve & verify",
    desc: "Threads are resolved on GitHub, and CI status is checked automatically.",
    icon: CheckCircle2,
  },
];

export default function CoreWorkflow() {
  return (
    <section id="workflow" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How Resolvr works"
          title="One controlled resolution loop."
          sub="Eight stages, always in the same order, always ending at an explicit approval gate before anything is written back to GitHub."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.n} delay={(i % 4) * 0.06}>
              <div className="neu flex h-full flex-col gap-4 rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-coral">
                    <stage.icon size={16} strokeWidth={2.25} />
                  </span>
                  <span className="font-mono text-[11px] text-text-tertiary">
                    {stage.n}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-text-primary">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
