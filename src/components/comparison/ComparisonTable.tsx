import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const ROWS: [string, string, string][] = [
  ["PR discovery", "Manual", "Automated"],
  ["Review context", "Manual", "Connected"],
  ["Local workspace", "Manual switching", "Agent-connected"],
  ["Validation", "Manual", "Integrated"],
  ["Approval", "Informal", "Explicit"],
  ["Commit/push", "Manual", "Controlled"],
  ["Thread resolution", "Manual", "Connected"],
  ["CI feedback", "Separate", "Integrated"],
];

export default function ComparisonTable() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Comparison"
          title="What actually changes."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="glass-strong overflow-hidden rounded-2xl">
            <div className="grid grid-cols-3 border-b border-glass-border px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-text-tertiary">
              <span>Workflow</span>
              <span>Traditional</span>
              <span className="text-accent-coral">Resolvr</span>
            </div>
            {ROWS.map((row, i) => (
              <div
                key={row[0]}
                className={`grid grid-cols-3 px-5 py-3.5 text-[13.5px] ${
                  i % 2 === 1 ? "bg-black/[0.02]" : ""
                }`}
              >
                <span className="font-medium text-text-primary">{row[0]}</span>
                <span className="text-text-tertiary">{row[1]}</span>
                <span className="font-medium text-accent-sage">{row[2]}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
