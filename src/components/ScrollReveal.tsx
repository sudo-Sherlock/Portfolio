"use client";

import React, { useEffect, useRef } from "react";

export function ScrollRevealObserver() {
  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Once revealed, unobserve so it stays visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const targets = document.querySelectorAll(
        ".scroll-reveal:not(.is-revealed), .scroll-reveal-left:not(.is-revealed), .scroll-reveal-right:not(.is-revealed), .scroll-reveal-scale:not(.is-revealed)"
      );
      targets.forEach((target) => observer.observe(target));
    };

    observeElements();

    // Re-check for dynamically rendered elements
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "fade-left":
        return "scroll-reveal-left";
      case "fade-right":
        return "scroll-reveal-right";
      case "scale":
        return "scroll-reveal-scale";
      case "fade-up":
      default:
        return "scroll-reveal";
    }
  };

  const getDelayClass = () => {
    if (delay === 100) return "delay-100";
    if (delay === 150) return "delay-150";
    if (delay === 200) return "delay-200";
    if (delay === 250) return "delay-250";
    if (delay === 300) return "delay-300";
    if (delay === 400) return "delay-400";
    if (delay === 500) return "delay-500";
    return "";
  };

  return (
    <div className={`${getVariantClass()} ${getDelayClass()} ${className}`}>
      {children}
    </div>
  );
}
