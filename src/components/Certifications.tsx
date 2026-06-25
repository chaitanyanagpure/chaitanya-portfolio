"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, Calendar, X, Download } from "lucide-react";
import { certifications, Certification } from "../../data/certifications";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [activeCert]);

  // Helper to parse Google Drive URLs and extract file ID
  const getGoogleDriveId = (url?: string): string | null => {
    if (!url || !url.includes("drive.google.com")) return null;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const activeDriveId = activeCert ? getGoogleDriveId(activeCert.certificateUrl || "") : null;
  const activeIframeSrc = activeDriveId ? `https://drive.google.com/file/d/${activeDriveId}/preview` : "";
  const activeDownloadUrl = activeDriveId
    ? `https://drive.google.com/uc?export=download&id=${activeDriveId}`
    : activeCert?.certificateUrl || "";

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 lg:px-12 relative bg-neutral-950/30">
      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            Professional Qualifications
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Badges
          </h3>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => {
            const driveId = getGoogleDriveId(cert.certificateUrl);
            const isLocalImage = cert.certificateUrl?.startsWith("/") || cert.certificateUrl?.startsWith("images");

            return (
              <div
                key={cert.id}
                className="glass-panel rounded-2xl p-5 shadow-lg border border-neutral-800/80 hover:border-neutral-700/90 transition-all duration-300 flex flex-col gap-5 group"
              >
                {/* Top: Certificate Document Preview or CSS Mockup */}
                <button
                  onClick={() => setActiveCert(cert)}
                  className="relative w-full aspect-[4/3] rounded-xl bg-neutral-950 border border-neutral-800/80 flex flex-col justify-between overflow-hidden shadow-inner select-none transition-all duration-300 cursor-pointer hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.08)] group/mockup"
                >
                  {driveId ? (
                    /* Google Drive Preview embedded directly on the main page */
                    <iframe
                      src={`https://drive.google.com/file/d/${driveId}/preview`}
                      className="w-full h-full border-none pointer-events-none"
                      title={`${cert.title} Preview`}
                    />
                  ) : isLocalImage ? (
                    /* Local Image Scan */
                    <img
                      src={cert.certificateUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Fallback to CSS mockup if no certificate URL is provided */
                    <>
                      {/* Pattern background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-45 pointer-events-none" />
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-transparent blur-xl" />

                      {/* Border lines */}
                      <div className="absolute inset-2.5 border border-neutral-800/40 rounded-lg pointer-events-none" />
                      <div className="absolute inset-3 border border-purple-500/5 rounded-lg pointer-events-none" />

                      {/* Top header within mockup */}
                      <div className="flex items-center justify-between z-10 px-5 pt-5">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-neutral-950 p-0.5 border border-neutral-800 flex items-center justify-center relative overflow-hidden">
                            {/* Text fallback centered in circle */}
                            <span className="absolute inset-0 flex items-center justify-center text-[7px] font-mono font-bold text-purple-400 bg-neutral-950 rounded-full select-none">
                              {cert.issuer.split(/[ \u00A0.-]+/).map(w => w[0]).join('').substring(0, 3).toUpperCase()}
                            </span>
                            <img 
                              src={cert.imageUrl} 
                              alt={cert.issuer} 
                              className="w-full h-full object-contain rounded-full relative z-10 bg-neutral-950"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                          <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">{cert.issuer}</span>
                        </div>
                        <span className="text-[8px] font-mono text-purple-400 bg-purple-400/5 border border-purple-500/10 px-2 py-0.5 rounded">VERIFIED</span>
                      </div>

                      {/* Center title award within mockup */}
                      <div className="text-center my-auto z-10 space-y-1.5 px-5">
                        <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-neutral-600 block">CERTIFICATE OF ACHIEVEMENT</span>
                        <h5 className="text-xs md:text-sm font-semibold text-white tracking-tight leading-tight px-3 line-clamp-2">
                          {cert.title}
                        </h5>
                        <div className="text-[9px] text-neutral-400 font-light">
                          awarded to <span className="font-semibold text-neutral-200">Chaitanya Nagpure</span>
                        </div>
                      </div>

                      {/* Bottom signatures within mockup */}
                      <div className="flex items-center justify-between z-10 border-t border-neutral-800/40 pt-2.5 px-5 pb-5">
                        <div className="text-left">
                          <div className="text-[7px] font-mono text-neutral-600 uppercase tracking-wider">ISSUED ON</div>
                          <div className="text-[8px] font-mono text-neutral-400 font-semibold">{cert.date}</div>
                        </div>
                        
                        {/* Seal */}
                        <div className="w-7 h-7 rounded-full border border-purple-500/30 bg-purple-500/5 flex items-center justify-center relative shadow-[0_0_10px_rgba(147,51,234,0.1)] group-hover/mockup:scale-105 transition-transform duration-300">
                          <div className="w-5.5 h-5.5 rounded-full border border-dashed border-purple-500/20 flex items-center justify-center text-[7px] font-mono text-purple-400 font-bold">
                            AI
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </button>

                {/* Bottom: Certificate details section under the certificate */}
                <div className="flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                        {cert.issuer}
                      </span>
                      <span className="flex items-center text-[10px] font-mono text-neutral-500 space-x-1">
                        <Calendar size={10} />
                        <span>{cert.date}</span>
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white tracking-tight group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h4>
                  </div>

                  {/* Skills gained list */}
                  <div className="flex flex-wrap gap-1.5 justify-start">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-medium font-mono text-neutral-300 bg-neutral-900/60 border border-neutral-800/60 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-3 border-t border-neutral-900/60 flex items-center justify-between gap-2">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-400 hover:text-white transition-colors cursor-pointer w-full justify-center py-2 rounded-lg bg-neutral-950 border border-neutral-900 hover:border-purple-500/30"
                    >
                      <span>View Credentials</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
            onClick={() => setActiveCert(null)}
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
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm md:text-base font-bold text-white tracking-tight whitespace-nowrap overflow-hidden text-ellipsis pr-4">
                    {activeCert.title}
                  </h3>
                  <p className="text-[11px] md:text-xs font-mono text-purple-400 font-semibold mt-0.5 truncate pr-4">
                    {activeCert.issuer} • Verified Certification
                  </p>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800/60 hover:bg-neutral-800/80 transition-colors cursor-pointer shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content body (Scrollable) */}
              <div className="overflow-y-auto p-6 md:p-8 flex-grow flex items-center justify-center bg-neutral-950">
                <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-900/50 border border-neutral-800/80 shadow-2xl p-2 group">
                  {activeDriveId ? (
                    <iframe
                      src={activeIframeSrc}
                      className="w-full h-[55vh] border-none rounded-xl bg-neutral-950"
                      title={`${activeCert.title} Viewer`}
                      allow="autoplay"
                    />
                  ) : (
                    <img
                      src={activeCert.certificateUrl}
                      alt={activeCert.title}
                      className="w-full h-auto max-h-[60vh] object-contain rounded-xl mx-auto shadow-lg"
                    />
                  )}
                  {/* Subtle background glow */}
                  {!activeDriveId && <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />}
                </div>
              </div>

              {/* Footer bar */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/80 sticky bottom-0 z-20 backdrop-blur-md">
                <a
                  href={activeDownloadUrl}
                  download={activeDriveId ? undefined : `${activeCert.title.replace(/\s+/g, "_")}_Certificate.png`}
                  target={activeDriveId ? "_blank" : undefined}
                  rel={activeDriveId ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all w-full sm:w-auto shadow-lg cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download Certificate</span>
                </a>

                <a
                  href={activeCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all w-full sm:w-auto cursor-pointer"
                >
                  <span>Verify Credentials</span>
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
