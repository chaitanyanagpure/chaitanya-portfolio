"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import ResumeViewer from "@/components/ResumeViewer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VisualBackground from "@/components/VisualBackground";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulated initial mount load for elegant transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
        <div className="space-y-4 text-center">
          {/* Glowing dot grid spinner */}
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-t-2 border-purple-500 border-r-2 border-transparent animate-spin" />
            <div className="absolute w-8 h-8 rounded-full border-b-2 border-blue-500 border-l-2 border-transparent animate-spin [animation-direction:reverse]" />
          </div>
          
          <div className="space-y-1">
            <h1 className="text-sm font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Chaitanya Nagpure
            </h1>
            <p className="text-[10px] font-mono text-neutral-600 tracking-wider">
              INITIALIZING AI ENGINE ENVIRONMENT...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      {/* Visual Design Elements & Backdrop */}
      <VisualBackground />

      {/* Floating Header */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <ResumeViewer />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
