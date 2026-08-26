import { ArrowRight, Scale, Tag, CircleCheck, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import GithubMark from "@/components/icons/GithubMark";

const BADGES: { label: string; icon: LucideIcon }[] = [
  { label: "MIT licensed", icon: Scale },
  { label: "v1.0.0 stable release", icon: Tag },
  { label: "CI passing", icon: CircleCheck },
];

export default function FinalCta() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="glass-strong rounded-3xl px-6 py-16 text-center sm:px-14">
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem]">
              Turn review comments into resolved code.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-text-secondary">
              Connect your coding agent. Keep the approval gate. Close the loop.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="https://github.com/DEADSERPENT/resolvr/releases/latest"
                className="skeuo-btn inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-semibold"
              >
                Get Resolvr
                <ArrowRight size={15} />
              </a>
              <a
                href="https://github.com/DEADSERPENT/resolvr"
                className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-medium text-text-primary transition-colors hover:border-glass-border-strong"
              >
                <GithubMark size={16} />
                View on GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 border-t border-glass-border pt-6">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-text-secondary"
                >
                  <b.icon size={13} className="text-accent-sage" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
