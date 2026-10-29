import React from "react";

interface StatusBadgeProps {
  status: "In Progress" | "Completed" | "Research & Planned" | "Upcoming Event (Active Planning)" | "Active Member" | "Active Practice" | string;
  className?: string;
}

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  let badgeStyles = "bg-paper-muted text-ink-secondary border-rule-border";

  switch (status) {
    case "Completed":
      badgeStyles = "bg-sage text-forest border-sage-deep font-medium";
      break;
    case "In Progress":
      badgeStyles = "bg-terracotta-subtle text-terracotta border-terracotta/30 font-medium";
      break;
    case "Research & Planned":
      badgeStyles = "bg-amber-50 text-amber-800 border-amber-200 font-medium";
      break;
    case "Upcoming Event (Active Planning)":
      badgeStyles = "bg-forest/10 text-forest border-forest/20 font-medium";
      break;
    case "Active Member":
    case "Active Practice":
      badgeStyles = "bg-sage text-forest border-forest/20 font-medium";
      break;
    default:
      badgeStyles = "bg-paper-muted text-ink-secondary border-rule-border";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono tracking-tight border ${badgeStyles} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}
