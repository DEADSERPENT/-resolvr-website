"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const SCRIPT = [
  { text: "$ resolvr doctor", cls: "text-text-primary" },
  { text: "", cls: "" },
  { text: "Resolvr doctor", cls: "text-text-primary" },
  { text: "--------------", cls: "text-text-tertiary" },
  { text: "", cls: "" },
  { text: "[OK] Platform: windows-x64", cls: "text-accent-sage" },
  { text: "[OK] Java runtime: bundled", cls: "text-accent-sage" },
  { text: "[OK] Repository: D:\\Resolvr", cls: "text-accent-sage" },
  { text: "[OK] Port 8080: available", cls: "text-accent-sage" },
  { text: "[OK] MCP endpoint: reachable", cls: "text-accent-sage" },
  { text: "", cls: "" },
  { text: "No blocking problems found.", cls: "text-text-primary" },
];

export default function DeveloperTerminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [lineCount, setLineCount] = useState(() => (reduced ? SCRIPT.length : 0));

  useEffect(() => {
    if (!inView || reduced) return;
    if (lineCount >= SCRIPT.length) return;
    const delay = SCRIPT[lineCount].text.startsWith("$") ? 420 : 160;
    const t = setTimeout(() => setLineCount((c) => c + 1), delay);
    return () => clearTimeout(t);
  }, [inView, lineCount, reduced]);

  return (
    <section className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Developer experience"
          title="A CLI that tells you the truth."
          sub="One command to check the environment, one to start, one to see what's running."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div ref={ref} className="skeuo-terminal rounded-2xl p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            </div>
            <div className="min-h-[220px] font-mono text-[13px] leading-relaxed">
              {SCRIPT.slice(0, lineCount).map((line, i) => (
                <p key={i} className={line.cls}>
                  {line.text || " "}
                </p>
              ))}
              {lineCount < SCRIPT.length ? (
                <span className="inline-block h-3.5 w-2 animate-pulse bg-text-tertiary/60 align-middle" />
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
