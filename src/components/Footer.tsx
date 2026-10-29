import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Shield, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-paper-muted border-t border-rule-border mt-20 pt-16 pb-12">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-rule-border">
          {/* Brand & Central Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-forest text-paper flex items-center justify-center font-display font-bold text-sm">
                GB
              </div>
              <span className="font-display font-bold text-lg text-ink tracking-tight">
                Gaarvi Bhatia
              </span>
            </div>
            <p className="text-sm font-serif italic text-forest font-medium">
              “Curiosity drives the investigation. Logic reveals the answer.”
            </p>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-sm">
              Computer Science & AI student exploring cybersecurity, digital forensics, and network
              systems. Connecting investigative instinct with technical problem-solving.
            </p>
            <div className="pt-2 text-xs font-mono text-ink-muted">
              First-Year B.Tech • Newton School of Technology, Rishihood University
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-primary">
              Site Directory
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-ink-secondary hover:text-forest transition-colors">
                  My Story (Detailed Narrative)
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-ink-secondary hover:text-forest transition-colors">
                  Projects & Technical Work
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-ink-secondary hover:text-forest transition-colors">
                  Skills & Learning Profile
                </Link>
              </li>
              <li>
                <Link href="/ctf" className="text-ink-secondary hover:text-forest transition-colors">
                  CTF Challenges & Write-ups
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-ink-secondary hover:text-forest transition-colors">
                  Education, SOCS & Karate
                </Link>
              </li>
              <li>
                <Link href="/interests" className="text-ink-secondary hover:text-forest transition-colors">
                  Beyond the Code (Interests)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-secondary hover:text-forest transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Areas & Evidence */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-primary">
              Focus Areas & Groups
            </h3>
            <div className="space-y-2 text-sm text-ink-secondary">
              <div className="p-3 rounded-lg bg-paper border border-rule-border space-y-1">
                <div className="font-medium text-ink flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-forest" />
                  <span>Society of Cyber Security (SOCS)</span>
                </div>
                <p className="text-xs text-ink-muted">
                  Active member & Cipher Syndicate CTF collaboration at Rishihood University.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-paper border border-rule-border space-y-1">
                <div className="font-medium text-ink flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-terracotta" />
                  <span>The Investigative Bridge</span>
                </div>
                <p className="text-xs text-ink-muted">
                  Translating criminalistics deduction into digital systems and network forensics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <div>
            © {new Date().getFullYear()} Gaarvi Bhatia. Personal Portfolio & Digital Identity.
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono">Yamunanagar, Haryana → Sonipat, NCR</span>
            <span className="text-rule-border">•</span>
            <span>WCAG 2.2 AA Accessible</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

