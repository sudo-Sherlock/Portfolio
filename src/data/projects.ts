export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "Networking" | "Python Programming" | "Digital Forensics" | "Systems";
  status: "In Progress" | "Completed" | "Research & Planned";
  date: string;
  summary: string;
  tags: string[];
  teamSize?: string;
  deadline?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problemStatement: string;
    objectives: string[];
    myRole: string;
    toolsAndTech: string[];
    designMethodology: string;
    implementation: string;
    challenges: string;
    testingAndResults: string;
    limitations: string;
    whatILearned: string;
    futureImprovements: string;
    demoNote?: string;
  };
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "computer-networking-team-project",
    title: "Computer Networking Architecture & Protocol Analysis",
    subtitle: "Collaborative socket-level communication and packet transmission framework",
    category: "Networking",
    status: "In Progress",
    date: "October – November 2026",
    deadline: "16 November 2026",
    teamSize: "Team of 4",
    githubUrl: "https://github.com",
    summary:
      "A university-mandated team project exploring client-server socket communication, message serialization, and network layer behaviour under varying transmission conditions.",
    tags: ["Computer Networks", "Sockets", "Python", "TCP/IP", "Wireshark", "Packet Analysis"],
    caseStudy: {
      overview:
        "As part of the Computer Science curriculum at Newton School of Technology, our team of four is designing and implementing an end-to-end networked application that demonstrates reliable message delivery, socket lifecycle management, and protocol compliance across endpoints.",
      problemStatement:
        "High-level networking libraries often abstract away connection handshakes, buffering, and packet loss handling. This project requires constructing a clear protocol layer directly on top of transport sockets to understand how underlying network states affect transmission latency and data integrity.",
      objectives: [
        "Implement a resilient client-server socket architecture using TCP sockets.",
        "Design a custom application-level framing protocol to delimit messages and verify checksums.",
        "Analyze network overhead and packet sequences using Wireshark captures.",
        "Document individual team contributions and verify collaborative code integration."
      ],
      myRole:
        "Collaborator focusing on socket handling logic, connection state tracking, and Wireshark packet capture analysis to verify proper SYN-ACK handshakes and clean connection teardowns.",
      toolsAndTech: [
        "Python (socket, select, threading)",
        "Wireshark for packet inspection",
        "Git & GitHub for version control and pull request reviews",
        "Linux CLI environment"
      ],
      designMethodology:
        "We adopted a client-server modular model where the server maintains non-blocking connection threads and processes framed payloads with explicit header lengths. Before sending application data, an agreed 8-byte header defines message length and opcode.",
      implementation:
        "Developed modular client and server scripts. The client initiates socket connections, frames user messages with length headers, and awaits synchronous acknowledgments. The server parses incoming buffers sequentially to prevent packet fragmentation issues.",
      challenges:
        "Handling partial buffer reads and socket timeouts during concurrent bursts. Initial testing showed stream coalescence when multiple packets were sent in rapid succession, which was solved by introducing explicit message boundary parsing.",
      testingAndResults:
        "Currently in testing across local subnets and simulated network delays. Basic payload transmission and header verification are validated; stress testing with packet drop simulation is currently being executed prior to the 16 November deadline.",
      limitations:
        "Currently scoped for local network environments without TLS encryption or distributed multi-node routing.",
      whatILearned:
        "Understood the stark difference between theoretical OSI models and practical byte-stream socket programming. Saw firsthand why packet framing is indispensable for stream-based protocols like TCP.",
      futureImprovements:
        "Implement end-to-end payload encryption using cryptographic primitives, and add dynamic congestion control metrics.",
      demoNote:
        "Active development repository. Final verification and comprehensive submission report scheduled for 16 November 2026."
    }
  },
  {
    id: "python-algorithmic-solver",
    title: "Python Problem-Solving & Modular Utilities Suite",
    subtitle: "Foundational programming exercises emphasizing robust validation and modular logic",
    category: "Python Programming",
    status: "Completed",
    date: "September – October 2026",
    githubUrl: "https://github.com",
    summary:
      "A structured collection of Python utilities and computational problem-solving scripts developed to establish rigorous understanding of control flow, data structures, and edge-case validation.",
    tags: ["Python 3", "Algorithms", "Clean Code", "Input Validation", "Data Structures"],
    caseStudy: {
      overview:
        "A collection of purposeful Python programs built during first-year coursework and independent problem-solving sessions at Rishihood University. Focuses on foundational computational thinking rather than superficial scripting.",
      problemStatement:
        "Many beginner programming exercises gloss over error handling, boundary values, and computational complexity. The goal was to write readable, defensive code with explicit type assumptions and thorough branch testing.",
      objectives: [
        "Master procedural and modular code design in Python 3.",
        "Build reliable input sanitation and defensive exception handling routines.",
        "Implement clean algorithmic solutions for mathematical deduction and sequence processing."
      ],
      myRole: "Sole author and developer.",
      toolsAndTech: [
        "Python 3.11+",
        "Python Standard Library (sys, math, unittest)",
        "VS Code & Terminal Debugging Tools"
      ],
      designMethodology:
        "Each utility is organized into pure functions with single responsibilities: parsing/validation, core computation, and output formatting. Unit tests accompany core functions to assert deterministic outputs.",
      implementation:
        "Created utilities including an arithmetic evaluation engine with precedence handling, string manipulation and cipher prototypes, and mathematical matrix transformations.",
      challenges:
        "Ensuring clean handling of non-integer inputs, division by zero edge cases, and recursive stack overflow limits during exploratory recursion tests.",
      testingAndResults:
        "Tested across boundary input sets (empty strings, extreme numerical values, unexpected data types). All assertions passed without unhandled exceptions.",
      limitations:
        "Focuses on single-threaded standard library routines without external scientific computing packages (e.g., NumPy).",
      whatILearned:
        "Solidified understanding of Python's execution model, reference passing, and how modular functions dramatically improve testability and cognitive clarity.",
      futureImprovements:
        "Refactor mathematical routines into object-oriented classes and integrate automated CI testing via GitHub Actions.",
      demoNote:
        "Source code organized into documented standalone modules with interactive CLI runners."
    }
  },
  {
    id: "digital-forensics-workflow-lab",
    title: "Digital Forensics Workflow & Hash Integrity Pipeline",
    subtitle: "Planned methodology for file metadata extraction and cryptographic chain of custody",
    category: "Digital Forensics",
    status: "Research & Planned",
    date: "Planned for Winter 2026–2027",
    summary:
      "A planned experimental framework designed to explore forensic disk artifacts, timestamp analysis (MACB), and automated SHA-256 cryptographic verification for controlled evidence handling.",
    tags: ["Digital Forensics", "Hash Verification", "Metadata Analysis", "Cybercrime Investigation", "Evidence Handling"],
    caseStudy: {
      overview:
        "A prospective technical project bridging my background in forensic science principles with computer science techniques. It plans to automate evidence verification and artifact parsing on controlled test images.",
      problemStatement:
        "In digital investigations, maintaining absolute evidence integrity is paramount. Any unauthorized file access alters access timestamps, potentially corrupting forensic authenticity. Standardizing an automated hash-checking and read-only acquisition workflow is crucial.",
      objectives: [
        "Design a reproducible Python script to recursively compute and verify SHA-256/SHA-512 hashes across directory trees.",
        "Extract and correlate filesystem timestamps (Modified, Accessed, Created, Birth) to construct chronological event sequences.",
        "Simulate controlled log tampering scenarios to test anomaly detection rules."
      ],
      myRole: "Project designer and researcher.",
      toolsAndTech: [
        "Python (hashlib, os, stat)",
        "Autopsy / Sleuth Kit (exploratory)",
        "ExifTool for metadata parsing",
        "Virtual machine isolated forensic images"
      ],
      designMethodology:
        "Methodology follows standard NIST digital evidence guidelines: bit-level imaging or read-only mounting, immediate baseline cryptographic hashing, and post-analysis verification against the original baseline.",
      implementation:
        "Currently in research and planning phase. Architectural schema specifies a dual-pass verification system that generates a tamper-evident JSON audit trail documenting file metadata and cryptographic digests.",
      challenges:
        "Anticipated challenges include handling cross-platform filesystem differences (NTFS vs ext4 vs APFS timestamp granularity) and preserving extended attribute metadata.",
      testingAndResults:
        "Planned for evaluation on controlled synthetic disk images containing known timestamp anomalies and hidden metadata files.",
      limitations:
        "This is an educational learning project conducted in simulated sandboxes, not intended for courtroom-certified forensic processing.",
      whatILearned:
        "Gained deep appreciation for the forensic principle that observation must never alter the evidence—a principle that applies equally to biological crime scenes and digital disk drives.",
      futureImprovements:
        "Extend the pipeline to parse Windows Event Logs (EVTX) and Linux audit logs to correlate file modifications with user authentication sessions.",
      demoNote:
        "Project roadmap and research notes published in the technical journal; code implementation to begin following current semester networking milestones."
    }
  }
];
