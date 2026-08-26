"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GithubMark from "@/components/icons/GithubMark";
import WorkflowDiagram from "./WorkflowDiagram";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full items-center justify-center px-4 pt-32 pb-20 sm:px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
      >
        <div className="flex flex-col items-start">
          <motion.span
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-sage"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-sage" />
            MCP-native · GitHub-connected
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] leading-[0.96] font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-[4.4rem]"
          >
            Resolve code.
            <br />
            <span className="bg-gradient-to-r from-accent-coral via-accent-sand to-accent-sage bg-clip-text text-transparent">
              Not review debt.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-text-secondary sm:text-lg"
          >
            Resolvr connects GitHub review feedback, your local workspace, CI,
            and AI coding agents into a controlled workflow that turns review
            comments into verified fixes.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#install"
              className="skeuo-btn inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-semibold"
            >
              Get Resolvr
            </a>
            <a
              href="https://github.com/DEADSERPENT/resolvr"
              className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-medium text-text-primary transition-colors hover:border-glass-border-strong"
            >
              <GithubMark size={16} />
              View on GitHub
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center gap-1.5 px-2 py-3.5 text-[14px] font-medium text-text-tertiary transition-colors hover:text-text-secondary"
            >
              See how it works
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-[11.5px] tracking-tight text-text-tertiary"
          >
            No autonomous merges. Every write requires human approval.
          </motion.p>
        </div>

        <motion.div variants={item} className="flex justify-center lg:justify-end">
          <WorkflowDiagram />
        </motion.div>
      </motion.div>
    </section>
  );
}
