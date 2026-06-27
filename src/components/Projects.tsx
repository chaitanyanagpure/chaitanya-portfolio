"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, CheckCircle2, ZoomIn } from "lucide-react";
import { projects, Project } from "../../data/projects";

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

const CATEGORIES = ["All", "Generative AI", "Computer Vision", "MLOps", "Data Engineering", "Full Stack AI"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Helper to convert Google Drive share URLs to direct image view URLs for <img> tags
  const resolveGoogleDriveImageUrl = (url: string): string => {
    if (!url || !url.includes("drive.google.com")) return url;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    const driveId = match ? match[1] : null;
    return driveId ? `https://lh3.googleusercontent.com/d/${driveId}` : url;
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.filterCategories.includes(selectedCategory));

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section 
      id="projects" 
      className={`py-24 px-4 md:px-8 lg:px-12 relative bg-neutral-950/30 transition-all duration-300 ${activeProject ? "z-[100]" : "z-10"}`}
      style={{ zIndex: activeProject ? 100 : 10 }}
    >
      <div className={`max-w-6xl mx-auto relative ${activeProject ? "z-[100]" : "z-10"}`}>
        
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            Featured Projects
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade AI Systems
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mt-4 font-light">
            Explore engineering architectures designed to solve real-world industry challenges.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-2 mb-16 pb-3 md:pb-0 scrollbar-none max-w-full px-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 shrink-0 ${
                selectedCategory === cat
                  ? "bg-purple-600 border-purple-500 text-white shadow-[0_2px_15px_rgba(120,119,198,0.25)]"
                  : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl border border-neutral-800/80 hover:border-neutral-700/90 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                  <img
                    src={resolveGoogleDriveImageUrl(project.imageUrl)}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-mono tracking-wider bg-purple-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md uppercase font-semibold">
                    {project.category.split("|")[0].trim()}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-neutral-400 font-light leading-relaxed text-xs line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech tag highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-medium font-mono text-neutral-300 bg-neutral-900 border border-neutral-800/60 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[9px] font-mono text-neutral-500 px-1">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Quick links */}
                    <div className="flex items-center space-x-4 pt-2 text-xs font-semibold text-purple-400" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="hover:text-white transition-colors flex items-center space-x-1"
                      >
                        <FileText size={14} />
                        <span>Case Study</span>
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center space-x-1"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Deep Dive Case Study Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950 text-left max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/80 sticky top-0 z-20 backdrop-blur-md">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                      {activeProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800/60 hover:bg-neutral-800/80 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content body (Scrollable) */}
                <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-grow">
                  
                  {/* 1. Case Study Overview & Technical Details */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-3 text-left">
                        <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                          Project Overview
                        </h4>
                        <p className="text-neutral-300 font-light leading-relaxed text-sm">
                          {activeProject.description}
                        </p>
                      </div>

                      {activeProject.problemStatement && (
                        <div className="space-y-3 text-left">
                          <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                            The Challenge (Problem Statement)
                          </h4>
                          <p className="text-neutral-300 font-light leading-relaxed text-sm">
                            {activeProject.problemStatement}
                          </p>
                        </div>
                      )}

                      {activeProject.proposedSolution && (
                        <div className="space-y-3 text-left">
                          <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                            The Proposed Solution
                          </h4>
                          <p className="text-neutral-300 font-light leading-relaxed text-sm">
                            {activeProject.proposedSolution}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right column sidebar */}
                    <div className="md:col-span-4 space-y-6 text-left">
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProject.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono font-medium text-neutral-300 bg-neutral-900 border border-neutral-800/80 px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Call-to-Actions (CTAs) */}
                      <div className="pt-4 border-t border-neutral-900/60 flex flex-col gap-3">
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all w-full cursor-pointer"
                        >
                          <GithubIcon size={14} />
                          <span>Code Repository</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 2. Project Screenshots Section */}
                  <div className="space-y-4 border-t border-neutral-900/60 pt-6 text-left">
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                      Project Screenshots & User Interface
                    </h4>
                    {activeProject.screenshots && activeProject.screenshots.length > 0 ? (
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neutral-800">
                        {activeProject.screenshots.map((shot, idx) => (
                          <div
                            key={idx}
                            onClick={() => setFullscreenImage(shot)}
                            className="relative aspect-video w-[280px] sm:w-[320px] md:w-[400px] shrink-0 rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 cursor-zoom-in hover:border-purple-500/30 transition-colors group"
                          >
                            <img
                              src={resolveGoogleDriveImageUrl(shot)}
                              alt={`${activeProject.title} Screenshot ${idx + 1}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-305"
                            />
                            {/* Hover zoom indicator */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                              <div className="p-2 bg-neutral-900/80 border border-neutral-800 rounded-full text-white shadow-lg">
                                <ZoomIn size={16} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Fallback Mock Screenshots Display */
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neutral-800 select-none">
                        <div className="relative aspect-video w-[240px] sm:w-[280px] md:w-[340px] shrink-0 rounded-xl overflow-hidden bg-neutral-900/30 border border-neutral-800/80 flex flex-col justify-center items-center text-center p-6 space-y-2">
                          <div className="p-3 bg-purple-500/5 rounded-full border border-purple-500/10 text-purple-400">
                            <FileText size={18} />
                          </div>
                          <span className="text-xs font-semibold text-neutral-300">Dashboard Control Panel</span>
                          <p className="text-[10px] text-neutral-500 max-w-[200px] leading-relaxed">Interactive admin control dashboard showcasing pipeline status and active system parameters.</p>
                        </div>
                        
                        <div className="relative aspect-video w-[240px] sm:w-[280px] md:w-[340px] shrink-0 rounded-xl overflow-hidden bg-neutral-900/30 border border-neutral-800/80 flex flex-col justify-center items-center text-center p-6 space-y-2">
                          <div className="p-3 bg-purple-500/5 rounded-full border border-purple-500/10 text-purple-400">
                            <FileText size={18} />
                          </div>
                          <span className="text-xs font-semibold text-neutral-300">Model Analytics Portal</span>
                          <p className="text-[10px] text-neutral-500 max-w-[200px] leading-relaxed">Real-time performance graph tracking, schema drift diagnostics, and accuracy logs.</p>
                        </div>

                        <div className="relative aspect-video w-[240px] sm:w-[280px] md:w-[340px] shrink-0 rounded-xl overflow-hidden bg-neutral-900/30 border border-neutral-800/80 flex flex-col justify-center items-center text-center p-6 space-y-2">
                          <div className="p-3 bg-purple-500/5 rounded-full border border-purple-500/10 text-purple-400">
                            <FileText size={18} />
                          </div>
                          <span className="text-xs font-semibold text-neutral-300">System Logs Ingestion</span>
                          <p className="text-[10px] text-neutral-500 max-w-[200px] leading-relaxed">Cron status trackers, dataset integrity checkers, and secure transaction API gateways.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. System Architecture Section (Moved below screenshots) */}
                  <div className="space-y-4 border-t border-neutral-900/60 pt-6 text-left">
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                        System Architecture
                      </h4>
                      {activeProject.architectureDescription && (
                        <p className="text-neutral-400 font-light leading-relaxed text-xs">
                          {activeProject.architectureDescription}
                        </p>
                      )}
                    </div>
                    
                    <div
                      onClick={() => setFullscreenImage(activeProject.architectureUrl)}
                      className="w-full rounded-2xl overflow-hidden aspect-video bg-neutral-950 relative border border-neutral-800 max-h-[380px] flex items-center justify-center cursor-zoom-in hover:border-purple-500/30 transition-colors group"
                    >
                      <img
                        src={resolveGoogleDriveImageUrl(activeProject.architectureUrl)}
                        alt={`${activeProject.title} System Architecture`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-305"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />
                      {/* Hover zoom indicator */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <div className="p-2 bg-neutral-900/80 border border-neutral-800 rounded-full text-white shadow-lg">
                          <ZoomIn size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Key Features & Deliverables */}
                  <div className="space-y-4 border-t border-neutral-900/60 pt-6 text-left">
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">
                      Key Features & Deliverables
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs text-neutral-300 font-light">
                          <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. GitHub Documentation Note */}
                  <div className="border border-purple-500/10 bg-purple-500/5 rounded-xl p-4 text-left mt-6">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      <strong className="font-semibold text-neutral-200">
                        Note: For detailed system configurations, setup guides, and comprehensive documentation, please refer to the README file in the official{" "}
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 hover:underline transition-colors inline-flex items-center font-bold"
                        >
                          GitHub Repository
                        </a>
                        .
                      </strong>
                    </p>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Fullscreen Image Viewer */}
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-zoom-out"
              onClick={() => setFullscreenImage(null)}
            >
              {/* Top Close indicator */}
              <div className="absolute top-6 right-6 flex items-center space-x-2 text-xs font-mono text-neutral-400 bg-neutral-900/85 border border-neutral-800 px-3 py-1.5 rounded-full select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                <span>Click anywhere to exit full-screen</span>
              </div>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={resolveGoogleDriveImageUrl(fullscreenImage)}
                  alt="Fullscreen view"
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[85vh] object-contain rounded-xl border border-neutral-800 shadow-2xl"
                />
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800/60 hover:bg-neutral-800/80 transition-colors cursor-pointer shadow-lg"
                >
                  <X size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
