import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F0",
};

export const metadata: Metadata = {
  title: "Gaarvi Bhatia | Portfolio & Digital Identity",
  description:
    "First-Year B.Tech Computer Science & AI student at Newton School of Technology, Rishihood University. Exploring cybersecurity, digital forensics, network security, and investigative problem-solving.",
  keywords: [
    "Gaarvi Bhatia",
    "Cybersecurity",
    "Digital Forensics",
    "Computer Science",
    "Newton School of Technology",
    "Rishihood University",
    "SOCS",
    "Cipher Syndicate",
    "CTF Writeups",
    "Network Security",
  ],
  authors: [{ name: "Gaarvi Bhatia" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-sage selection:text-forest">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
