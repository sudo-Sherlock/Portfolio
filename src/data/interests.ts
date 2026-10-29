export interface InterestCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  details: string[];
  keyHighlights: string[];
}

export const interestsData: InterestCategory[] = [
  {
    id: "forensics-and-criminalistics",
    title: "Forensic Science & Criminal Investigation",
    subtitle: "The intellectual fascination with empirical evidence and reconstruction",
    iconName: "Search",
    summary:
      "A longstanding curiosity about how physical and digital traces allow investigators to reconstruct past events with scientific certainty.",
    details: [
      "The appeal of forensic science lies in its objectivity: while testimony can be biased or faulty, physical and digital evidence does not lie. It simply waits to be properly interpreted.",
      "I am fascinated by Locard's Exchange Principle—the axiom that 'every contact leaves a trace.' Whether analyzing microscopic transfer evidence at a crime scene or tracking ephemeral network packets across an intrusion route, the core methodology remains identical.",
      "This intellectual foundation shapes how I view computer systems: not just as executing machines, but as continuous recording systems where every interaction leaves residual artifacts."
    ],
    keyHighlights: [
      "Locard's Exchange Principle",
      "Chain of Custody Integrity",
      "Crime Scene Reconstruction",
      "Digital Evidence Preservation"
    ]
  },
  {
    id: "mysteries-and-deduction",
    title: "Books, Mysteries & Sherlockian Deduction",
    subtitle: "Observational rigor, behavioral analysis, and the joy of unraveling complex plots",
    iconName: "BookOpen",
    summary:
      "A passion for crime fiction, detective narratives, and behavioral science books that examine human decision-making and pattern recognition.",
    details: [
      "I have always enjoyed reading murder mysteries and detective fiction, with Arthur Conan Doyle's Sherlock Holmes standing out as a central influence on my interest in observation.",
      "What makes investigative fiction compelling is not the spectacle, but the disciplined process of eliminating the impossible until whatever remains, however improbable, must be the truth.",
      "Beyond classic fiction, I am drawn to books exploring psychology and behavioral analysis—understanding how pressure, cognitive biases, and incentives drive human action, a perspective that is equally valuable in social engineering defense and security architecture."
    ],
    keyHighlights: [
      "Sherlockian Observation",
      "Eliminating Cognitive Biases",
      "Behavioral Science & Psychology",
      "Classic Detective Literature"
    ]
  },
  {
    id: "immersive-gaming",
    title: "Complex Systems & Immersive Gaming",
    subtitle: "Patience, pattern recognition, and environmental storytelling in games",
    iconName: "Gamepad2",
    summary:
      "Appreciating titles like Elden Ring and Ghost of Tsushima for their intricate mechanical systems, deliberate pacing, and world-building.",
    details: [
      "My interest in gaming centers on titles that reward observation, patience, and tactical adaptation rather than mindless button-mashing.",
      "In games like Elden Ring, success requires deciphering adversary attack patterns, timing defensive dodges, and understanding nuanced spatial mechanics. The environmental storytelling demands that the player piece together the history of the world through subtle architecture and fragmented lore items—very much like a forensic investigation.",
      "In Ghost of Tsushima, the balance between disciplined samurai combat and stealth infiltration reflects the tension between direct confrontation and indirect problem-solving, all set against breathtaking historical composition."
    ],
    keyHighlights: [
      "Elden Ring — Pattern Recognition & Mechanical Precision",
      "Ghost of Tsushima — Tactical Composure & World Artistry",
      "Environmental Narrative Deduction",
      "Systems-Driven Gameplay"
    ]
  },
  {
    id: "tech-exploration-and-virtualization",
    title: "Hardware Exploration & OS Virtualization",
    subtitle: "Understanding architecture through hands-on system configuration and virtualization",
    iconName: "Cpu",
    summary:
      "Investigating operating system internals, virtualization overhead, and memory management across modern hardware.",
    details: [
      "I enjoy understanding the machines I use daily. My primary workstation is a MacBook Pro powered by Apple Silicon (M5 architecture, 16 GB unified memory, 1 TB SSD).",
      "Working on Apple Silicon while studying cybersecurity necessitated exploring virtualization and compatibility layers. I configured VMware Fusion to run virtualized Windows 11 and Kali Linux ARM distributions, troubleshooting memory allocation boundaries and hypervisor network bridges.",
      "Understanding how virtualization engines manage hypercalls, allocate virtual CPU cores, and isolate virtual disk drives from the host OS gave me practical insight into operating system kernels, device drivers, and security sandboxing."
    ],
    keyHighlights: [
      "Apple Silicon Hardware Architecture (MacBook Pro M5, 16GB / 1TB)",
      "VMware Fusion & Windows 11 Virtualization",
      "Kali Linux ARM Environment Configuration",
      "Hypervisor Networking & Memory Isolation"
    ]
  }
];

