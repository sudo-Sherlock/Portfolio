"use client";

import React, { useState } from "react";
import { Terminal, Shield, Play, HelpCircle, Layers, CheckCircle2 } from "lucide-react";

interface ScanProfile {
  id: string;
  name: string;
  command: string;
  targetDescription: string;
  tcpFlow: { step: string; packet: string; description: string }[];
  terminalOutput: string;
  analysis: string;
}

const scanProfiles: ScanProfile[] = [
  {
    id: "syn-scan",
    name: "TCP SYN Stealth Scan (-sS)",
    command: "sudo nmap -sS -p 22,80,3306 192.168.56.102",
    targetDescription: "Standard target host in an authorized internal laboratory subnet.",
    tcpFlow: [
      { step: "1", packet: "Scanner -> Target [SYN]", description: "Scanner sends raw SYN packet to probe port state." },
      { step: "2", packet: "Target -> Scanner [SYN-ACK]", description: "Target indicates service is actively listening." },
      { step: "3", packet: "Scanner -> Target [RST]", description: "Scanner immediately tears down socket before 3-way handshake completes." }
    ],
    terminalOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-10-29 10:14 IST
Nmap scan report for 192.168.56.102
Host is up (0.00042s latency).

PORT     STATE  SERVICE
22/tcp   open   ssh
80/tcp   open   http
3306/tcp closed mysql
MAC Address: 08:00:27:B4:9A:12 (Oracle VirtualBox virtual NIC)

Nmap done: 1 IP address (1 host up) scanned in 0.18 seconds`,
    analysis:
      "Because the 3-way handshake was aborted with a RST before application-level socket binding, traditional application logs on port 80/22 do not register an established session, reducing scan noise while reliably confirming open status."
  },
  {
    id: "connect-scan",
    name: "TCP Connect Scan (-sT)",
    command: "nmap -sT -p 80,443,8080 192.168.56.102",
    targetDescription: "Unprivileged user scan without raw socket privileges.",
    tcpFlow: [
      { step: "1", packet: "Scanner -> Target [SYN]", description: "OS kernel initiates connect() system call." },
      { step: "2", packet: "Target -> Scanner [SYN-ACK]", description: "Target responds indicating port listening." },
      { step: "3", packet: "Scanner -> Target [ACK]", description: "OS completes full 3-way handshake; application receives connection." },
      { step: "4", packet: "Scanner -> Target [RST/FIN]", description: "Scanner promptly closes socket connection." }
    ],
    terminalOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-10-29 10:18 IST
Nmap scan report for 192.168.56.102
Host is up (0.00061s latency).

PORT     STATE  SERVICE
80/tcp   open   http
443/tcp  closed https
8080/tcp open   http-proxy

Nmap done: 1 IP address (1 host up) scanned in 0.34 seconds`,
    analysis:
      "When running without root/sudo privileges, Nmap cannot craft raw IP frames, forcing reliance on the standard POSIX connect() syscall. This fully establishes connections, meaning web servers and proxies will log incoming IP handshakes."
  },
  {
    id: "filtered-firewall",
    name: "Firewall Drop & Filtered State Detection",
    command: "sudo nmap -sS -p 445,139,8443 192.168.56.102",
    targetDescription: "Host with iptables DROP rules active for SMB and admin ports.",
    tcpFlow: [
      { step: "1", packet: "Scanner -> Target [SYN]", description: "Scanner probes port 445." },
      { step: "2", packet: "Target Firewall [DROP]", description: "Kernel firewall silently discards packet with no response." },
      { step: "3", packet: "Scanner -> Target [SYN Retransmit]", description: "Scanner retransmits after timeout threshold." },
      { step: "4", packet: "Scanner State [FILTERED]", description: "Absence of SYN-ACK or RST indicates active packet filtering." }
    ],
    terminalOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-10-29 10:22 IST
Nmap scan report for 192.168.56.102
Host is up (0.00045s latency).

PORT     STATE    SERVICE
139/tcp  filtered netbios-ssn
445/tcp  filtered microsoft-ds
8443/tcp closed   https-alt

Nmap done: 1 IP address (1 host up) scanned in 2.45 seconds`,
    analysis:
      "A port is marked 'filtered' when probe packets are silently swallowed or blocked by a packet filter/firewall. Notice the dramatic increase in scan time (2.45s vs 0.18s) caused by probe timeouts and retransmission attempts."
  },
  {
    id: "skip-ping",
    name: "ICMP Firewall Bypass (-Pn)",
    command: "sudo nmap -Pn -sV -p 80,443 192.168.56.102",
    targetDescription: "Hardened target host configured to silently drop ICMP Echo requests.",
    tcpFlow: [
      { step: "1", packet: "Scanner [Bypass Ping]", description: "Does not send ICMP Echo Request; assumes host is alive." },
      { step: "2", packet: "Scanner -> Target [SYN]", description: "Probes port 80 directly." },
      { step: "3", packet: "Target -> Scanner [SYN-ACK]", description: "Web server responds normally despite ping being blocked." }
    ],
    terminalOutput: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-10-29 10:26 IST
Host is up (0.00050s latency).
PORT    STATE SERVICE VERSION
80/tcp  open  http    nginx 1.18.0 (Ubuntu)
443/tcp open  ssl/http nginx 1.18.0 (Ubuntu)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Nmap done: 1 IP address (1 host up) scanned in 6.82 seconds`,
    analysis:
      "Without the -Pn flag, Nmap's initial host discovery ping probes would fail, leading the scanner to conclude the host is offline. Specifying -Pn forces direct port interrogation, successfully discovering live services on ICMP-hardened targets."
  }
];

export default function NmapSimulator() {
  const [activeProfileId, setActiveProfileId] = useState<string>("syn-scan");

  const currentProfile = scanProfiles.find((p) => p.id === activeProfileId) || scanProfiles[0];

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-rule-border shadow-editorial space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rule-border pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-forest" />
            <h3 className="font-display font-bold text-lg text-ink">
              Interactive Network Scan Diagnostics
            </h3>
          </div>
          <p className="text-xs text-ink-secondary">
            Simulate how TCP state machines, scan flags, and firewalls change probe behavior.
          </p>
        </div>
        <span className="text-xs font-mono text-ink-muted">Lab Tested Output</span>
      </div>

      {/* Profile Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {scanProfiles.map((profile) => (
          <button
            key={profile.id}
            type="button"
            onClick={() => setActiveProfileId(profile.id)}
            className={`p-2.5 rounded-lg text-left text-xs font-mono transition-all border ${
              activeProfileId === profile.id
                ? "bg-forest text-paper border-forest font-semibold shadow-sm"
                : "bg-paper-muted text-ink-secondary hover:text-ink border-rule-border hover:bg-paper"
            }`}
          >
            {profile.name}
          </button>
        ))}
      </div>

      {/* Command & Target */}
      <div className="p-3.5 rounded-lg bg-paper-muted border border-rule-border space-y-2">
        <div className="flex items-center justify-between gap-2 text-xs font-mono">
          <span className="text-forest font-bold">Executed Command:</span>
          <span className="text-ink-muted">{currentProfile.targetDescription}</span>
        </div>
        <div className="font-mono text-xs sm:text-sm bg-paper p-2.5 rounded border border-rule-border text-ink select-all">
          {currentProfile.command}
        </div>
      </div>

      {/* Two Column Layout: TCP Packet Flow & Terminal Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* TCP Flow */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest block">
            TCP Protocol Handshake Flow
          </span>
          <div className="space-y-2">
            {currentProfile.tcpFlow.map((flow, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-paper-muted border border-rule-border text-xs space-y-1"
              >
                <div className="flex items-center gap-2 font-mono font-semibold text-terracotta">
                  <span className="w-4 h-4 rounded-full bg-terracotta/10 flex items-center justify-center text-[10px]">
                    {flow.step}
                  </span>
                  <span>{flow.packet}</span>
                </div>
                <p className="text-ink-secondary text-[11px] leading-relaxed pl-6">
                  {flow.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Output */}
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest block">
            Observed Terminal Output
          </span>
          <div className="p-4 rounded-lg bg-[#1E2522] text-[#E8EEE8] font-mono text-xs overflow-x-auto border border-[#303E38] shadow-inner leading-relaxed">
            <pre>
              <code>{currentProfile.terminalOutput}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Forensic Diagnostic Analysis */}
      <div className="p-4 rounded-lg bg-sage/40 border border-forest/20 text-xs sm:text-sm text-ink-secondary space-y-1">
        <span className="font-mono font-bold text-forest uppercase tracking-wider block">
          Forensic & Diagnostic Analysis
        </span>
        <p className="leading-relaxed">
          {currentProfile.analysis}
        </p>
      </div>
    </div>
  );
}
