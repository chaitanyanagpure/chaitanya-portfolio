"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Calendar, MapPin, FileText, X, Download, ExternalLink, TrendingUp, BarChart3, Users, Target } from "lucide-react";
import { experiences, Experience as ExperienceType } from "../../data/experience";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [activeCert, setActiveCert] = useState<ExperienceType | null>(null);

  // Safe close handler to prevent WebKit iframe touch freeze bug on iOS/mobile Safari
  const handleClose = () => {
    if (typeof window !== "undefined") {
      try {
        window.focus();
        document.body.focus();
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      } catch (err) {
        console.error("Focus restoration error:", err);
      }
    }
    setActiveCert(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCert]);

  // Helper to parse Google Drive URLs and extract file ID
  const getGoogleDriveId = (url?: string): string | null => {
    if (!url || !url.includes("drive.google.com")) return null;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const driveId = activeCert ? getGoogleDriveId(activeCert.certificateUrl) : null;
  const iframeSrc = driveId ? `https://drive.google.com/file/d/${driveId}/preview` : "";
  const downloadUrl = driveId
    ? `https://drive.google.com/uc?export=download&id=${driveId}`
    : activeCert?.certificateUrl || "";

  return (
    <section id="experience" className="py-24 px-4 md:px-8 lg:px-12 relative bg-neutral-950/40">
      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            Work Experience
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Professional History
          </h3>
        </div>

        {/* Detailed Experience Timeline (Centered) */}
        <div className="relative border-l border-neutral-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10 group">
              {/* Timeline indicator node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-purple-500 bg-neutral-950 group-hover:bg-purple-400 transition-colors duration-300" />
              
              {/* Experience Info Card */}
              <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-md hover:border-neutral-700/80 transition-all duration-300 space-y-5">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-neutral-900">
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                        <Briefcase size={12} />
                        <span>{exp.role}</span>
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        Jio Telecom
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h4>
                  </div>
                  
                  {/* Metadata */}
                  <div className="flex flex-col text-neutral-400 font-mono text-xs space-y-1 md:text-right">
                    <span className="flex items-center md:justify-end space-x-1">
                      <Calendar size={12} />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center md:justify-end space-x-1">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Styled Domain Achievements */}
                <div className="space-y-4 pt-1">
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 bg-purple-500/10 border border-purple-500/20 rounded-md">
                      <TrendingUp size={12} className="text-purple-400" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wide">Data Analysis & Insights</h5>
                      <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                        {exp.responsibilities[0]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 bg-purple-500/10 border border-purple-500/20 rounded-md">
                      <BarChart3 size={12} className="text-purple-400" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wide">Business Intelligence</h5>
                      <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                        {exp.responsibilities[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 bg-purple-500/10 border border-purple-500/20 rounded-md">
                      <Users size={12} className="text-purple-400" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wide">Cross-Functional Sync</h5>
                      <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                        {exp.responsibilities[2]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 bg-purple-500/10 border border-purple-500/20 rounded-md">
                      <Target size={12} className="text-purple-400" />
                    </div>
                    <div className="space-y-0.5">
                      <h5 className="text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wide">Process Optimization</h5>
                      <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                        {exp.responsibilities[3]}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Applied Skills Badges */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 justify-start border-t border-neutral-900/60">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-medium font-mono text-neutral-300 bg-neutral-900/60 border border-neutral-800/60 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Optional Certificate Button */}
                {exp.certificateUrl && (
                  <div className="pt-3 border-t border-neutral-900/60 flex justify-end">
                    <button
                      onClick={() => setActiveCert(exp)}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-purple-500/30 cursor-pointer"
                    >
                      <FileText size={12} />
                      <span>View Internship Certificate</span>
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {activeCert && activeCert.certificateUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass-panel w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950 text-left max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/80 sticky top-0 z-20 backdrop-blur-md">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                    Internship Certificate
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                    {activeCert.company}
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800/60 hover:bg-neutral-800/80 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content body (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-8 flex-grow flex items-center justify-center bg-neutral-950">
                <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-800/80 shadow-2xl p-2 group">
                  {driveId ? (
                    <iframe
                      src={iframeSrc}
                      className="w-full h-[55vh] border-none rounded-xl bg-neutral-950"
                      title={`${activeCert.company} Internship Certificate Viewer`}
                      allow="autoplay"
                    />
                  ) : (
                    <img
                      src={activeCert.certificateUrl}
                      alt={`${activeCert.company} Internship Certificate`}
                      className="w-full h-auto max-h-[60vh] object-contain rounded-xl mx-auto shadow-lg"
                    />
                  )}
                  {/* Subtle background glow */}
                  {!driveId && <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />}
                </div>
              </div>

              {/* Footer bar */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/80 sticky bottom-0 z-20 backdrop-blur-md">
                <a
                  href={downloadUrl}
                  download={driveId ? undefined : `${activeCert.company.replace(/\s+/g, "_")}_Certificate.png`}
                  target={driveId ? "_blank" : undefined}
                  rel={driveId ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all w-full sm:w-auto shadow-lg cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download Certificate</span>
                </a>

                <a
                  href={activeCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all w-full sm:w-auto cursor-pointer"
                >
                  <span>Open Full-Screen</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
