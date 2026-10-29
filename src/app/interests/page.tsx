import React from "react";
import Link from "next/link";
import {
  Compass,
  Search,
  BookOpen,
  Gamepad2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { interestsData } from "@/data/interests";

export const metadata = {
  title: "Beyond Technology | Gaarvi Bhatia",
  description:
    "Personal intellectual dimensions of Gaarvi Bhatia: forensic science, murder mysteries, Sherlockian deduction, gaming systems (Elden Ring, Ghost of Tsushima), and hardware virtualization.",
};

export default function InterestsPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-5 h-5 text-terracotta" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-forest" />;
      case "Gamepad2":
        return <Gamepad2 className="w-5 h-5 text-forest" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-ink" />;
      default:
        return <Sparkles className="w-5 h-5 text-forest" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <Compass className="w-3.5 h-3.5" />
            <span>Multidimensional Identity & Intellectual Influences</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Beyond the Code
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            A developer is more than their programming syntax. Here are the intellectual curiosities,
            literary influences, system-driven games, and hardware explorations that shape how I think.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interestsData.map((category) => (
            <article
              key={category.id}
              className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-paper-muted border border-rule-border flex items-center justify-center">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-ink">
                      {category.title}
                    </h2>
                    <p className="text-xs font-serif italic text-forest font-medium">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-ink-secondary font-medium leading-relaxed bg-paper-muted/50 p-3.5 rounded-lg border border-rule-border">
                  {category.summary}
                </p>

                <div className="space-y-3 text-sm text-ink-secondary leading-relaxed pt-1">
                  {category.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-rule-border space-y-2">
                <span className="text-xs font-mono uppercase text-ink-muted font-semibold block">
                  Core Themes & Touchpoints:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.keyHighlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-paper-muted text-ink-secondary text-xs font-mono border border-rule-border"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial Concluding Note */}
      <section className="bg-paper-muted/50 py-16 border-y border-rule-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-display font-bold text-ink">
              Looking for Patterns in Every Discipline
            </h3>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              Whether it’s calculating the trajectory of a physical bullet, analyzing memory registers in a
              virtual machine, timing a counter-punch on the karate mat, or piecing together fragmented lore
              in an ancient fantasy ruins—the cognitive loop is always the same: observe closely, respect the
              constraints, eliminate assumptions, and let the facts assemble the truth.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest text-paper text-xs font-mono font-medium hover:bg-forest-hover transition-colors shadow-editorial"
              >
                <span>Read the Full Personal Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

