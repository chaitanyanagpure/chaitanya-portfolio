"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TECH_SYMBOLS = [
  "θ", "W", "b", "∇", "σ", "f(x)", "∑", "ReLU", "loss", "CNN", "RNN", "LLM", 
  "01", "[]", "{}", "y = wx+b", "dx/dt"
];

interface Particle {
  id: number;
  symbol: string;
  x: number; // percentage left
  y: number; // percentage top
  scale: number;
  duration: number;
  delay: number;
}

export default function VisualBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate deterministic values on mount to avoid Next.js hydration mismatch
    // Optimize performance on mobile viewports by reducing particle count
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = isMobile ? 6 : 18;

    const items = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      symbol: TECH_SYMBOLS[i % TECH_SYMBOLS.length],
      x: Math.random() * 90 + 5, // 5% to 95%
      y: Math.random() * 90 + 5, // 5% to 95%
      scale: Math.random() * 0.4 + 0.6, // 0.6 to 1.0
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * -20, // negative delay so they start scattered in progress
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
      {/* 1. Large slow-moving organic glow blobs - hidden on mobile to avoid GPU compositing freeze */}
      <div className="hidden md:block absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[130px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="hidden md:block absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[140px] mix-blend-screen animate-float pointer-events-none" />
      <div className="hidden md:block absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
      
      {/* 2. Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 3. Subtle radial background mesh lights */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(at_10%_20%,rgba(120,119,198,0.05)_0px,transparent_50%),radial-gradient(at_90%_50%,rgba(59,130,246,0.03)_0px,transparent_50%)] pointer-events-none" />

      {/* 4. Drifting Floating ML/Math Symbols */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-mono text-[10px] md:text-xs text-neutral-800 font-bold opacity-30 select-none pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            scale: p.scale,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 20, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
}
