import React from "react";
import Link from "next/link";
import {
  Code2,
  Shield,
  Network,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Terminal,
  BookOpen
} from "lucide-react";
import { skillsData, learningPhilosophy } from "@/data/skills";

export const metadata = {
  title: "Skills & Learning Profile | Gaarvi Bhatia",
  description:
    "Grounded technical profile: Python programming, Nmap network diagnostics, Kali Linux workflows, socket programming, and technical communication. Strictly evidence-driven without arbitrary percentages.",
};

export default function SkillsPage() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "programming-and-logic":
        return <Code2 className="w-5 h-5 text-forest" />;
      case "cybersecurity-and-forensics":
        return <Shield className="w-5 h-5 text-terracotta" />;
      case "networking-and-systems":
        return <Network className="w-5 h-5 text-forest" />;
      case "technical-communication":
        return <MessageSquare className="w-5 h-5 text-ink" />;
      default:
        return <Terminal className="w-5 h-5 text-forest" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Applied in Projects":
        return "bg-sage text-forest border-sage-deep font-semibold";
      case "Active Exploration":
        return "bg-terracotta-subtle text-terracotta border-terracotta/20 font-medium";
      case "Foundational Competence":
        return "bg-forest/10 text-forest border-forest/20 font-medium";
      case "Conceptual Grounding":
        return "bg-paper-muted text-ink-secondary border-rule-border font-medium";
      default:
        return "bg-paper-muted text-ink-secondary border-rule-border";
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <Terminal className="w-3.5 h-3.5" />
            <span>Verifiable Skills & Learning Approach</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Skills & Learning Profile
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            A grounded, accurate inventory of programming, security tooling, networking concepts, and
            technical communication—distinguishing clearly between completed projects, active practice, and
            conceptual foundations.
          </p>

          <div className="p-4 rounded-xl bg-paper-card border border-rule-border text-xs text-ink-secondary space-y-1.5 shadow-editorial">
            <span className="font-mono font-bold text-forest uppercase tracking-wider block">
              Ethical Presentation Standard (PRD Section 13.6)
            </span>
            <p className="leading-relaxed">
              No arbitrary percentage progress bars. No unverified certification badges. No exaggerated
              claims of mastery based solely on installing tools. Every skill listed below is grounded in a
              specific project, lab experiment, or university coursework module.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Philosophy Callout */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-xl bg-paper-muted border border-rule-border space-y-4">
          <div className="flex items-center gap-2 text-forest">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Method of Learning
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">
            {learningPhilosophy.coreTenet}
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-3xl">
            {learningPhilosophy.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {learningPhilosophy.rulesApplied.map((rule, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-paper-card border border-rule-border text-xs text-ink-secondary flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories Grid */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <article
              key={category.id}
              className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-paper-muted border border-rule-border flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-ink">
                      {category.categoryName}
                    </h2>
                    <p className="text-xs text-ink-muted">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-lg bg-paper-muted/50 border border-rule-border space-y-2 hover:bg-paper-muted transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-sm text-ink">
                          {skill.name}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${getLevelBadge(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-ink-secondary leading-relaxed">
                        {skill.contextOfUse}
                      </p>

                      <div className="pt-2 border-t border-rule-border/60 flex items-center gap-1.5 text-[11px] font-mono text-ink-muted">
                        <span className="text-forest font-semibold">Evidence:</span>
                        <span>{skill.verifiedThrough}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Navigation Callout */}
      <section className="bg-paper-muted/60 py-16 border-y border-rule-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-display font-bold text-ink">
              Examine the Evidence
            </h3>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              Skills are only as credible as the work supporting them. Explore the projects, CTF
              write-ups, and networking case studies that verify these competencies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-lg bg-forest text-paper text-xs font-mono font-medium hover:bg-forest-hover transition-colors shadow-editorial"
              >
                <span>Browse Project Case Studies</span>
              </Link>
              <Link
                href="/ctf"
                className="px-5 py-2.5 rounded-lg bg-paper-card border border-rule-border text-xs font-mono text-ink hover:text-forest transition-colors shadow-editorial"
              >
                <span>Review CTF Write-ups</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
