"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left column: Text details */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start space-y-6 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-purple-400" />
            <span className="text-purple-400 font-mono text-xs uppercase tracking-widest font-semibold">
              AI Engineer Portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title List */}
          <motion.h2
            variants={itemVariants}
            className="text-base md:text-xl font-medium text-neutral-400 font-mono"
          >
            {personalInfo.titles.join(" | ")}
          </motion.h2>

          {/* Professional statement */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-300 text-xs md:text-base leading-relaxed max-w-2xl font-light"
          >
            Building production-grade AI systems that transform complex data into intelligent real-world solutions. Specialized in Machine Learning, Deep Learning, Generative AI, LLM applications, RAG systems, and scalable AI engineering.
          </motion.p>

          {/* Specialty Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
            {personalInfo.specialties.map((spec, index) => (
              <motion.span
                key={index}
                className="text-[10px] md:text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-300 backdrop-blur-sm cursor-pointer select-none"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  borderColor: "rgba(168, 85, 247, 0.6)",
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                  color: "#ffffff",
                  boxShadow: "0 8px 16px -6px rgba(168, 85, 247, 0.35)"
                }}
                transition={{ type: "spring", stiffness: 450, damping: 14 }}
              >
                {spec}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center w-full sm:w-auto justify-center lg:justify-start"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(120,119,198,0.25)] hover:shadow-[0_4px_30px_rgba(120,119,198,0.4)] cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScrollTo("resume")}
              className="flex items-center justify-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800/80 text-neutral-300 hover:text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center bg-transparent border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-5 pt-6 text-neutral-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right column: Profile Image */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative group select-none">
            {/* Soft glowing borders around avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full opacity-35 blur-2xl group-hover:opacity-50 transition-opacity duration-500 pointer-events-none animate-pulse" />
            
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-tr from-purple-500/50 via-neutral-800/80 to-blue-500/50 shadow-2xl relative">
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-950">
                <img
                  src="/images/profile.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
