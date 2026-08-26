import {
  FolderGit2,
  GitPullRequest,
  FileSearch,
  Bot,
  FlaskConical,
  UserCheck,
  UploadCloud,
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
    title: "Workspace",
    desc: "Resolvr understands the current repository and branch.",
    icon: FolderGit2,
  },
  {
    n: "02",
    title: "PR",
    desc: "Discover the relevant pull request.",
    icon: GitPullRequest,
  },
  {
    n: "03",
    title: "Context",
    desc: "Retrieve review comments, changed files, and relevant context.",
    icon: FileSearch,
  },
  {
    n: "04",
    title: "Local",
    desc: "Let the coding agent work against the local workspace.",
    icon: Bot,
  },
  {
    n: "05",
    title: "Validate",
    desc: "Run tests and inspect CI status.",
    icon: FlaskConical,
  },
  {
    n: "06",
    title: "Approval",
    desc: "Require explicit human approval before the write path.",
    icon: UserCheck,
  },
  {
    n: "07",
    title: "Push",
    desc: "Commit and push the approved resolution.",
    icon: UploadCloud,
  },
  {
    n: "08",
    title: "Resolve",
    desc: "Resolve the addressed review thread and verify CI.",
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
