import React from "react";
import Link from "next/link";
import { Search, ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-paper-card border border-rule-border shadow-elevated">
          <div className="w-12 h-12 rounded-full bg-sage text-forest flex items-center justify-center mx-auto border border-sage-deep">
            <Search className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-terracotta">
              Error 404 • Trace Missing
            </span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              No evidence found at this address.
            </h1>
          </div>

          <p className="text-xs sm:text-sm font-serif italic text-forest">
            “It is a capital mistake to theorize before one has data. Insensibly one begins to twist
            facts to suit theories, instead of theories to suit facts.”
            <span className="block not-italic font-mono text-[11px] text-ink-muted mt-1">
              — Sherlock Holmes (A Scandal in Bohemia)
            </span>
          </p>

          <p className="text-sm text-ink-secondary leading-relaxed">
            The requested route or file does not exist on this server. It may have been relocated, or the
            URL contains a typographical discrepancy.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest text-paper text-xs font-mono font-medium hover:bg-forest-hover transition-colors shadow-editorial"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper-muted border border-rule-border text-ink text-xs font-mono hover:bg-paper transition-colors"
            >
              <Compass className="w-4 h-4 text-ink-muted" />
              <span>Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

