import { AppWindow, Laptop, TerminalSquare, Container, type LucideIcon } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

type Platform = {
  name: string;
  formats: string[];
  icon: LucideIcon;
};

const PLATFORMS: Platform[] = [
  { name: "Windows", formats: ["Windows x64", "MSI"], icon: AppWindow },
  {
    name: "macOS",
    formats: ["Apple Silicon", "Intel"],
    icon: Laptop,
  },
  {
    name: "Linux",
    formats: [".deb", ".rpm", ".tar.gz"],
    icon: TerminalSquare,
  },
];

export default function InstallationSection() {
  return (
    <section id="install" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Installation"
          title="Install once. Resolve anywhere."
          sub="Resolvr is built as a native package for every major platform, plus a CLI and bundled MCP server. Native installers are on the way — build from source or self-host via Docker today."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="neu flex h-full flex-col items-center gap-4 rounded-2xl p-7 text-center">
                <span className="clay flex h-12 w-12 items-center justify-center !rounded-xl text-accent-coral">
                  <p.icon size={20} />
                </span>
                <h3 className="font-display text-[16px] font-bold text-text-primary">
                  {p.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {p.formats.map((f) => (
                    <span
                      key={f}
                      className="glass rounded-full px-2.5 py-1 font-mono text-[10.5px] text-text-secondary"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://github.com/DEADSERPENT/resolvr/tree/main/docker"
              className="skeuo-btn inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[14.5px] font-semibold"
            >
              <Container size={16} />
              Self-host via Docker
            </a>
            <a
              href="/installation"
              className="glass inline-flex items-center rounded-2xl px-6 py-3.5 text-[14.5px] font-medium text-text-primary transition-colors hover:border-glass-border-strong"
            >
              Full installation guide
            </a>
          </div>
          <a
            href="https://github.com/DEADSERPENT/resolvr/releases/latest"
            className="font-mono text-[11.5px] text-text-tertiary transition-colors hover:text-accent-sage"
          >
            View releases on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
