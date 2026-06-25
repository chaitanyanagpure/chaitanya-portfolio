"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
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

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-12 relative bg-neutral-950/40">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            Get in Touch
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build the Future with AI
          </h3>
          <p className="text-neutral-400 text-xs max-w-lg mx-auto mt-4 font-light leading-relaxed">
            Interested in AI collaborations, research opportunities, engineering roles, or innovative AI solutions? Let&apos;s connect.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-panel rounded-2xl p-6 md:p-8 shadow-md">
            
            {/* Context */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white tracking-tight">Contact Information</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Fill out the form or reach out through social channels. I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Coordinates */}
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800/80 transition-all group"
              >
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Email Address</div>
                  <div className="text-xs font-semibold text-neutral-200">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800/80 transition-all group"
              >
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">LinkedIn Profile</div>
                  <div className="text-xs font-semibold text-neutral-200">Chaitanya Nagpure</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800/80 transition-all group"
              >
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">GitHub Code</div>
                  <div className="text-xs font-semibold text-neutral-200">github.com/chaitanyanagpure</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-3">
                <div className="p-2.5 bg-neutral-950 border border-neutral-900 rounded-lg text-purple-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Location</div>
                  <div className="text-xs font-semibold text-neutral-200">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Graphic stamp */}
            <div className="pt-6 border-t border-neutral-900 flex items-center space-x-2 text-[10px] font-mono text-neutral-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AVAILABLE FOR ROLES & CONTRACTS</span>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border border-neutral-800/80 bg-neutral-950">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full bg-neutral-900/60 border ${
                    errors.name ? "border-red-500" : "border-neutral-800"
                  } rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all`}
                />
                {errors.name && <p className="text-[10px] text-red-400 font-mono mt-0.5">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  className={`w-full bg-neutral-900/60 border ${
                    errors.email ? "border-red-500" : "border-neutral-800"
                  } rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all`}
                />
                {errors.email && <p className="text-[10px] text-red-400 font-mono mt-0.5">{errors.email}</p>}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label htmlFor="company" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  Company / Organization <span className="text-neutral-600">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="AI Lab Inc."
                  className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, team opportunity, or inquiry..."
                  className={`w-full bg-neutral-900/60 border ${
                    errors.message ? "border-red-500" : "border-neutral-800"
                  } rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none`}
                />
                {errors.message && <p className="text-[10px] text-red-400 font-mono mt-0.5">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all w-full disabled:opacity-60 shadow-[0_4px_20px_rgba(120,119,198,0.2)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Processing Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

              {/* Success/Error Alerts */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl">
                  <CheckCircle size={14} className="shrink-0" />
                  <span>Your message was sent successfully! I&apos;ll contact you shortly.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-xs text-red-400 bg-red-500/5 border border-red-500/10 p-3.5 rounded-xl">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>Failed to send. Please check your network and try again.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
