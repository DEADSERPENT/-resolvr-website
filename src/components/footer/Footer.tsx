const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#workflow" },
      { label: "Security", href: "/security" },
      { label: "Installation", href: "/installation" },
      { label: "Architecture", href: "#architecture" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "CLI", href: "/docs#getting-started" },
      { label: "MCP", href: "#mcp" },
      { label: "Docs", href: "/docs" },
      { label: "GitHub", href: "https://github.com/DEADSERPENT/resolvr" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "Deployment", href: "#organizations" },
      { label: "Security", href: "/security" },
      { label: "CI/CD", href: "#workflow" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/DEADSERPENT/resolvr" },
      { label: "Documentation", href: "/docs" },
      { label: "Issues", href: "https://github.com/DEADSERPENT/resolvr/issues" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full px-4 pb-10 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-3xl px-7 py-10 sm:px-10">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-6">
            <div className="col-span-2 sm:col-span-2">
              <span className="font-display text-[15px] font-bold tracking-[0.16em] text-text-primary">
                RESOLVR
              </span>
              <p className="mt-3 max-w-[22ch] text-[13px] leading-relaxed text-text-secondary">
                Resolve code. Not review debt.
              </p>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary">
                  {col.title}
                </h4>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-glass-border pt-6 text-[12px] text-text-tertiary">
            © 2026 Resolvr
          </div>
        </div>
      </div>
    </footer>
  );
}
