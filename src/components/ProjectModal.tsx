"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Wrench, Calendar, Users, Layers, ExternalLink } from "lucide-react";
import { ProjectCaseStudy } from "@/data/projects";
import StatusBadge from "./StatusBadge";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-paper rounded-xl shadow-elevated border border-rule-border flex flex-col overflow-hidden text-ink"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-rule-border bg-paper-muted/50">
          <div className="space-y-2 pr-6">
            <div className="flex items-center gap-3 flex-wrap">
              <StatusBadge status={project.status} />
              <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                {project.category}
              </span>
              {project.teamSize && (
                <span className="text-xs font-mono text-ink-secondary bg-paper px-2 py-0.5 rounded border border-rule-border">
                  {project.teamSize}
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-ink">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary font-medium">
              {project.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-paper border border-transparent hover:border-rule-border transition-all focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body with 13-Point Case Study Architecture */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Metadata quick row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-paper-muted border border-rule-border text-xs font-mono">
            <div>
              <span className="text-ink-muted block mb-1">Timeline</span>
              <span className="font-medium text-ink">{project.date}</span>
            </div>
            <div>
              <span className="text-ink-muted block mb-1">Project Status</span>
              <span className="font-medium text-ink">{project.status}</span>
            </div>
            {project.deadline && (
              <div>
                <span className="text-ink-muted block mb-1">Target Deadline</span>
                <span className="font-medium text-terracotta">{project.deadline}</span>
              </div>
            )}
            <div>
              <span className="text-ink-muted block mb-1">Repository</span>
              <span className="font-medium text-forest">Public / Lab Tracked</span>
            </div>
          </div>

          {/* 1. Overview */}
          <section className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
              <span>01.</span> Project Overview
            </h3>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              {caseStudy.overview}
            </p>
          </section>

          {/* 2. Problem Statement & 3. Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 p-4 rounded-lg bg-paper-card border border-rule-border">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta flex items-center gap-2">
                <span>02.</span> Problem Statement
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </section>

            <section className="space-y-2 p-4 rounded-lg bg-paper-card border border-rule-border">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>03.</span> Core Objectives
              </h3>
              <ul className="space-y-2 text-sm text-ink-secondary">
                {caseStudy.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 4. My Role & 5. Tools and Tech */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>04.</span> Individual Role & Contribution
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {caseStudy.myRole}
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>05.</span> Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {caseStudy.toolsAndTech.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-sage text-forest text-xs font-mono font-medium border border-sage-deep"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* 6. Design Methodology & 7. Implementation */}
          <section className="space-y-4 p-5 rounded-lg bg-paper-muted border border-rule-border">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>06.</span> Design & Methodology
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {caseStudy.designMethodology}
              </p>
            </div>
            <div className="border-t border-rule-border pt-4 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>07.</span> Technical Implementation
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {caseStudy.implementation}
              </p>
            </div>
          </section>

          {/* 8. Challenges Encountered & 9. Testing & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta flex items-center gap-2">
                <span>08.</span> Technical Challenges
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {caseStudy.challenges}
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>09.</span> Testing & Verification
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {caseStudy.testingAndResults}
              </p>
            </section>
          </div>

          {/* 10. Limitations & 11. What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-2 p-4 rounded-lg bg-amber-50/50 border border-amber-200/60">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 flex items-center gap-2">
                <span>10.</span> Honest Limitations
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {caseStudy.limitations}
              </p>
            </section>

            <section className="space-y-2 p-4 rounded-lg bg-sage/50 border border-forest/20">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
                <span>11.</span> Key Engineering Lessons
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {caseStudy.whatILearned}
              </p>
            </section>
          </div>

          {/* 12. Future Improvements & 13. Demo Note */}
          <section className="space-y-2 pt-2 border-t border-rule-border">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-forest flex items-center gap-2">
              <span>12.</span> Future Improvements & Planned Expansions
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed">
              {caseStudy.futureImprovements}
            </p>
            {caseStudy.demoNote && (
              <p className="text-xs font-mono text-ink-muted mt-2 italic">
                Note on 13. Verification: {caseStudy.demoNote}
              </p>
            )}
          </section>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-rule-border bg-paper-muted flex items-center justify-between">
          <span className="text-xs font-mono text-ink-muted">
            Case Study • Gaarvi Bhatia Portfolio
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-forest text-paper text-sm font-medium hover:bg-forest-hover transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

