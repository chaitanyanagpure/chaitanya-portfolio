"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/personalInfo";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    let currentActive = "home";
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 250; // Trigger offset

          for (const item of NAV_ITEMS) {
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                if (currentActive !== item.id) {
                  currentActive = item.id;
                  setActiveSection(item.id);
                }
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force Dark Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Step 1: Close the mobile menu immediately
    setIsMobileMenuOpen(false);
    
    // Step 2: Restore body scrolling immediately
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    
    // Step 3: Perform smooth scrolling to the target section
    const target = document.getElementById(id);
    if (target) {
      const offset = id === "home" ? 110 : 90;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Floating Translucent Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] rounded-full py-3 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-between transition-all duration-300">
        {/* Name / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-white dark:text-white light:text-neutral-900 font-semibold tracking-tight hover:opacity-80 transition-opacity text-sm md:text-base shrink-0"
        >
          {personalInfo.name} <span className="text-purple-400 font-mono text-xs ml-1">AI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          {NAV_ITEMS.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1 text-[10px] xl:text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-purple-400 font-bold"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-purple-400 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </a>
              {idx < NAV_ITEMS.length - 1 && (
                <span className="text-neutral-700 text-xs select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4 shrink-0">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/30 rounded-full transition-colors relative z-50"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
              style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] h-screen z-40 bg-neutral-950/95 border-l border-neutral-900/60 shadow-2xl flex flex-col justify-between p-6 pt-24 lg:hidden"
              style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
            >
              {/* Drawer Links */}
              <div className="flex flex-col space-y-2 overflow-y-auto pr-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center w-full py-3 px-4 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:bg-neutral-900/50 ${
                      activeSection === item.id
                        ? "text-purple-400 bg-purple-500/5 font-bold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Drawer Footer (Social Links & Metadata) */}
              <div className="border-t border-neutral-900/80 pt-6 space-y-4">
                <div className="flex items-center justify-center space-x-6 text-neutral-400">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-900 border border-neutral-800/80 rounded-full hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-900 border border-neutral-800/80 rounded-full hover:text-purple-400 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 bg-neutral-900 border border-neutral-800/80 rounded-full hover:text-blue-400 transition-colors"
                    aria-label="Email Contact"
                  >
                    <Mail size={16} />
                  </a>
                </div>

                <div className="text-center text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                  AI Engineer Portfolio
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
