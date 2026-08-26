"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type MotionValue,
} from "framer-motion";
import {
  GitPullRequest,
  Bot,
  Workflow,
  Wrench,
  FlaskConical,
  UserCheck,
  GitCommitHorizontal,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Node = {
  label: string;
  sublabel: string;
  icon: LucideIcon;
};

// Mirrors Resolvr's actual documented workflow (README "How it works"):
// GitHub PR Review -> Coding Agent -> Resolvr -> Local Fix -> Tests ->
// Human Approval -> Commit & Push -> Review Resolved.
const NODES: Node[] = [
  { label: "GitHub PR Review", sublabel: "Copilot leaves comments", icon: GitPullRequest },
  { label: "Coding Agent", sublabel: "VS Code, JetBrains, or Claude Code", icon: Bot },
  { label: "Resolvr", sublabel: "MCP execution & approval gate", icon: Workflow },
  { label: "Local Fix", sublabel: "Agent edits with its own tools", icon: Wrench },
  { label: "Tests / CI", sublabel: "Agent runs its own test suite", icon: FlaskConical },
  { label: "Human Approval", sublabel: "Explicit developer sign-off", icon: UserCheck },
  { label: "Commit & Push", sublabel: "The only write path", icon: GitCommitHorizontal },
  { label: "Review Resolved", sublabel: "Threads resolved on GitHub", icon: CheckCircle2 },
];

const CYCLE_SECONDS = 8;

export default function WorkflowDiagram() {
  const progress = useMotionValue(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedRef.current) {
      progress.set(1);
      return;
    }
    // Plays three passes to make the loop legible, then settles on
    // "Review Resolved" rather than animating forever.
    const controls = animate(progress, [0, 1, 1], {
      duration: CYCLE_SECONDS,
      times: [0, 0.86, 1],
      ease: "linear",
      repeat: 2,
    });
    return () => controls.stop();
  }, [progress]);

  const beaconTop = useTransform(progress, [0, 1], ["2%", "98%"]);

  return (
    <div className="glass-strong relative w-full max-w-md rounded-3xl p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between px-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
          Resolution loop
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_2px_rgba(76,111,71,0.45)]" />
          <span className="font-mono text-[11px] text-text-tertiary">live</span>
        </span>
      </div>

      <div className="relative pl-9">
        <div className="absolute left-[15px] top-1 bottom-1 w-px bg-gradient-to-b from-black/0 via-black/10 to-black/0" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[15px] -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-accent-coral"
          style={{
            top: beaconTop,
            boxShadow: "0 0 14px 4px rgba(185,61,34,0.4)",
          }}
        />

        <ul className="flex flex-col gap-1">
          {NODES.map((node, i) => (
            <WorkflowNodeRow
              key={node.label}
              node={node}
              index={i}
              total={NODES.length}
              progress={progress}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function WorkflowNodeRow({
  node,
  index,
  total,
  progress,
}: {
  node: Node;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const center = index / (total - 1);
  const span = 1 / (total - 1) / 1.6;

  const glow = useTransform(
    progress,
    [center - span, center, center + span],
    [0.4, 1, 0.4],
    { clamp: true }
  );
  const scale = useTransform(glow, [0.4, 1], [1, 1.04]);

  return (
    <motion.li
      className="relative flex items-center gap-3 rounded-xl py-2 pr-2"
      style={{ opacity: useTransform(glow, [0.4, 1], [0.7, 1]) }}
    >
      <motion.span
        aria-hidden="true"
        className="clay relative flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg text-accent-coral"
        style={{
          scale,
          boxShadow: useTransform(
            glow,
            (v) =>
              `inset 0 1px 1px rgba(255,255,255,0.95), inset 0 -6px 12px rgba(170,145,105,0.3), 0 0 ${
                v * 22
              }px ${v * 4}px rgba(185,61,34,${v * 0.28})`
          ),
        }}
      >
        <node.icon size={15} strokeWidth={2.25} />
      </motion.span>
      <span className="flex min-w-0 flex-col">
        <span className="truncate text-[13.5px] font-medium text-text-primary">
          {node.label}
        </span>
        <span className="truncate font-mono text-[10.5px] text-text-tertiary">
          {node.sublabel}
        </span>
      </span>
    </motion.li>
  );
}
