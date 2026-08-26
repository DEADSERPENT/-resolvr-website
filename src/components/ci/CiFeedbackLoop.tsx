import { XCircle, ArrowRight, Wrench, CheckCircle2, Clock } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function CiFeedbackLoop() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="CI feedback loop"
          title="A failing check doesn't mean starting over."
          sub="After a push, Resolvr checks CI status without blocking. If a check fails, it surfaces exactly what broke so your agent can diagnose and re-fix — without you leaving the editor."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong flex flex-col items-stretch gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
            <div className="skeuo-terminal flex-1 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-[13px] font-medium text-text-primary">
                <XCircle size={15} className="text-error" />
                build (ubuntu-latest)
              </div>
              <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-text-tertiary">
                AssertionError: expected status 200, got 500
                <br />
                at UserServiceTest.testFetchUser (line 42)
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-text-tertiary sm:flex-col">
              <Wrench size={16} className="text-accent-coral" />
              <ArrowRight size={16} className="sm:hidden" />
              <span className="hidden h-8 w-px bg-black/10 sm:block" />
            </div>

            <div className="skeuo-terminal flex-1 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-[13px] font-medium text-text-primary">
                <CheckCircle2 size={15} className="text-success" />
                build (ubuntu-latest)
              </div>
              <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-accent-sage">
                All checks passing
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-6 flex items-center justify-center gap-2 font-mono text-[11.5px] text-text-tertiary">
          <Clock size={13} />
          Poll-friendly, non-blocking — your agent controls the wait between checks.
        </Reveal>
      </div>
    </section>
  );
}
