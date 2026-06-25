"use client";

import React from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
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

export default function ResumeViewer() {
  // Helper to parse Google Drive URLs and extract file ID
  const getGoogleDriveId = (url: string): string | null => {
    if (!url || !url.includes("drive.google.com")) return null;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const driveId = getGoogleDriveId(personalInfo.resumeUrl);
  
  // If it is Google Drive, use the /preview endpoint. Otherwise, use original path.
  const embedUrl = driveId 
    ? `https://drive.google.com/file/d/${driveId}/preview` 
    : personalInfo.resumeUrl;

  // Direct download link for Google Drive, or original path.
  const downloadUrl = driveId
    ? `https://drive.google.com/uc?export=download&id=${driveId}`
    : personalInfo.resumeUrl;

  const iframeSrc = driveId
    ? embedUrl
    : `${personalInfo.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <section id="resume" className="py-24 px-4 md:px-8 lg:px-12 relative">
      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            Curriculum Vitae
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Professional Resume
          </h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Action Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-panel rounded-2xl p-6 md:p-8 shadow-md">
            <div className="space-y-6">
              <div className="p-3 bg-neutral-900 border border-neutral-800/80 rounded-xl w-fit">
                <FileText size={28} className="text-purple-400" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white tracking-tight">Chaitanya Nagpure</h4>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  AI & ML Software Engineering
                </p>
              </div>

              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Access my comprehensive professional resume details, highlighting system implementations, cloud configurations, and mathematical specialties. Available for offline review.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-8 border-t border-neutral-900 mt-8">
              <a
                href={downloadUrl}
                download={driveId ? undefined : "Chaitanya_Nagpure_Resume.pdf"}
                target={driveId ? "_blank" : undefined}
                rel={driveId ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-3 rounded-full transition-all w-full shadow-lg cursor-pointer"
              >
                <Download size={14} />
                <span>Download Resume PDF</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold px-4 py-3 rounded-full transition-all w-full cursor-pointer"
              >
                <span>Full-Screen Viewer</span>
                <ExternalLink size={12} />
              </a>

              {/* Quick links */}
              <div className="flex items-center justify-center space-x-4 pt-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-purple-400 rounded-full bg-neutral-900 border border-neutral-800/80 hover:bg-neutral-800/40 transition-all cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800/80 hover:bg-neutral-800/40 transition-all cursor-pointer"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Viewer Panel */}
          <div className="lg:col-span-8 glass-panel rounded-2xl overflow-hidden border border-neutral-800/80 flex flex-col justify-between shadow-2xl bg-neutral-950">
            {/* Responsive PDF IFrame container */}
            <div className="w-full h-[450px] sm:h-[500px] lg:h-[600px] overflow-auto">
              <iframe
                src={iframeSrc}
                className="w-full h-full border-none"
                title="Chaitanya Nagpure Resume PDF"
                allow="autoplay"
              />
            </div>

            {/* Mobile Fallback helper note */}
            <div className="flex md:hidden items-center justify-between px-4 py-3 bg-neutral-900/60 border-t border-neutral-800/85 text-[10px] sm:text-xs">
              <span className="text-neutral-400 font-light truncate pr-2">Having trouble reading on mobile?</span>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-bold shrink-0 inline-flex items-center gap-1"
              >
                <span>Open Full-Screen</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
