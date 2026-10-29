"use client";

import React, { useState } from "react";
import {
  Calendar,
  Search,
  Cpu,
  Shield,
  Trophy,
  GraduationCap,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Filter
} from "lucide-react";

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  category: "Martial Arts" | "Education" | "Forensics Aspiration" | "Cybersecurity & SOCS" | "Upcoming";
  status: "Completed" | "Foundational Milestone" | "Active Chapter" | "Upcoming Milestone";
  summary: string;
  details: string;
  tags: string[];
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "karate-discipline",
    year: "2018 – 2020",
    title: "Martial Arts Discipline & Tournament Composure",
    category: "Martial Arts",
    status: "Completed",
    summary:
      "Trained rigorously in karate, competing in approximately 14 tournaments and earning 12 gold medals across district, state, and school events.",
    details:
      "Highlighted by securing 1st place in Kumite at the Shito Kai Invitational (2019-20 period as a yellow belt). Forged a lifelong foundation in physical composure, tactical timing, and resilience under pressure.",
    tags: ["Shito Kai Invitational", "Kumite 1st Place", "Physical Discipline", "Pressure Management"]
  },
  {
    id: "cbse-pcm-years",
    year: "2022 – 2024",
    title: "Senior Secondary CBSE (PCM) Foundations",
    category: "Education",
    status: "Completed",
    summary:
      "Completed Class 11 and 12 under the CBSE curriculum with Physics, Chemistry, and Mathematics in Haryana.",
    details:
      "Developed mathematical deduction, quantitative problem-solving habits, and scientific inquiry. Simultaneously conducted extensive research into interdisciplinary entrance requirements for forensic institutions.",
    tags: ["CBSE PCM", "Mathematical Logic", "Scientific Method", "Analytical Reasoning"]
  },
  {
    id: "nfsu-aspiration",
    year: "2023 – 2024",
    title: "The NFSU Dream & Criminalistics Inquiry",
    category: "Forensics Aspiration",
    status: "Foundational Milestone",
    summary:
      "Deeply explored the integrated B.Sc.–M.Sc. Forensic Science programme at the National Forensic Sciences University (NFSU), Gandhinagar.",
    details:
      "Investigated the NFAT entrance test, CUET-UG combinations, and supplementary biological prerequisites (such as NIOS Biology). While not ultimately enrolled at NFSU, this authentic aspiration galvanized his enduring focus on evidence reconstruction and analytical investigation.",
    tags: ["NFSU Gandhinagar", "Integrated B.Sc.-M.Sc.", "NFAT & CUET", "Locard's Principle"]
  },
  {
    id: "passion-vs-practicality",
    year: "Early 2026",
    title: "Passion Versus Practicality: The Computing Bridge",
    category: "Education",
    status: "Foundational Milestone",
    summary:
      "A strategic decision to pursue Computer Science and Artificial Intelligence, recognizing computing as the modern arena for investigation.",
    details:
      "Balanced long-term career viability, financial independence, and family security with investigative curiosity. Discovered that network telemetry, memory traces, and system logs represent the most expansive forensic domain in existence.",
    tags: ["Career Strategy", "Financial Independence", "Systems Investigation", "Engineering Foundation"]
  },
  {
    id: "nst-rishihood-enrollment",
    year: "August 2026",
    title: "Enrolling at Newton School of Technology & Joining SOCS",
    category: "Education",
    status: "Active Chapter",
    summary:
      "Commenced undergraduate B.Tech in CS & AI at Newton School of Technology, Rishihood University (Delhi-NCR).",
    details:
      "Began coursework in Python Programming and Mathematics for Problem-Solving. Immediately became an active member of the Society of Cyber Security (SOCS), participating in technical workshops and security exercises.",
    tags: ["Newton School of Technology", "Rishihood University", "First-Year B.Tech", "SOCS"]
  },
  {
    id: "cipher-syndicate-ctf",
    year: "September 2026",
    title: "Cipher Syndicate CTF Working Group & Linux Workflows",
    category: "Cybersecurity & SOCS",
    status: "Active Chapter",
    summary:
      "Began weekly collaborative CTF problem-solving with team Cipher Syndicate within SOCS.",
    details:
      "Dissected real-world vulnerabilities across web session decoding, weak-modulus RSA cryptography, and forensic steganography. Formulated disciplined CLI habits, reproducible bash logging, and isolated Python virtual environments.",
    tags: ["Cipher Syndicate", "Web Exploitation", "RSA Factorization", "Kali Linux CLI"]
  },
  {
    id: "networking-team-project",
    year: "October 2026",
    title: "Computer Networking Protocol Architecture Project",
    category: "Cybersecurity & SOCS",
    status: "Active Chapter",
    summary:
      "Commenced a core 4-person collaborative engineering project building an end-to-end socket messaging protocol.",
    details:
      "Implementing custom application-layer framing to handle TCP byte-stream boundaries and packet fragmentation. Conducting Wireshark packet captures to verify connection states and handshake handoffs.",
    tags: ["TCP Sockets", "Packet Analysis", "Wireshark", "Team of 4"]
  },
  {
    id: "networking-submission-deadline",
    year: "16 November 2026",
    title: "Networking Protocol Submission & Verification",
    category: "Upcoming",
    status: "Upcoming Milestone",
    summary:
      "Final integration, stress testing with packet drop simulations, and formal code submission for the computer networking project.",
    details:
      "Validating framing resilience against extreme buffer coalesce edge cases and publishing the technical post-mortem report.",
    tags: ["Project Submission", "Stress Testing", "Protocol Verification", "Target Deadline"]
  },
  {
    id: "hack-the-hunt-2026",
    year: "21 November 2026",
    title: "Hack The Hunt 2026 — Campus Puzzle Experience",
    category: "Upcoming",
    status: "Upcoming Milestone",
    summary:
      "Flagship campus-wide deduction, logic, and problem-solving competition orchestrated by SOCS at Rishihood University.",
    details:
      "Leading external sponsorship outreach and partnership correspondence. Formulating structured sponsor pitches to support participant resources and prize pools.",
    tags: ["Hack The Hunt 2026", "Sponsorship Outreach", "Event Coordination", "Campus Experience"]
  },
  {
    id: "future-specialization",
    year: "Future Horizon",
    title: "Digital Forensics & National Investigative Service",
    category: "Forensics Aspiration",
    status: "Upcoming Milestone",
    summary:
      "Specializing in digital forensics, incident response, and pursuing public service routes such as CBI Sub-Inspector via SSC CGL.",
    details:
      "Aiming to bridge private-sector threat analysis with public-sector law enforcement to protect critical digital infrastructure and investigate cybercrime.",
    tags: ["Digital Forensics", "CBI via SSC CGL", "Incident Response", "Public Service"]
  }
];

export default function Timeline() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Education", "Cybersecurity & SOCS", "Forensics Aspiration", "Upcoming", "Martial Arts"];

  const filteredMilestones = timelineMilestones.filter((m) => {
    if (filter === "All") return true;
    return m.category === filter;
  });

  return (
    <div className="space-y-8">
      {/* Filter Row */}
      <div className="flex items-center justify-between gap-4 flex-wrap border-b border-rule-border pb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold block">
            Chronological Journey
          </span>
          <h3 className="text-lg sm:text-xl font-display font-bold text-ink">
            Milestones & Academic Progression
          </h3>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded text-xs font-mono font-medium transition-all shrink-0 ${
                filter === cat
                  ? "bg-forest text-paper"
                  : "bg-paper-card text-ink-secondary hover:text-ink border border-rule-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline Tree */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-rule-border space-y-10">
        {filteredMilestones.map((milestone) => {
          const isUpcoming = milestone.status === "Upcoming Milestone";
          const isActive = milestone.status === "Active Chapter";

          return (
            <div key={milestone.id} className="relative group">
              {/* Timeline Pin/Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-paper transition-transform group-hover:scale-125 ${
                  isUpcoming
                    ? "border-terracotta bg-terracotta-subtle"
                    : isActive
                    ? "border-forest bg-forest animate-pulse"
                    : "border-forest bg-sage"
                }`}
              />

              <div className="p-5 sm:p-6 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-3 hover:border-forest/40 transition-colors">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-forest bg-sage px-2 py-0.5 rounded">
                      {milestone.year}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        isUpcoming
                          ? "bg-terracotta-subtle text-terracotta font-medium"
                          : isActive
                          ? "bg-forest/10 text-forest font-semibold"
                          : "bg-paper-muted text-ink-muted"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-ink-muted">{milestone.category}</span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-ink">
                    {milestone.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-secondary mt-1 leading-relaxed">
                    {milestone.summary}
                  </p>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed pt-1">
                  {milestone.details}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-rule-border">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-paper-muted text-ink-secondary text-[11px] font-mono border border-rule-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

