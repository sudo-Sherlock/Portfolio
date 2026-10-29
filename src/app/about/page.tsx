import React from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Shield,
  BookOpen,
  Scale,
  Sparkles,
  Milestone,
  CheckCircle2,
  HelpCircle
} from "lucide-react";
import { storyChapters } from "@/data/about";

export const metadata = {
  title: "My Story | Gaarvi Bhatia",
  description:
    "The detailed journey of Gaarvi Bhatia: from Yamunanagar roots and forensic science aspirations at NFSU to computer science, AI, and cybersecurity at Newton School of Technology, Rishihood University.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Editorial Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <Compass className="w-3.5 h-3.5" />
            <span>The Personal Journey • Expanded Identity Edition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-ink tracking-tight">
            Curiosity drives the investigation. Logic reveals the answer.
          </h1>

          <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-normal">
            A personal account of how an enduring fascination with forensic science and criminal
            investigation transformed into an engineering journey through Computer Science, Artificial
            Intelligence, and cybersecurity.
          </p>

          <div className="p-4 rounded-xl bg-paper-card border border-rule-border text-xs sm:text-sm text-ink-secondary flex items-start gap-3 shadow-editorial">
            <Sparkles className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
            <div>
              <strong className="text-ink font-semibold">The Core Thesis:</strong> Changing academic
              direction does not mean abandoning an earlier passion. In fact, digital systems represent the
              most extensive forensic record humanity has ever built.
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Index / Reading Navigation */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-paper-muted border border-rule-border">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-forest mb-4">
            Chapters in this Narrative
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
            {storyChapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="p-2.5 rounded bg-paper-card hover:bg-sage border border-rule-border hover:border-forest/40 transition-all flex items-center justify-between text-ink"
              >
                <span>
                  <strong className="text-forest mr-1.5">{chapter.number}.</strong>
                  {chapter.title}
                </span>
                <span className="text-ink-muted">↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Content */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-20">
          {storyChapters.map((chapter) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="scroll-mt-28 space-y-6 pt-8 border-t border-rule-border first:border-t-0 first:pt-0"
            >
              {/* Chapter Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-forest bg-sage px-2 py-0.5 rounded">
                    Chapter {chapter.number}
                  </span>
                  <span className="text-xs font-mono text-ink-muted">
                    {chapter.period}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                  {chapter.title}
                </h2>
                <p className="text-sm sm:text-base text-forest font-serif italic font-medium">
                  {chapter.subtitle}
                </p>
              </div>

              {/* Chapter Summary Callout */}
              <div className="p-4 rounded-lg bg-paper-muted/80 border-l-4 border-forest text-sm text-ink-secondary italic">
                “{chapter.summary}”
              </div>

              {/* Chapter Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-relaxed">
                {chapter.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Themes Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-ink-muted mr-1">Key Themes:</span>
                {chapter.keyThemes.map((theme) => (
                  <span
                    key={theme}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-paper-card text-ink-secondary border border-rule-border"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Educational & Career Alignment Summary */}
      <section className="bg-paper-muted/60 py-16 border-y border-rule-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold">
                Summary of Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                Where Passion Meets Capability
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-xl bg-paper-card border border-rule-border space-y-3">
                <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
                  <Shield className="w-4 h-4 text-forest" />
                  <span>Technical Specialization</span>
                </h3>
                <p className="text-ink-secondary leading-relaxed">
                  Deepening competence in network architectures, Linux environments, Python engineering, and
                  vulnerability analysis. Preparing for roles in security engineering and digital forensics.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-paper-card border border-rule-border space-y-3">
                <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
                  <Scale className="w-4 h-4 text-terracotta" />
                  <span>Public Service & Ethics</span>
                </h3>
                <p className="text-ink-secondary leading-relaxed">
                  Preserving the aspiration for high-integrity investigative work (such as CBI Sub-Inspector
                  via SSC CGL), driven by the belief that analytical skills should protect society and uphold truth.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-forest hover:text-forest-hover"
              >
                <span>Proceed to Projects & Technical Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink-secondary hover:text-ink"
              >
                <span>Direct Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
