import {
  Rocket,
  Package,
  Boxes,
  ShieldCheck,
  Code2,
  FlaskConical,
  Wrench,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Getting Started", href: "/docs#getting-started", icon: Rocket },
  { label: "Installation", href: "/docs/installation", icon: Package },
  { label: "Architecture", href: "/docs#architecture", icon: Boxes },
  { label: "Security", href: "/security", icon: ShieldCheck },
  { label: "Development", href: "/docs#development", icon: Code2 },
  { label: "Testing", href: "/docs#testing", icon: FlaskConical },
  { label: "Tools", href: "/docs#tools", icon: Wrench },
  { label: "Limitations", href: "/docs#limitations", icon: TriangleAlert },
];

export default function DocsSection() {
  return (
    <section id="docs" className="relative w-full px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Documentation"
          title="Built for developers. Documented for humans."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((link, i) => (
            <Reveal key={link.label} delay={(i % 4) * 0.06}>
              <a
                href={link.href}
                className="neu flex items-center gap-3 rounded-xl px-4 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                <link.icon size={16} className="shrink-0 text-accent-coral" />
                <span className="text-[13.5px] font-medium text-text-primary">
                  {link.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
