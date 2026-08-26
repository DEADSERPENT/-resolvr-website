import { AlertTriangle, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

const CHECKLIST = [
  "Context retrieved",
  "Local fix applied",
  "Tests passed",
  "CI passed",
  "Approval received",
  "Commit pushed",
  "Thread resolved",
];

export default function GithubSection() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="GitHub"
          title="From review comment to closed thread."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong rounded-3xl p-7 sm:p-9">
            <div className="mb-5 flex items-center gap-2 font-mono text-[12.5px] text-text-secondary">
              <GithubMark size={15} />
              PR #42
            </div>

            <div className="skeuo-terminal flex items-start gap-2.5 rounded-xl p-4">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-warning" />
              <p className="text-[13.5px] text-text-primary">
                Linux detection is incorrect.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2.5">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="shrink-0 text-accent-sage" />
                  <span className="text-[13.5px] text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-8 flex justify-center">
          <a
            href="https://github.com/DEADSERPENT/resolvr"
            className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-medium text-text-primary transition-colors hover:border-glass-border-strong"
          >
            <GithubMark size={16} />
            View Resolvr on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
