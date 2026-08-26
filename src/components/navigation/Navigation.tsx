"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import GithubMark from "@/components/icons/GithubMark";

const LINKS = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#workflow" },
  { label: "Developers", href: "/#developers" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Security", href: "/security" },
  { label: "Installation", href: "/installation" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and when the viewport grows past the
  // breakpoint where the inline nav takes over.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-6xl">
        <nav
          aria-label="Primary"
          className={`glass-strong flex w-full items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled ? "mt-3 px-4 py-2.5 shadow-[0_10px_36px_-14px_rgba(37,31,24,0.24)]" : "mt-5 px-5 py-3.5"
          }`}
        >
          <Link href="/#top" className="flex items-center gap-2 shrink-0">
            <span
              aria-hidden="true"
              className="clay flex h-7 w-7 items-center justify-center !rounded-lg"
            >
              <span className="h-2 w-2 rounded-full bg-accent-coral shadow-[0_0_10px_2px_rgba(185,61,34,0.45)]" />
            </span>
            <span className="font-display text-[15px] font-bold tracking-[0.16em] text-text-primary">
              RESOLVR
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 font-mono text-[12.5px] tracking-tight text-text-secondary">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 transition-colors hover:text-text-primary hover:bg-black/[0.04]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://github.com/DEADSERPENT/resolvr"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-glass-border px-3.5 py-2 text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary hover:border-glass-border-strong"
            >
              <GithubMark size={15} />
              GitHub
            </a>
            <a
              href="https://github.com/DEADSERPENT/resolvr/releases/latest"
              className="skeuo-btn hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-[13px] font-semibold"
            >
              Get Resolvr
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMenuOpen((v) => !v)}
              className="neu flex h-9 w-9 items-center justify-center rounded-xl text-text-primary lg:hidden"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div
            id="mobile-nav-panel"
            className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
          >
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[14px] font-medium text-text-primary transition-colors hover:bg-black/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/DEADSERPENT/resolvr"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-[14px] font-medium text-text-primary transition-colors hover:bg-black/[0.04]"
            >
              <GithubMark size={16} />
              GitHub
            </a>
            <a
              href="https://github.com/DEADSERPENT/resolvr/releases/latest"
              onClick={() => setMenuOpen(false)}
              className="skeuo-btn mt-1 inline-flex items-center justify-center rounded-xl px-4 py-3 text-[14px] font-semibold"
            >
              Get Resolvr
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
