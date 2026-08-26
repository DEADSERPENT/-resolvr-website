import { Star, GitFork, CircleDot, GitPullRequest } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

const REPO_URL = "https://github.com/DEADSERPENT/resolvr";

const ACTIONS = [
  { label: "Star", icon: Star, href: REPO_URL },
  { label: "Fork", icon: GitFork, href: `${REPO_URL}/fork` },
  { label: "Issues", icon: CircleDot, href: `${REPO_URL}/issues` },
  { label: "Pull Requests", icon: GitPullRequest, href: `${REPO_URL}/pulls` },
];

export default function OpenSourceSection() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="Open source"
          title="Inspectable by design."
          sub="The Resolvr codebase is public. Read the source, open an issue, or send a pull request."
          align="center"
        />

        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={REPO_URL}
            className="glass-strong inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-[13.5px] font-semibold text-text-primary"
          >
            <GithubMark size={16} />
            resolvr
          </a>
          {ACTIONS.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="neu inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium text-text-secondary"
            >
              <a.icon size={14} />
              {a.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
