"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-12 relative">
      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400 font-semibold mb-2">
            Technical Skills
            <span className="block h-[2px] w-8 bg-purple-500 mx-auto mt-2" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            My Tooling & Specialties
          </h3>
        </div>

        {/* Skill Card Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass-panel rounded-2xl p-6 shadow-md flex flex-col justify-between group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                borderColor: "rgba(168, 85, 247, 0.45)",
                boxShadow: "0 20px 30px -10px rgba(168, 85, 247, 0.15), 0 10px 15px -15px rgba(168, 85, 247, 0.15)"
              }}
              whileTap={{
                y: -8,
                scale: 1.03,
                borderColor: "rgba(168, 85, 247, 0.45)",
                boxShadow: "0 20px 30px -10px rgba(168, 85, 247, 0.15), 0 10px 15px -15px rgba(168, 85, 247, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <h4 className="text-sm font-bold font-mono text-neutral-400 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
                  {cat.category}
                </h4>
                                {/* Skills Pill List */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      className="text-xs font-medium text-neutral-200 px-3 py-1.5 rounded-lg bg-neutral-900/60 border border-neutral-800/80 select-none cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        borderColor: "rgba(168, 85, 247, 0.6)",
                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                        color: "#ffffff",
                        boxShadow: "0 8px 16px -6px rgba(168, 85, 247, 0.35)"
                      }}
                      whileTap={{
                        scale: 1.1,
                        y: -3,
                        borderColor: "rgba(168, 85, 247, 0.6)",
                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                        color: "#ffffff",
                        boxShadow: "0 8px 16px -6px rgba(168, 85, 247, 0.35)"
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 14 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
