import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Resolvr — Resolve Code, Not Review Debt",
  description:
    "Resolvr connects GitHub pull requests, local workspaces, CI, and AI coding agents into a controlled workflow for resolving code review feedback.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="atmosphere" aria-hidden="true" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
