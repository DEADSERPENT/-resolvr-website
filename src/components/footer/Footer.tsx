const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#workflow" },
      { label: "Integrations", href: "#integrations" },
      { label: "Security", href: "/security" },
      { label: "Installation", href: "/installation" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Installation guide", href: "/docs/installation" },
      {
        label: "Architecture",
        href: "https://github.com/DEADSERPENT/resolvr/blob/main/docs/ARCHITECTURE.md",
      },
      {
        label: "MCP tools reference",
        href: "https://github.com/DEADSERPENT/resolvr/blob/main/docs/TOOLS.md",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/DEADSERPENT/resolvr" },
      {
        label: "Latest release",
        href: "https://github.com/DEADSERPENT/resolvr/releases/latest",
      },
      {
        label: "Issues",
        href: "https://github.com/DEADSERPENT/resolvr/issues",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full px-4 pb-10 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-3xl px-7 py-10 sm:px-10">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
            <div className="col-span-2">
              <span className="font-display text-[15px] font-bold tracking-[0.16em] text-text-primary">
                RESOLVR
              </span>
              <p className="mt-3 max-w-[26ch] text-[13px] leading-relaxed text-text-secondary">
                The bridge between a GitHub PR review and the coding agent
                that fixes it.
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

          <div className="mt-10 flex flex-col gap-2 border-t border-glass-border pt-6 text-[12px] text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Resolvr</span>
            <span>MIT licensed · Open source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
