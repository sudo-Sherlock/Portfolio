"use client";

import React, { useEffect } from "react";
import { X, Shield, Terminal, AlertTriangle, CheckCircle, Search, Lightbulb } from "lucide-react";
import { CTFWriteup } from "@/data/ctf";

interface CTFModalProps {
  writeup: CTFWriteup | null;
  onClose: () => void;
}

export default function CTFModal({ writeup, onClose }: CTFModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (writeup) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [writeup, onClose]);

  if (!writeup) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-ctf-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-paper rounded-xl shadow-elevated border border-rule-border flex flex-col overflow-hidden text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-rule-border bg-paper-muted/50">
          <div className="space-y-2 pr-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sage text-forest border border-sage-deep">
                {writeup.category}
              </span>
              <span className="px-2 py-0.5 rounded text-xs font-mono text-ink-secondary bg-paper border border-rule-border">
                {writeup.difficulty}
              </span>
              <span className="text-xs font-mono text-ink-muted">
                {writeup.date}
              </span>
            </div>
            <h2 id="modal-ctf-title" className="text-xl sm:text-2xl font-display font-bold text-ink">
              {writeup.title}
            </h2>
            <p className="text-xs font-mono text-forest">
              {writeup.event}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-paper border border-transparent hover:border-rule-border transition-all focus:outline-none"
            aria-label="Close writeup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Collaboration Note */}
          <div className="p-3.5 rounded-lg bg-paper-muted border border-rule-border text-xs text-ink-secondary flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-ink block">Team Collaboration</span>
              {writeup.teamCollaboration}
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              Challenge Objective
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {writeup.objective}
            </p>
          </div>

          {/* Clues and Observations */}
          <div className="space-y-2 p-4 rounded-lg bg-paper-card border border-rule-border">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
              <Search className="w-3.5 h-3.5" />
              Investigative Clues & Observations
            </h3>
            <ul className="space-y-2 text-sm text-ink-secondary">
              {writeup.cluesAndObservations.map((clue, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono text-terracotta text-xs font-bold mt-0.5">[{idx + 1}]</span>
                  <span>{clue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology & Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest">
              Methodology & Tools Deployed
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {writeup.methodology}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {writeup.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-paper-muted text-ink-secondary text-xs font-mono border border-rule-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Reasoning and Solution */}
          <div className="space-y-2 p-4 rounded-lg bg-paper-muted border border-rule-border">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5" />
              Reasoning & Solution Path
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {writeup.reasoningAndSolution}
            </p>
          </div>

          {/* Outcome & Key Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-sage/40 border border-forest/20 space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest block">
                Challenge Outcome
              </span>
              <p className="text-xs sm:text-sm text-ink-secondary">
                {writeup.outcome}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-paper-card border border-rule-border space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta block">
                Ethical Safeguard
              </span>
              <p className="text-xs text-ink-secondary">
                {writeup.ethicalNote || "Conducted strictly in authorized educational lab environments."}
              </p>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest">
              Lessons Learned
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-ink-secondary">
              {writeup.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-rule-border bg-paper-muted flex items-center justify-between">
          <span className="text-xs font-mono text-ink-muted">
            SOCS / Cipher Syndicate Write-up
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-forest text-paper text-sm font-medium hover:bg-forest-hover transition-colors"
          >
            Close Write-up
          </button>
        </div>
      </div>
    </div>
  );
}

