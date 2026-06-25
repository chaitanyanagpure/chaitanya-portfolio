"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Server, ShieldCheck } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";

export default function About() {
  const pillars = [
    {
      icon: <Cpu className="text-purple-400" size={24} />,
      title: "Production AI",
      description: "Developing robust, real-world machine learning solutions and deep learning vision systems optimized for scale.",
    },
    {
      icon: <Server className="text-blue-400" size={24} />,
      title: "Scalable Systems",
      description: "Building APIs, databases, data engineering ETL workflows, and containerized deployments using modern software engineering.",
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      title: "Clean Architecture",
      description: "Writing highly maintainable, type-safe code bases designed to facilitate rapid expansion and clear testing metrics.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-12 relative bg-neutral-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            About Me
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Crafting Intelligent Solutions
          </h3>
        </div>

        {/* Narrative & Focus area cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Storytelling */}
          <motion.div
            className="md:col-span-7 flex flex-col justify-between glass-panel rounded-3xl p-8 md:p-10 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white tracking-tight">My Engineering Journey</h4>
              <p className="text-neutral-300 font-light leading-relaxed text-sm md:text-base">
                {personalInfo.summary}
              </p>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                I strongly believe in bridging the gap between theoretical machine learning models and production-ready applications. My focus lies in designing and building services that are robust, highly performant, and add tangible business value.
              </p>
            </div>
            
            <div className="pt-8 border-t border-neutral-800/60 mt-8 flex justify-between items-center text-xs font-mono text-neutral-500">
              <div>LOCATION: MAHARASHTRA, INDIA</div>
              <div>FOCUS: LLMS / MLOPs</div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Pillars */}
          <motion.div
            className="md:col-span-5 flex flex-col gap-6 justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 shadow-md hover:border-neutral-700/80 transition-all duration-300 flex items-start space-x-4 group"
              >
                <div className="p-3 bg-neutral-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider">{pillar.title}</h5>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
