import {
  Building2,
  Users,
  FlaskConical,
  Workflow,
  Plug,
  ArrowDown,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import GithubMark from "@/components/icons/GithubMark";

const FEATURES = [
  "Centralized deployment",
  "Security boundaries",
  "Controlled write operations",
  "Auditability",
  "CI integration",
  "Self-hosting",
  "Docker",
  "Cloud deployment",
];

export default function OrganizationSection() {
  return (
    <section id="organizations" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="For organizations"
          title="For teams that need control, not another black box."
          sub="Resolvr can run centrally for a whole organization, with the same approval gate and write-path boundaries that apply to a single developer."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong mx-auto flex max-w-md flex-col items-center gap-2 rounded-3xl p-8">
            <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-text-primary">
              <Building2 size={18} />
            </span>
            <span className="mt-2 font-mono text-[12px] font-semibold text-text-primary">
              Organization
            </span>

            <div className="mt-6 grid w-full grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-sage">
                  <Users size={15} />
                </span>
                <span className="font-mono text-[10.5px] text-text-tertiary">
                  Developers
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-accent-sage">
                  <FlaskConical size={15} />
                </span>
                <span className="font-mono text-[10.5px] text-text-tertiary">
                  CI/CD
                </span>
              </div>
            </div>

            <ArrowDown size={16} className="my-3 text-text-tertiary" />

            <span className="clay flex h-11 w-11 items-center justify-center !rounded-xl text-accent-coral">
              <Workflow size={18} />
            </span>
            <span className="mt-2 font-mono text-[12px] font-semibold text-text-primary">
              Resolvr
            </span>

            <div className="mt-6 grid w-full grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-text-primary">
                  <GithubMark size={15} />
                </span>
                <span className="font-mono text-[10.5px] text-text-tertiary">
                  GitHub
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="clay flex h-9 w-9 items-center justify-center !rounded-lg text-text-primary">
                  <Plug size={15} />
                </span>
                <span className="font-mono text-[10.5px] text-text-tertiary">
                  MCP
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 flex flex-wrap justify-center gap-3">
          {FEATURES.map((f) => (
            <span
              key={f}
              className="glass rounded-full px-4 py-2 text-[12.5px] font-medium text-text-secondary"
            >
              {f}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
