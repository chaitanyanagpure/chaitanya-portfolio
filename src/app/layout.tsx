import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chaitanyanagpure.com"),
  title: "Chaitanya Nagpure | AI Engineer & ML Architect",
  description: "Professional portfolio of Chaitanya Nagpure, an AI Engineer, Machine Learning Engineer, and Full Stack AI Developer. Specializing in Generative AI, LLMs, RAG platforms, MLOps pipelines, and computer vision systems.",
  keywords: [
    "Chaitanya Nagpure",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack AI Developer",
    "Generative AI",
    "LLM applications",
    "RAG systems",
    "MLOps",
    "Deep Learning",
    "Computer Vision"
  ],
  authors: [{ name: "Chaitanya Nagpure" }],
  creator: "Chaitanya Nagpure",
  openGraph: {
    title: "Chaitanya Nagpure | AI Engineer & ML Architect",
    description: "Building production-grade AI systems that transform complex data into intelligent real-world solutions.",
    url: "https://chaitanyanagpure.com",
    siteName: "Chaitanya Nagpure Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Chaitanya Nagpure Profile Picture"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Nagpure | AI Engineer",
    description: "Building production-grade AI systems that transform complex data into intelligent real-world solutions.",
    images: ["/images/profile.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
      >
        <div className="gradient-mesh" />
        {children}
      </body>
    </html>
  );
}
