"use client";

import React, { useState } from "react";
import {
  Shield,
  Terminal,
  Flag,
  Search,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Code,
  Network,
  Lock,
  ChevronDown,
  ChevronUp,
  Cpu,
  Activity
} from "lucide-react";
import { ctfWriteups, technicalArticles, CTFWriteup, TechnicalArticle } from "@/data/ctf";
import CTFModal from "@/components/CTFModal";
import NmapSimulator from "@/components/NmapSimulator";

export default function CTFPage() {
  const [selectedWriteup, setSelectedWriteup] = useState<CTFWriteup | null>(null);
  const [activeTab, setActiveTab] = useState<"writeups" | "simulator" | "journal">("writeups");
  const [expandedArticle, setExpandedArticle] = useState<string | null>("nmap-scan-interpretation-case-study");

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <Shield className="w-3.5 h-3.5" />
            <span>Practical Security & Methodical Investigation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            CTF Challenges & Technical Journal
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Hands-on learning through collegiate CTF problem-solving with team{" "}
            <strong className="text-ink font-semibold">Cipher Syndicate</strong> (Society of Cyber
            Security), network scanning diagnostic experiments, and documented systems workflows.
          </p>

          <div className="p-3.5 rounded-lg bg-paper-card border border-rule-border text-xs text-ink-secondary flex items-start gap-2.5 shadow-editorial">
            <Lock className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <span>
              <strong>Ethical Compliance & Verification:</strong> All challenges, scans, and notes are
              derived strictly from authorized educational labs, university CTF events, or local virtualized
              sandboxes. Sensitive flags and confidential event materials are intentionally excluded.
            </span>
          </div>
        </div>
      </section>

      {/* Primary Section Switcher */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-rule-border gap-6 sm:gap-8 overflow-x-auto pb-0">
          <button
            type="button"
            onClick={() => setActiveTab("writeups")}
            className={`pb-4 text-xs sm:text-sm font-mono font-medium transition-all relative shrink-0 ${
              activeTab === "writeups"
                ? "text-forest font-bold"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            <span>CTF Write-ups ({ctfWriteups.length})</span>
            {activeTab === "writeups" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("simulator")}
            className={`pb-4 text-xs sm:text-sm font-mono font-medium transition-all relative shrink-0 ${
              activeTab === "simulator"
                ? "text-forest font-bold"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            <span>Scan Diagnostics Simulator</span>
            {activeTab === "simulator" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("journal")}
            className={`pb-4 text-xs sm:text-sm font-mono font-medium transition-all relative shrink-0 ${
              activeTab === "journal"
                ? "text-forest font-bold"
                : "text-ink-secondary hover:text-ink"
            }`}
          >
            <span>Technical Journal ({technicalArticles.length})</span>
            {activeTab === "journal" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-forest" />
            )}
          </button>
        </div>
      </section>

      {/* TAB 2: Nmap Diagnostics Simulator */}
      {activeTab === "simulator" && (
        <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-display font-bold text-ink">
              Network Protocol & Scanner Behavior Lab
            </h2>
            <p className="text-sm text-ink-secondary">
              Interactive demonstration of how packet flags, connection handshakes, and firewall filters
              affect observable port states.
            </p>
          </div>
          <NmapSimulator />
        </section>
      )}

      {/* TAB 1: CTF Writeups */}
      {activeTab === "writeups" && (
        <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ctfWriteups.map((writeup, idx) => (
              <article
                key={writeup.id}
                className={`group p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial hover:border-forest/40 transition-all flex flex-col justify-between cursor-pointer space-y-6 scroll-reveal ${
                  idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
                }`}
                onClick={() => setSelectedWriteup(writeup)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sage text-forest border border-sage-deep">
                      {writeup.category}
                    </span>
                    <span className="text-xs font-mono text-ink-muted">
                      {writeup.difficulty}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-display font-bold text-ink group-hover:text-forest transition-colors">
                      {writeup.title}
                    </h2>
                    <p className="text-xs font-mono text-forest mt-1">
                      {writeup.event}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed line-clamp-3">
                    {writeup.objective}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-rule-border">
                    <span className="text-[11px] font-mono uppercase text-ink-muted block">
                      Tools Used:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {writeup.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-paper-muted text-ink-secondary text-[11px] font-mono border border-rule-border"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-rule-border flex items-center justify-between text-xs">
                  <span className="font-mono text-ink-muted">{writeup.date}</span>
                  <span className="inline-flex items-center gap-1 text-forest font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Read Full Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Cipher Syndicate Collaboration Callout */}
          <div className="p-6 sm:p-8 rounded-xl bg-paper-muted border border-rule-border space-y-3">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
              <Shield className="w-4 h-4" />
              The Cipher Syndicate Collaboration
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-3xl">
              Within the Society of Cyber Security (SOCS) at Newton School of Technology, team Cipher
              Syndicate meets regularly to dissect challenges, analyze vulnerability vectors, and document
              step-by-step methodologies. Working collaboratively teaches how to communicate technical findings
              clearly—a vital skill for professional incident response and security auditing.
            </p>
          </div>
        </section>
      )}

      {/* TAB 2: Technical Learning Journal */}
      {activeTab === "journal" && (
        <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-display font-bold text-ink">
              Diagnostic Notes & Technical Experiments
            </h2>
            <p className="text-sm text-ink-secondary">
              Distinguishing between tutorials, personal learning notes, and diagnostic experiments.
            </p>
          </div>

          <div className="space-y-6">
            {technicalArticles.map((article) => {
              const isExpanded = expandedArticle === article.id;
              return (
                <article
                  key={article.id}
                  className="rounded-xl bg-paper-card border border-rule-border shadow-editorial overflow-hidden transition-all"
                >
                  <div
                    className="p-6 sm:p-8 cursor-pointer select-none space-y-4 hover:bg-paper-muted/30 transition-colors"
                    onClick={() => setExpandedArticle(isExpanded ? null : article.id)}
                  >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-forest/10 text-forest border border-forest/20">
                          {article.type}
                        </span>
                        <span className="text-xs font-mono text-ink-muted">
                          {article.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono text-ink-muted">
                        <span>{article.readTime}</span>
                        <span>{article.date}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-forest" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-ink-muted" />
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-ink hover:text-forest transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-ink-secondary mt-1">
                        {article.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-paper-muted text-ink-secondary text-[11px] font-mono border border-rule-border"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content View */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 border-t border-rule-border bg-paper/60 pt-6">
                      <div className="prose prose-sm max-w-none text-ink-secondary font-sans leading-relaxed space-y-4">
                        {article.content.split("\n\n").map((block, idx) => {
                          if (block.startsWith("### ")) {
                            return (
                              <h4 key={idx} className="text-base font-display font-bold text-ink mt-6 mb-2">
                                {block.replace("### ", "")}
                              </h4>
                            );
                          }
                          if (block.startsWith("#### ")) {
                            return (
                              <h5 key={idx} className="text-sm font-mono font-bold text-forest mt-4 mb-1">
                                {block.replace("#### ", "")}
                              </h5>
                            );
                          }
                          if (block.startsWith("```")) {
                            const codeContent = block.replace(/```[a-z]*\n?/g, "");
                            return (
                              <pre
                                key={idx}
                                className="p-4 rounded-lg bg-paper-muted text-ink font-mono text-xs overflow-x-auto border border-rule-border my-4"
                              >
                                <code>{codeContent}</code>
                              </pre>
                            );
                          }
                          return <p key={idx} className="text-sm leading-relaxed">{block}</p>;
                        })}
                      </div>

                      <div className="mt-8 pt-4 border-t border-rule-border flex items-center justify-between text-xs font-mono text-ink-muted">
                        <span>Documented in controlled lab environment</span>
                        <button
                          type="button"
                          onClick={() => setExpandedArticle(null)}
                          className="text-forest hover:underline"
                        >
                          Collapse article ↑
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Modal */}
      <CTFModal writeup={selectedWriteup} onClose={() => setSelectedWriteup(null)} />
    </div>
  );
}

