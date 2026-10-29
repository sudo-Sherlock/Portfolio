"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, Terminal, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "CTF & Security", href: "/ctf" },
    { label: "Experience", href: "/experience" },
    { label: "Beyond Tech", href: "/interests" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-rule-border transition-colors">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Gaarvi Bhatia Homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-forest text-paper flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:bg-forest-hover transition-colors">
              GB
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-ink group-hover:text-forest transition-colors">
                Gaarvi Bhatia
              </span>
              <span className="text-xs font-mono text-ink-secondary tracking-tight hidden sm:block">
                CS & AI • Digital Investigation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    active
                      ? "text-forest bg-sage font-semibold"
                      : "text-ink-secondary hover:text-ink hover:bg-paper-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-forest bg-forest/10 hover:bg-forest/20 transition-colors border border-forest/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-ink-secondary hover:text-ink hover:bg-paper-muted md:hidden focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-rule-border bg-paper px-4 pt-2 pb-6 space-y-1">
          <div className="px-2 py-1.5 text-xs font-mono text-ink-muted uppercase tracking-wider">
            Navigation Menu
          </div>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  active
                    ? "bg-sage text-forest font-semibold"
                    : "text-ink hover:bg-paper-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-rule-border mt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium bg-forest text-paper hover:bg-forest-hover transition-colors"
            >
              <span>Connect with Gaarvi</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
