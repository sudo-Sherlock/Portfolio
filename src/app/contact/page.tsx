"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Check,
  Copy,
  ArrowUpRight,
  Shield,
  MessageSquare,
  Sparkles,
  GraduationCap
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "gaarvi.bhatia@gmail.com"; // Professional placeholder address matching PRD structure

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="py-12 sm:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage text-forest text-xs font-mono border border-sage-deep">
            <Mail className="w-3.5 h-3.5" />
            <span>Professional Inquiries & Collaboration</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Connect & Collaborate
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            I am always open to discussions regarding cybersecurity internships, collaborative CTF
            challenges, investigative research, and engineering projects.
          </p>
        </div>
      </section>

      {/* Primary Contact Channels */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-elevated space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-forest font-semibold">
                  Direct Correspondence
                </span>
                <h2 className="text-2xl font-display font-bold text-ink">
                  Email & Professional Identity
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Feel free to reach out directly via email for academic, technical, or internship
                  inquiries.
                </p>
              </div>

              {/* Email Copier Box */}
              <div className="p-4 rounded-lg bg-paper-muted border border-rule-border flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-muted block">Direct Email</span>
                    <span className="text-sm sm:text-base font-mono font-medium text-ink select-all">
                      {contactEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-3.5 py-1.5 rounded-md bg-paper border border-rule-border hover:bg-sage text-ink text-xs font-mono flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-forest" />
                        <span className="text-forest font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-ink-secondary" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="px-3.5 py-1.5 rounded-md bg-forest text-paper text-xs font-mono font-medium hover:bg-forest-hover transition-colors flex items-center gap-1"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-rule-border">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-lg bg-paper border border-rule-border hover:border-forest/40 hover:bg-paper-muted transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-ink" />
                    <div>
                      <span className="font-display font-bold text-sm text-ink block group-hover:text-forest transition-colors">
                        GitHub Profile
                      </span>
                      <span className="text-xs font-mono text-ink-muted">
                        Code repositories & labs
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-forest transition-colors" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-lg bg-paper border border-rule-border hover:border-forest/40 hover:bg-paper-muted transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-forest" />
                    <div>
                      <span className="font-display font-bold text-sm text-ink block group-hover:text-forest transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs font-mono text-ink-muted">
                        Professional networking
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-forest transition-colors" />
                </a>
              </div>
            </div>

            {/* University & Location Note */}
            <div className="p-6 rounded-xl bg-paper-muted border border-rule-border space-y-3">
              <div className="flex items-center gap-2 text-forest">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Academic Residency
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Newton School of Technology, Rishihood University
              </h3>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                Campus located in Sonipat, Haryana (Delhi-NCR). Currently engaged in first-year full-time
                undergraduate engineering coursework and on-campus Society of Cyber Security (SOCS) operations.
              </p>
            </div>
          </div>

          {/* Right: What I'm Looking For & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-4">
              <h3 className="font-display font-bold text-lg text-ink">
                Areas of Active Interest
              </h3>
              <ul className="space-y-3 text-sm text-ink-secondary">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                  <span>
                    <strong className="text-ink">Cybersecurity & Forensics Internships:</strong> Practical
                    roles in security operations, vulnerability assessment, and threat analysis.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                  <span>
                    <strong className="text-ink">CTF Collaborations & Teaming:</strong> Engaging with
                    security researchers and collegiate teams on specialized challenges.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                  <span>
                    <strong className="text-ink">Event Sponsorship & Partnerships:</strong> Inquiries regarding
                    SOCS flagship events, including Hack The Hunt 2026.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                  <span>
                    <strong className="text-ink">Mentorship & Technical Discussions:</strong> Advice from
                    practitioners in digital forensics, incident response, and national investigative services.
                  </span>
                </li>
              </ul>
            </div>

            {/* Privacy and Boundaries */}
            <div className="p-5 rounded-xl bg-paper-card border border-rule-border text-xs text-ink-secondary space-y-2">
              <span className="font-mono font-bold uppercase tracking-wider text-forest block">
                Ethical & Privacy Notice
              </span>
              <p className="leading-relaxed">
                This portfolio complies with professional data ethics. Inquiries requesting unauthorized
                penetration testing, non-consensual surveillance, or violation of institutional policies will
                be declined unconditionally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

