import { FolderGit2, GitPullRequest, Bot, FlaskConical, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ProductDemo() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Product"
          title="See a review comment become a resolution."
          sub="Resolvr sits between your GitHub PR and your coding agent — pulling context in, and holding the write path behind an approval."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong overflow-hidden rounded-3xl p-2 sm:p-3">
            <div className="skeuo-terminal rounded-[22px] p-5 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                <span className="ml-3 font-mono text-[11px] text-text-tertiary">
                  Resolvr MCP — workspace D:\Resolvr
                </span>
              </div>

              <div className="flex flex-col gap-5 font-mono text-[13px] leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="clay flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg text-accent-coral">
                    <GitPullRequest size={15} />
                  </span>
                  <div>
                    <p className="text-text-tertiary">PR #42</p>
                    <p className="mt-1 text-text-primary">
                      &quot;Linux detection is broken here.&quot;
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-black/10" />

                <div className="flex items-start gap-3">
                  <span className="clay flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg text-accent-sage">
                    <Bot size={15} />
                  </span>
                  <div>
                    <p className="text-text-tertiary">Agent</p>
                    <p className="mt-1 text-text-primary">
                      I&apos;ll inspect the implementation…
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-black/10" />

                <div className="flex items-start gap-3">
                  <span className="clay flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg text-accent-sand">
                    <FlaskConical size={15} />
                  </span>
                  <div className="flex-1">
                    <p className="text-text-tertiary">Validation</p>
                    <div className="mt-1.5 flex flex-col gap-1 text-text-primary">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-success" />
                        Focused tests
                      </span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-success" />
                        Full CLI tests
                      </span>
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-success" />
                        CI
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-black/10" />

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="clay flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg text-text-primary">
                      <FolderGit2 size={15} />
                    </span>
                    <p className="text-text-primary">Ready for approval</p>
                  </div>
                  <button
                    type="button"
                    className="skeuo-btn w-full rounded-xl px-5 py-2.5 text-[12.5px] font-semibold sm:w-auto"
                  >
                    Approve Resolution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
