"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Search,
  Terminal,
  Cpu,
  BookOpen,
  Trophy,
  Gamepad2,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Clock,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { projectsData, ProjectCaseStudy } from "@/data/projects";
import { ctfWriteups, CTFWriteup } from "@/data/ctf";
import ProjectModal from "@/components/ProjectModal";
import CTFModal from "@/components/CTFModal";
import StatusBadge from "@/components/StatusBadge";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedWriteup, setSelectedWriteup] = useState<CTFWriteup | null>(null);

  // Take featured projects
  const featuredProjects = projectsData.slice(0, 3);
  const featuredWriteup = ctfWriteups[0];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 5.1 Hero Section */}
      <section className="pt-12 sm:pt-20 lg:pt-28">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-8">
            {/* Status & Academic Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              <span>B.Tech CS & AI • Newton School of Technology, Rishihood University</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-ink tracking-tight leading-[1.08]">
                I look closer.
              </h1>
              <p className="text-xl sm:text-2xl text-forest font-serif italic font-medium">
                “Curiosity drives the investigation. Logic reveals the answer.”
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
              I’m <strong className="text-ink font-semibold">Gaarvi Bhatia</strong>, a Computer Science and
              Artificial Intelligence student with a longstanding fascination for forensic investigation and a
              growing practical focus on cybersecurity. From exploring how digital systems work to solving CTF
              challenges and documenting technical findings, I enjoy following questions beyond their obvious
              answers.
            </p>

            {/* Areas of Interest Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {[
                "Cybersecurity",
                "Digital Forensics",
                "Network Security",
                "Investigative Problem-Solving",
                "Python & Systems"
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-md bg-paper-card text-ink-secondary text-xs font-mono border border-rule-border shadow-editorial"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Calls to Action */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-forest text-paper font-medium text-sm hover:bg-forest-hover transition-colors shadow-editorial"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-paper-card text-ink font-medium text-sm border border-rule-border hover:bg-paper-muted transition-colors shadow-editorial"
              >
                <span>Read My Story</span>
                <ChevronRight className="w-4 h-4 text-ink-muted" />
              </Link>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-lg text-xs font-mono text-ink-secondary hover:text-ink transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 The Short Introduction */}
      <section className="bg-paper-muted/60 py-16 sm:py-20 border-y border-rule-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold">
                Perspective
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                A little about the person behind the projects.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-ink-secondary text-base sm:text-lg leading-relaxed">
              <p>
                My path did not begin in front of a terminal. It began with an absorbing interest in
                forensic science—the discipline of reconstructing events, questioning apparent facts, and
                uncovering what truly happened through empirical traces.
              </p>
              <p>
                As I transitioned into Computer Science and Artificial Intelligence, I realized that computing
                and forensics share the same intellectual core. Networks, memory registers, file systems, and
                communication protocols all record evidence of digital behavior. Cybersecurity gave me a
                direct medium to apply deductive instincts to digital infrastructure.
              </p>
              <p className="text-sm text-ink-muted font-mono pt-2">
                Currently developing foundational engineering skills in programming, discrete mathematics, and
                computer networks while actively participating in collegiate CTF exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 A Journey with a Clear Connection */}
      <section>
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold">
              Intellectual Continuity
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
              Different fields. One investigative instinct.
            </h2>
            <p className="text-ink-secondary text-base">
              The evolution from criminalistics curiosity to computing foundations and cybersecurity practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Milestone 1 */}
            <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-terracotta-subtle text-terracotta flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-terracotta font-semibold uppercase tracking-wider">
                    The Original Fascination
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-ink">
                    Forensic Science
                  </h3>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  An early interest in criminalistics, physical evidence, crime scene reconstruction, and the
                  analytical deduction associated with Sherlock Holmes. Led to in-depth research into the
                  National Forensic Sciences University (NFSU).
                </p>
              </div>
              <div className="pt-4 border-t border-rule-border text-xs font-mono text-ink-muted">
                Curiosity & Analytical Reasoning
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-forest/10 text-forest flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-forest font-semibold uppercase tracking-wider">
                    The Technical Direction
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-ink">
                    Computer Science & AI
                  </h3>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  The decision to pursue a B.Tech in CS & AI at Newton School of Technology, Rishihood
                  University. Grounding curiosity in concrete engineering skills: programming logic, algorithms,
                  and network architectures.
                </p>
              </div>
              <div className="pt-4 border-t border-rule-border text-xs font-mono text-ink-muted">
                Newton School of Technology • Rishihood Univ
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-sage text-forest flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-forest font-semibold uppercase tracking-wider">
                    The Evolving Focus
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-ink">
                    Cybersecurity & Forensics
                  </h3>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Applying deductive instincts to digital security. Practical hands-on exploration through
                  authorized CTF challenges with Cipher Syndicate, network packet analysis, and active
                  membership in the Society of Cyber Security (SOCS).
                </p>
              </div>
              <div className="pt-4 border-t border-rule-border text-xs font-mono text-ink-muted">
                SOCS • Cipher Syndicate • CTF Labs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Featured Work */}
      <section>
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-rule-border pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold">
                Selected Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                Featured Projects & Technical Cases
              </h2>
              <p className="text-sm text-ink-secondary">
                Authentic, documented work with transparent status labels.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-forest hover:text-forest-hover"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial hover:border-forest/40 transition-all flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <StatusBadge status={project.status} />
                    <span className="text-xs font-mono text-ink-muted">{project.category}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-ink group-hover:text-forest transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-ink-secondary mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-rule-border mt-6 flex items-center justify-between text-xs">
                  <span className="font-mono text-ink-muted">{project.date}</span>
                  <span className="inline-flex items-center gap-1 text-forest font-medium group-hover:translate-x-0.5 transition-transform">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Featured CTF Dissection Banner */}
          <div className="p-6 sm:p-8 rounded-xl bg-paper-muted border border-rule-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-sage text-forest font-medium">
                  Featured CTF Write-up
                </span>
                <span className="text-xs font-mono text-ink-muted">
                  Cipher Syndicate • {featuredWriteup.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-ink">
                {featuredWriteup.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary">
                {featuredWriteup.objective}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedWriteup(featuredWriteup)}
              className="shrink-0 px-4 py-2.5 rounded-lg bg-paper-card border border-rule-border text-xs font-mono text-ink hover:text-forest hover:border-forest transition-colors flex items-center gap-2 shadow-editorial"
            >
              <span>Examine Methodology</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5.5 Beyond the Screen */}
      <section className="bg-paper-muted/40 py-16 sm:py-20 border-y border-rule-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold">
                Multidimensional Perspective
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                Beyond the Screen
              </h2>
              <p className="text-sm text-ink-secondary">
                Discipline, observation, and intellectual curiosities outside the computer lab.
              </p>
            </div>
            <Link
              href="/interests"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-forest hover:text-forest-hover"
            >
              <span>Explore All Interests</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Karate card */}
            <div className="p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-3">
              <div className="w-8 h-8 rounded bg-forest/10 text-forest flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Competitive Karate
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                ~14 tournaments and 12 gold medals across district, state, and national events. 1st place in
                Kumite at Shito Kai Invitational. Taught physical composure and mental resilience under pressure.
              </p>
            </div>

            {/* Mysteries & Deduction card */}
            <div className="p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-3">
              <div className="w-8 h-8 rounded bg-terracotta-subtle text-terracotta flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Mysteries & Deduction
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Avid reader of murder mysteries, crime fiction, and behavioral psychology. Inspired by Sherlock
                Holmes to eliminate cognitive biases and question surface assumptions.
              </p>
            </div>

            {/* Gaming systems card */}
            <div className="p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-3">
              <div className="w-8 h-8 rounded bg-sage text-forest flex items-center justify-center">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Systems in Gaming
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Drawn to complex, deliberate mechanics in Elden Ring and Ghost of Tsushima. Appreciating pattern
                recognition, spatial discipline, and environmental forensic storytelling.
              </p>
            </div>

            {/* Hardware & Virtualization card */}
            <div className="p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-3">
              <div className="w-8 h-8 rounded bg-paper-muted text-ink flex items-center justify-center border border-rule-border">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                System Virtualization
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                Configuring VMware Fusion on MacBook Pro (M5, 16GB) to explore Windows 11 and Kali Linux ARM
                kernels. Hands-on exploration of hypervisors and memory allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.6 Closing Section */}
      <section>
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-2xl bg-paper-card border border-rule-border shadow-elevated text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-forest font-semibold">
              The Journey Ahead
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Still learning. Always investigating.
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl mx-auto">
              I’m building my foundation in computer science, exploring cybersecurity through practical
              work, and continuing to discover where my interest in digital investigation can take me.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-lg bg-forest text-paper font-medium text-sm hover:bg-forest-hover transition-colors shadow-editorial"
              >
                View Project Archive
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-paper-muted border border-rule-border text-ink font-medium text-sm hover:bg-paper transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CTFModal writeup={selectedWriteup} onClose={() => setSelectedWriteup(null)} />
    </div>
  );
}
