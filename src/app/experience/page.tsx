import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Shield,
  Trophy,
  Calendar,
  MapPin,
  CheckCircle2,
  Mail,
  Award,
  ArrowRight,
  Flame,
  Users
} from "lucide-react";
import { educationData, societyData, karateAchievements } from "@/data/experience";

export const metadata = {
  title: "Experience, SOCS & Karate | Gaarvi Bhatia",
  description:
    "Academic trajectory at Newton School of Technology, Rishihood University, Society of Cyber Security (SOCS) initiatives including Hack The Hunt 2026, and competitive karate achievements.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundations, Leadership & Martial Discipline</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Education, Society & Achievements
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            A cohesive view of formal computer science training, hands-on student leadership within the
            Society of Cyber Security (SOCS), and the disciplined competitive background forged in martial arts.
          </p>
        </div>
      </section>

      {/* 1. Academic Trajectory */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-rule-border pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-forest" />
            <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">
              Formal Education
            </h2>
          </div>
          <span className="text-xs font-mono text-ink-muted">Academic Credentials</span>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-forest font-semibold uppercase tracking-wider">
                    {edu.status}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-ink-secondary flex items-center gap-2 flex-wrap">
                    <span>{edu.institution}</span>
                    <span className="text-rule-border">•</span>
                    <span className="flex items-center gap-1 text-ink-muted text-xs font-mono">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded bg-paper-muted border border-rule-border text-xs font-mono text-ink-secondary shrink-0">
                  {edu.period}
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-rule-border">
                <span className="text-xs font-mono uppercase text-ink-muted font-semibold block">
                  Curricular & Research Highlights:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-secondary">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Society of Cyber Security (SOCS) */}
      <section className="bg-paper-muted/50 py-16 border-y border-rule-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="border-b border-rule-border pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-forest" />
              <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">
                Society of Cyber Security (SOCS)
              </h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sage text-forest border border-sage-deep">
              {societyData.status}
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-display font-bold text-ink">
                  {societyData.role} — {societyData.organization}
                </h3>
                <span className="text-xs font-mono text-ink-muted">{societyData.period}</span>
              </div>
              <p className="text-xs font-mono text-forest">
                {societyData.affiliation}
              </p>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed pt-2">
                {societyData.description}
              </p>
            </div>

            {/* Core Responsibilities */}
            <div className="space-y-2 pt-2 border-t border-rule-border">
              <span className="text-xs font-mono uppercase text-ink-muted font-semibold block">
                Key Responsibilities & Operational Contributions:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary">
                {societyData.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Initiatives Grid (Hack The Hunt 2026 + Cipher Syndicate) */}
            <div className="pt-4 border-t border-rule-border space-y-4">
              <span className="text-xs font-mono uppercase text-ink-muted font-semibold block">
                Flagship Society Initiatives:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {societyData.keyInitiatives.map((init, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-paper-muted border border-rule-border space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-forest/10 text-forest font-semibold">
                        {init.status}
                      </span>
                      <span className="text-xs font-mono text-ink-muted">{init.date}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-ink">
                      {init.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {init.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Communication Callout */}
            <div className="p-4 rounded-lg bg-sage/30 border border-forest/20 text-xs sm:text-sm text-ink-secondary space-y-1.5">
              <span className="font-mono font-bold text-forest uppercase tracking-wider block">
                Professional Communication & Outreach Expertise
              </span>
              <p className="leading-relaxed">
                Leading external sponsorship outreach for events like Hack The Hunt 2026 requires more than
                technical acumen: it demands articulating an event’s value proposition clearly, establishing
                structured email communication, and representing the university organization with poise and
                professionalism to external partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Karate: Discipline Beyond Technology */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-rule-border pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-terracotta" />
            <h2 className="text-xl sm:text-2xl font-display font-bold text-ink">
              Karate: Discipline Beyond Technology
            </h2>
          </div>
          <span className="text-xs font-mono text-ink-muted">Martial Arts Record</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Philosophy / Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-4">
              <div className="flex items-center gap-2 text-terracotta">
                <Flame className="w-5 h-5" />
                <span className="text-xs font-mono uppercase font-bold tracking-wider">
                  The Value of Physical Practice
                </span>
              </div>
              <h3 className="text-lg font-display font-bold text-ink">
                Composure, Preparation & Pressure
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Long before debugging socket states or decoding CTF ciphers, karate taught me the meaning of
                deliberate practice. Stepping onto the mat against an opponent who is actively testing your
                weaknesses strips away all pretense.
              </p>
              <p className="text-sm text-ink-secondary leading-relaxed">
                You learn to breathe under pressure, respect opponents, maintain balance, and recover quickly
                from errors. That physical discipline directly informs my approach to technical problem-solving:
                methodical, composed, and willing to endure repetitive practice to achieve mastery.
              </p>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="lg:col-span-7 space-y-4">
            {karateAchievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-terracotta font-semibold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-display font-bold text-ink">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-forest mt-0.5">
                      {item.event} • {item.period}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-terracotta-subtle text-terracotta text-xs font-mono border border-terracotta/20 shrink-0">
                    {item.rankAtTime}
                  </span>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

