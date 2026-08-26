"use client";

import { useEffect, useState } from "react";
import GithubMark from "@/components/icons/GithubMark";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#workflow" },
  { label: "Security", href: "#security" },
  { label: "Developers", href: "#developers" },
  { label: "Organizations", href: "#organizations" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6">
      <nav
        className={`glass-strong flex w-full max-w-6xl items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? "mt-3 px-4 py-2.5 shadow-[0_10px_36px_-14px_rgba(37,31,24,0.24)]" : "mt-5 px-5 py-3.5"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span
            aria-hidden="true"
            className="clay flex h-7 w-7 items-center justify-center !rounded-lg"
          >
            <span className="h-2 w-2 rounded-full bg-accent-coral shadow-[0_0_10px_2px_rgba(224,81,47,0.45)]" />
          </span>
          <span className="font-display text-[15px] font-bold tracking-[0.16em] text-text-primary">
            RESOLVR
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-[12.5px] tracking-tight text-text-secondary">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 transition-colors hover:text-text-primary hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
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
            href="#install"
            className="skeuo-btn inline-flex items-center rounded-xl px-4 py-2 text-[13px] font-semibold"
          >
            Get Resolvr
          </a>
        </div>
      </nav>
    </header>
  );
}
