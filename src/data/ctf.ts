export interface CTFWriteup {
  id: string;
  title: string;
  event: string;
  category: "Web Exploitation" | "Cryptography" | "Forensics" | "Reverse Engineering" | "Network Security";
  difficulty: "Beginner" | "Intermediate";
  date: string;
  teamCollaboration: string;
  objective: string;
  cluesAndObservations: string[];
  methodology: string;
  toolsUsed: string[];
  reasoningAndSolution: string;
  outcome: string;
  lessonsLearned: string[];
  ethicalNote?: string;
}

export interface TechnicalArticle {
  id: string;
  title: string;
  category: "Networking" | "Linux" | "CTF Methodology" | "Python" | "Digital Forensics" | "Troubleshooting";
  type: "Technical Case Study" | "Learning Note" | "Experiment" | "Lab Walkthrough";
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export const ctfWriteups: CTFWriteup[] = [
  {
    id: "cipher-syndicate-cookie-tampering",
    title: "Client-Side Session Decoding & Signature Validation",
    event: "SOCS Internal CTF Practice / Cipher Syndicate",
    category: "Web Exploitation",
    difficulty: "Beginner",
    date: "October 2026",
    teamCollaboration: "Collaborated with team Cipher Syndicate members during weekly technical challenge dissection.",
    objective:
      "Analyze a challenge authentication mechanism where user role tokens were passed via client-side storage, identify the serialization scheme, and determine how permission escalations are validated.",
    cluesAndObservations: [
      "The HTTP response set a cookie named 'auth_sess' that appeared as a base64-encoded string.",
      "Inspecting the decoded payload revealed a serialized JSON structure with fields: {'user': 'guest', 'role': 'user', 'timestamp': 1729000000}.",
      "The absence of an HMAC signature or server-side session hash indicated client-side state reliance."
    ],
    methodology:
      "Captured HTTP traffic using browser developer tools and proxy inspection. Decoded the payload, analyzed the schema, modified the role property in a controlled lab request, and inspected the server response headers.",
    toolsUsed: ["Browser DevTools (Network & Storage)", "CyberChef", "Python (base64, json)", "cURL"],
    reasoningAndSolution:
      "Because the application failed to cryptographically sign or verify the session blob server-side, altering the payload from 'role: user' to 'role: admin' allowed the endpoint to misinterpret privilege levels upon decoding. The solution demonstrated that client-controlled data must never be trusted without cryptographic integrity guarantees.",
    outcome:
      "Successfully identified the architectural flaw and solved the challenge within the collaborative exercise.",
    lessonsLearned: [
      "Base64 is an encoding format, never an encryption or security barrier.",
      "Stateless session tokens must always employ robust cryptographic signatures (such as signed JWTs or HMAC) verified against a secret server key.",
      "Documenting steps clearly helped our team members reproduce and verify the finding instantly."
    ],
    ethicalNote:
      "Conducted exclusively within an authorized university CTF environment. No production or external infrastructure was targeted."
  },
  {
    id: "rsa-modular-arithmetic-weak-key",
    title: "Weak Prime Factorization in Asymmetric Cryptography",
    event: "Collegiate CTF Challenge Lab",
    category: "Cryptography",
    difficulty: "Intermediate",
    date: "September 2026",
    teamCollaboration: "Cipher Syndicate group problem-solving session.",
    objective:
      "Recover the plaintext from an RSA cryptosystem where the public modulus N was generated with insufficiently sized or imbalanced prime factors.",
    cluesAndObservations: [
      "Provided with public modulus N, public exponent e (65537), and ciphertext c.",
      "The modulus N was unusually small (under 512 bits), making direct factorization computationally feasible using Fermat's factorization or public factor databases.",
      "No private key d was provided."
    ],
    methodology:
      "Utilized Python scripting to test Fermat's difference of squares method and cross-referenced the modulus against known small-prime tables to retrieve factors p and q.",
    toolsUsed: ["Python (gmpy2, sympy)", "Factordb API", "SageMath (exploratory)"],
    reasoningAndSolution:
      "Once p and q were factored, computed Euler's totient phi(N) = (p-1)*(q-1). Computed the modular multiplicative inverse of e modulo phi(N) to retrieve private exponent d. Decrypted ciphertext using c^d mod N, converting the integer result back into ASCII bytes.",
    outcome:
      "Extracted the challenge message and verified the mathematical derivation across the team.",
    lessonsLearned: [
      "The theoretical mathematical security of RSA relies strictly on the computational intractability of factoring large moduli; small or improperly generated primes completely eliminate that security.",
      "Cryptographic implementations require certified cryptographically secure pseudorandom number generators (CSPRNG) and appropriate key lengths (minimum 2048+ bits)."
    ],
    ethicalNote:
      "Educational mathematical exercise executed on public educational CTF material."
  },
  {
    id: "steganography-metadata-forensic-extraction",
    title: "Steganographic Trailing Byte & Metadata Investigation",
    event: "SOCS Investigative Workshop",
    category: "Forensics",
    difficulty: "Beginner",
    date: "September 2026",
    teamCollaboration: "Cipher Syndicate workshop hands-on practice.",
    objective:
      "Inspect a corrupted PNG file suspected of concealing forensic artifacts and hidden messages within ancillary chunks.",
    cluesAndObservations: [
      "The image displayed normally in standard viewers, but file size was disproportionately large compared to pixel dimensions.",
      "Hexadecimal analysis revealed data appended after the standard PNG End-of-File marker (IEND: 49 45 4E 44 AE 42 60 82)."
    ],
    methodology:
      "Examined file headers and trailers in a hex editor. Checked PNG chunk integrity using pngcheck. Extracted data following the IEND chunk and analyzed file signatures.",
    toolsUsed: ["xxd / Hex Editor", "binwalk", "file utility", "strings", "ExifTool"],
    reasoningAndSolution:
      "Running `binwalk` identified a compressed archive appended directly after the image trailer. Using `dd` to carve the trailing bytes from the appropriate offset isolated a valid zip archive containing the hidden investigation brief.",
    outcome:
      "Successfully extracted and decoded the hidden text file without altering the primary image file.",
    lessonsLearned: [
      "Standard operating system file renderers ignore bytes beyond standard EOF markers, making them common hiding places.",
      "Forensic carving relies on understanding exact file specification signatures (magic bytes and termination blocks)."
    ],
    ethicalNote:
      "Simulated artifact investigation performed on educational forensic challenge assets."
  }
];

export const technicalArticles: TechnicalArticle[] = [
  {
    id: "nmap-scan-interpretation-case-study",
    title: "Demystifying Nmap: Interpreting 'Open', 'Filtered', and 'Closed' States in Network Scans",
    category: "Networking",
    type: "Technical Case Study",
    date: "October 2026",
    readTime: "6 min read",
    summary:
      "A deep dive into why default Nmap scans do not reveal every port under all conditions, and how firewalls, TCP state machines, and scan flags dictate observed results.",
    tags: ["Nmap", "Network Security", "TCP/IP", "Firewalls", "Port Scanning"],
    content: `
### The Question Behind the Investigation

When starting with network scanning tools, the common expectation is that running \`nmap <target>\` returns a definitive, complete inventory of everything running on the target. However, during authorized security labs, differences quickly emerge between scan configurations. A host might show 2 open ports on a default SYN scan, but show hundreds of 'filtered' ports or different responsiveness under alternate flags.

Understanding *why* these discrepancies occur requires stepping away from tool output and looking at the TCP/IP stack and firewall behavior.

### The Diagnostic Environment

All tests were performed in a controlled local virtual machine lab environment consisting of:
- **Scanner:** Kali Linux VM (host-only network adapter)
- **Target:** Ubuntu Server VM running select services (SSH on 22, HTTP on 80, custom test socket on 8080) with \`iptables\` configured to simulate varied firewall rules.

### How Different Nmap Scans Interact with the TCP Stack

#### 1. The SYN Stealth Scan (\`-sS\`)
Nmap sends a raw SYN packet to the designated port.
- **Port Open:** The target responds with a **SYN-ACK**. Nmap immediately sends an **RST** packet to tear down the connection before the three-way handshake completes, preventing full application connection establishment.
- **Port Closed:** The target responds with an **RST**. Nmap marks the port as \`closed\`.
- **Port Filtered:** The target does not respond at all (packet dropped by firewall), or responds with an ICMP unreachable error (e.g., Type 3, Code 13 - Communication Administratively Prohibited).

#### 2. The Full TCP Connect Scan (\`-sT\`)
When unprivileged, Nmap calls the operating system's \`connect()\` syscall:
- The full 3-way handshake (SYN -> SYN-ACK -> ACK) completes.
- Target applications log the connection, making this noisier and slightly slower.

#### 3. Handling Filtered Ports and Ping Probes (\`-Pn\`)
By default, Nmap sends ICMP Echo requests and TCP ACK/SYN packets to host discovery probes before scanning ports. If a host's firewall silently drops ICMP probes, Nmap may conclude the host is down and abort the scan entirely. Specifying \`-Pn\` instructs Nmap to bypass host discovery and assume the host is online, initiating port probes directly.

\`\`\`bash
# Baseline scan against laboratory host
sudo nmap -sS -p- -T4 -v 192.168.56.102

# Detailed service and script interrogation
sudo nmap -sV -sC -p 22,80,8080 192.168.56.102 -oN lab_scan_results.txt
\`\`\`

### Why Results Differ Based on Filtering & State

1. **Stateful vs. Stateless Firewalls:** A stateful firewall tracks established connections. Probe packets that lack prior connection context are simply dropped.
2. **Rate Limiting:** Modern Linux kernels enforce ICMP rate limiting (e.g., limiting RST responses per second). Rapid scanning might falsely categorize closed ports as filtered because RST responses are throttled.
3. **Banner Grabbing Discrepancies:** Running \`-sV\` forces Nmap to connect and listen for service banners. An open port with no responsive service will stay open, but yield no banner details.

### Key Takeaway for Practical Investigation

A port scan is never a magical mirror; it is an interrogation of responses. If no response arrives, knowing *whether* it was dropped by a router, filtered by an iptables rule, or swallowed by network latency requires methodical deduction rather than assumption.
`
  },
  {
    id: "linux-cli-environment-workflows",
    title: "Building an Intentional Command-Line Workflow in Kali Linux",
    category: "Linux",
    type: "Learning Note",
    date: "September 2026",
    readTime: "5 min read",
    summary:
      "A structured overview of command-line hygiene, package dependency troubleshooting, and disciplined filesystem organization during cybersecurity coursework.",
    tags: ["Kali Linux", "Bash", "Package Management", "Environment Setup"],
    content: `
### Moving Beyond Default Terminal Usage

Adopting Linux as a primary investigative environment requires moving past copy-pasting commands. In cybersecurity exercises, reproducibility and clean system state are critical. An unorganized system with conflicting libraries and forgotten packages quickly becomes unreliable.

### Disciplined Environment Practices

1. **Virtual Environments for Python Tools:** Many security utilities are built on Python with disparate library requirements. Installing everything globally using \`pip install\` risks breaking system packages. Adopting \`venv\` or \`pipx\` ensures tools remain cleanly containerized.
2. **Shell History and Logging:** When conducting investigative exercises, capturing exact command sequences ensures write-ups are accurate. Using terminal recording utilities like \`script\` or configuring bash history timestamps (\`HISTTIMEFORMAT\`) provides a verifiable trail of actions.
3. **Process and Resource Monitoring:** Understanding background resource consumption via \`htop\` and \`ps aux\` is essential, especially when running intensive fuzzing or automated network scans.

\`\`\`bash
# Setting up isolated environment for specialized security tools
python3 -m venv ~/tools/specialized-env
source ~/tools/specialized-env/bin/activate
pip install --upgrade pip
\`\`\`

### Managing Software Dependencies

When compiling legacy tools or installing packages with overlapping C bindings, apt error resolution requires understanding repository sources, architecture locks, and symbolic linking. Rather than forcing installations with \`--force-all\`, checking \`ldd\` dependencies and reading upstream issues provides true technical understanding.
`
  },
  {
    id: "osintgram-environment-setup-and-ethics",
    title: "OSINT Tooling: Python Environment Isolation & Ethical Boundaries",
    category: "Troubleshooting",
    type: "Experiment",
    date: "September 2026",
    readTime: "4 min read",
    summary:
      "Documenting dependency resolution during the installation of open-source intelligence tools, and establishing clear ethical frameworks for reconnaissance.",
    tags: ["OSINT", "Python venv", "Troubleshooting", "Ethics", "Dependencies"],
    content: `
### Background and Technical Challenge

During an exploration of Open Source Intelligence (OSINT) methodologies, I attempted to configure OSINTgram inside a Kali Linux environment. The setup process encountered several immediate obstacles: deprecated Python dependencies, conflicts with newer \`setuptools\`, and changes to API endpoints.

### Troubleshooting the Installation

1. **Dependency Incompatibilities:** The tool required specific legacy versions of several parsing libraries. Installing them in the base Kali environment failed due to PEP 668 externally managed environment protections.
2. **Resolution:** Created an isolated virtual environment specifically targeting the required Python minor version, pinned compatible library revisions in a customized \`requirements.txt\`, and resolved build errors for native extensions.

### The Crucial Ethical Boundary in OSINT

Exploring OSINT tools brings an immediate responsibility:
- **Public Data vs. Harassment:** Publicly available information must never be weaponized, used for stalking, or collected without legitimate investigative or defense authorization.
- **Lawful Purpose:** Reconnaissance tools should only be applied to verified self-owned targets, explicit client consent engagements, or authorized public challenges.
- **API Terms of Service:** Automated scraping often violates platform terms of service and can trigger account termination or legal exposure.

Understanding how OSINT works helps defenders understand what footprint their organizations inadvertently leave behind. The focus must always remain on protective evaluation.
`
  }
];
