import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <span className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-sage">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-sage" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 text-[16px] leading-relaxed text-text-secondary">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
