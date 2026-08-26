import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import MotionProvider from "@/components/shared/MotionProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const title = "Resolvr — The bridge between a GitHub PR review and the fix";
const description =
  "Resolvr connects your coding agent to the PR for your current branch, hands it the review threads and CI status, and — once you explicitly approve — commits, pushes, and resolves the addressed threads. Built for GitHub Copilot, VS Code, JetBrains, and Claude Code, over MCP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Resolvr",
  },
  description,
  keywords: [
    "GitHub Copilot",
    "MCP",
    "Model Context Protocol",
    "PR review automation",
    "Claude Code",
    "coding agent",
    "GitHub pull request",
    "CI feedback loop",
  ],
  authors: [{ name: "Resolvr" }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Resolvr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="atmosphere" aria-hidden="true" />
        <a
          href="#main"
          className="glass-strong fixed left-4 top-4 z-100 -translate-y-24 rounded-xl px-4 py-2.5 text-[13px] font-medium text-text-primary transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navigation />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
