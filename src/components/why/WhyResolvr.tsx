import { Search, ShieldCheck, Flag } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const CARDS = [
  {
    title: "Context",
    desc: "Understand the PR before touching the code.",
    icon: Search,
  },
  {
    title: "Control",
    desc: "Human approval stays between analysis and write operations.",
    icon: ShieldCheck,
  },
  {
    title: "Closure",
    desc: "Don't stop at fixing code. Close the loop.",
    icon: Flag,
  },
];

export default function WhyResolvr() {
  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Why Resolvr" title="Three things it actually does." align="center" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass-strong h-full rounded-2xl p-7 text-center">
                <span className="clay mx-auto flex h-12 w-12 items-center justify-center !rounded-xl text-accent-coral">
                  <c.icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
