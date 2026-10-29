export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface SocietyEntry {
  role: string;
  organization: string;
  affiliation: string;
  period: string;
  status: "Active Member" | "Upcoming Event" | "Completed Project";
  description: string;
  responsibilities: string[];
  keyInitiatives: {
    title: string;
    date: string;
    status: string;
    summary: string;
  }[];
}

export interface KarateAchievement {
  title: string;
  event: string;
  period: string;
  rankAtTime: string;
  category: string;
  details: string;
}

export const educationData: EducationEntry[] = [
  {
    degree: "B.Tech in Computer Science and Artificial Intelligence",
    institution: "Newton School of Technology, Rishihood University",
    location: "Sonipat, Delhi-NCR, India",
    period: "2026 – Present (First Year)",
    status: "Currently Enrolled (October 2026)",
    description:
      "Undertaking rigorous undergraduate engineering training in computer science, algorithm design, computational logic, and systems architecture. Focussing on first-principles understanding across programming languages, discrete mathematics, and networking.",
    highlights: [
      "Core Coursework: Python Programming, Mathematics for Problem-Solving, Computational Logic.",
      "Practical exploration of computer networks, socket communications, and packet analysis.",
      "Active participant in collegiate cybersecurity society and campus technical initiatives."
    ]
  },
  {
    degree: "Senior Secondary (Class 11 & 12) — PCM",
    institution: "Central Board of Secondary Education (CBSE)",
    location: "Haryana, India",
    period: "2024 – 2026",
    status: "Completed",
    description:
      "Completed higher secondary education with a specialized focus on Physics, Chemistry, and Mathematics (PCM). Developed disciplined analytical reasoning and mathematical problem-solving skills.",
    highlights: [
      "Physics, Chemistry, and Mathematics focus developing deductive and quantitative acumen.",
      "Conducted extensive institutional research into university entrance exams including NFAT and CUET-UG.",
      "Investigated supplementary qualification tracks (including NIOS Biology curriculum) to explore interdisciplinary forensic science prerequisites."
    ]
  }
];

export const societyData: SocietyEntry = {
  role: "Active Member & Team Contributor",
  organization: "Society of Cyber Security (SOCS)",
  affiliation: "Newton School of Technology, Rishihood University",
  period: "August 2026 – Present",
  status: "Active Member",
  description:
    "Active contributor to the university's cybersecurity society, participating in collaborative CTF problem-solving with team Cipher Syndicate, technical workshops, and campus-wide event orchestration.",
  responsibilities: [
    "Collaborating with team Cipher Syndicate on dissecting and solving Capture-The-Flag (CTF) challenges across cryptography, web security, and forensic discovery.",
    "Authoring clear, step-by-step technical write-ups documenting challenge methodology and lessons learned.",
    "Spearheading external partnership and sponsorship outreach for flagship campus events, crafting clear and compelling professional proposals."
  ],
  keyInitiatives: [
    {
      title: "Hack The Hunt 2026 — Campus Puzzle & Problem-Solving Experience",
      date: "Scheduled for 21 November 2026",
      status: "Upcoming Event (Active Planning)",
      summary:
        "A campus-wide, multi-stage logic and clue-based investigative competition designed by SOCS. Leading sponsorship outreach and partnership communication, preparing formal pitches, and coordinating with prospective external sponsors to support student prizes and logistics."
    },
    {
      title: "Cipher Syndicate CTF Working Group",
      date: "Ongoing Weekly Sessions",
      status: "Active Practice",
      summary:
        "Weekly peer sessions analyzing real-world security vulnerabilities, exploring reverse engineering concepts, and practicing defensive security best practices in simulated sandbox environments."
    }
  ]
};

export const karateAchievements: KarateAchievement[] = [
  {
    title: "1st Place — Gold Medal in Kumite",
    event: "Shito Kai Invitational Karate Championship",
    period: "2019 – 2020",
    rankAtTime: "Yellow Belt",
    category: "Kumite (Sparring) — Junior Division",
    details:
      "Secured first place in sparring through disciplined offensive timing, counter-strikes, and tactical composure under tournament pressure."
  },
  {
    title: "Tournament Record: ~14 Tournaments, 12 Gold Medals",
    event: "District, State, School & National Level Competitions",
    period: "Formative Competitive Years",
    rankAtTime: "Progressive Belts",
    category: "Kumite & Kata Disciplines",
    details:
      "Consistent podium finishes achieved through years of rigorous dojo training, physical conditioning, and mental focus. Taught the lifelong value of repetition, sportsmanship, and mental resilience under scrutiny."
  }
];

