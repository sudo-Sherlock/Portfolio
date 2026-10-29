export interface SkillCategory {
  id: string;
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: "Foundational Competence" | "Active Exploration" | "Applied in Projects" | "Conceptual Grounding";
    contextOfUse: string;
    verifiedThrough: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "programming-and-logic",
    categoryName: "Programming & Computational Logic",
    description:
      "Core programming languages and computational problem-solving paradigms studied from first principles.",
    skills: [
      {
        name: "Python 3",
        level: "Applied in Projects",
        contextOfUse:
          "Input validation, control flow, modular functions, exception handling, and socket scripting.",
        verifiedThrough: "University coursework & Problem-Solving Utilities Suite"
      },
      {
        name: "Procedural & Functional Design",
        level: "Foundational Competence",
        contextOfUse:
          "Structuring clean, deterministic functions with explicit boundary tests and single responsibilities.",
        verifiedThrough: "Algorithm and problem-solving assignments"
      },
      {
        name: "Discrete Mathematics & Logic",
        level: "Conceptual Grounding",
        contextOfUse:
          "Propositional logic, set theory, and modular arithmetic relevant to cryptographic algorithms.",
        verifiedThrough: "First-year engineering coursework at Rishihood University"
      }
    ]
  },
  {
    id: "cybersecurity-and-forensics",
    categoryName: "Cybersecurity & Forensic Methodology",
    description:
      "Diagnostic and defensive security tools applied strictly within authorized laboratory environments.",
    skills: [
      {
        name: "Nmap (Network Mapper)",
        level: "Applied in Projects",
        contextOfUse:
          "SYN stealth scans (-sS), service detection (-sV), and analyzing firewall filtering states.",
        verifiedThrough: "Authorized VM lab diagnostic experiments and write-ups"
      },
      {
        name: "Kali Linux Environment",
        level: "Active Exploration",
        contextOfUse:
          "Shell navigation, tool configuration, isolated Python virtual environments, and bash scripting.",
        verifiedThrough: "Daily development and security challenge exercises"
      },
      {
        name: "CTF Cryptography & Web Analysis",
        level: "Applied in Projects",
        contextOfUse:
          "Cookie session decoding, small-modulus RSA prime factorization, and steganography chunk parsing.",
        verifiedThrough: "Cipher Syndicate working group write-ups"
      },
      {
        name: "OSINT Tooling (OSINTgram)",
        level: "Active Exploration",
        contextOfUse:
          "Environment dependency troubleshooting and lawful open-source reconnaissance.",
        verifiedThrough: "Virtual environment diagnostic note"
      }
    ]
  },
  {
    id: "networking-and-systems",
    categoryName: "Networking & System Architecture",
    description:
      "Understanding protocol specifications, transport sockets, and hardware virtualization.",
    skills: [
      {
        name: "TCP/IP & Socket Programming",
        level: "Applied in Projects",
        contextOfUse:
          "Client-server connection lifecycles, message length framing, and stream boundary parsing.",
        verifiedThrough: "Active Computer Networking Team Project"
      },
      {
        name: "Wireshark Packet Analysis",
        level: "Active Exploration",
        contextOfUse:
          "Capturing and inspecting 3-way TCP handshakes, RST teardowns, and ICMP unreachable responses.",
        verifiedThrough: "Networking lab captures and diagnostics"
      },
      {
        name: "System Virtualization (VMware Fusion)",
        level: "Applied in Projects",
        contextOfUse:
          "Deploying Windows 11 and Kali Linux ARM VMs on Apple Silicon; memory and network bridge tuning.",
        verifiedThrough: "Workstation lab setup and hypervisor testing"
      }
    ]
  },
  {
    id: "technical-communication",
    categoryName: "Technical Communication & Collaboration",
    description:
      "Articulating complex technical concepts, writing reproducible reports, and coordinating outreach.",
    skills: [
      {
        name: "Technical Write-up Authoring",
        level: "Applied in Projects",
        contextOfUse:
          "Documenting step-by-step CTF methodologies, error reproduction, and ethical safeguards.",
        verifiedThrough: "Cipher Syndicate published challenge write-ups"
      },
      {
        name: "Partnership & Sponsorship Outreach",
        level: "Applied in Projects",
        contextOfUse:
          "Crafting formal event proposals, value propositions, and professional emails for sponsors.",
        verifiedThrough: "Hack The Hunt 2026 organizing team operations"
      },
      {
        name: "Collaborative Git Workflow",
        level: "Foundational Competence",
        contextOfUse:
          "Branching, clear commit messages, pull request reviews, and team repository synchronization.",
        verifiedThrough: "Team networking and society project repositories"
      }
    ]
  }
];

export const learningPhilosophy = {
  coreTenet: "First-Principles Comprehension Over Superficial Pattern-Matching",
  summary:
    "Gaarvi approaches unfamiliar technical material from foundational building blocks: dissecting memory layouts, reading RFCs and specifications, writing defensive tests, and building up to independent problem-solving through exhaustive, concrete examples.",
  rulesApplied: [
    "No arbitrary proficiency percentages or subjective progress bars.",
    "Every listed tool or concept is tied directly to a documented project, lab, or coursework milestone.",
    "Clear separation between theoretical understanding, active practice, and completed engineering work."
  ]
};
