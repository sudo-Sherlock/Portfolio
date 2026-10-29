"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  ArrowRight,
  ShieldAlert,
  Terminal,
  Code2,
  Info
} from "lucide-react";
import { projectsData, ProjectCaseStudy } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import StatusBadge from "@/components/StatusBadge";
import Card3DTilt from "@/components/Card3DTilt";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Networking", "Python Programming", "Digital Forensics"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Page Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engineering Portfolio & Systems Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Projects & Technical Work
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            Every entry represents authentic, verifiable learning: completed foundational code,
            collaborative university projects in active development, and documented research plans.
          </p>

          <div className="p-3.5 rounded-lg bg-paper-muted border border-rule-border text-xs text-ink-secondary flex items-start gap-2.5">
            <Info className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <span>
              <strong>Transparency standard:</strong> Projects are accurately classified as{" "}
              <span className="font-mono text-terracotta">In Progress</span>,{" "}
              <span className="font-mono text-forest">Completed</span>, or{" "}
              <span className="font-mono text-amber-800">Research & Planned</span>. No simulated
              credentials or exaggerated scopes.
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-paper-card border border-rule-border shadow-editorial flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
                  activeCategory === cat
                    ? "bg-forest text-paper shadow-sm"
                    : "text-ink-secondary hover:text-ink hover:bg-paper-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, tags..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-paper border border-rule-border text-xs focus:outline-none focus:border-forest text-ink placeholder:text-ink-muted"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-xl bg-paper-card border border-rule-border text-ink-muted text-sm">
            No projects match the selected criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card3DTilt
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <article className="group p-6 sm:p-7 rounded-xl bg-paper-card border border-rule-border shadow-editorial hover:border-forest/40 transition-all flex flex-col justify-between space-y-6 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <StatusBadge status={project.status} />
                      <span className="text-xs font-mono text-ink-muted">{project.category}</span>
                    </div>

                    <div>
                      <h2 className="text-xl font-display font-bold text-ink group-hover:text-forest transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-xs text-ink-secondary mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-paper-muted text-ink-secondary text-[11px] font-mono border border-rule-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-rule-border space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                      <span>{project.date}</span>
                      {project.deadline && (
                        <span className="text-terracotta font-medium">Due: {project.deadline}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-ink-secondary font-mono">
                        {project.caseStudy.toolsAndTech.slice(0, 2).join(", ")}
                      </span>
                      <span className="inline-flex items-center gap-1 text-forest font-medium group-hover:translate-x-0.5 transition-transform">
                        <span>Examine Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Card3DTilt>
            ))}
          </div>
        )}
      </section>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

