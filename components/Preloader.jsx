"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Respect user's reduced motion preference immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    // Fast, elegant entrance that does not delay user access with artificial waiting
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="fk-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white select-none pointer-events-none"
          aria-hidden="true"
        >
          {/* Ambient Lighting Glow */}
          <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl" />

          {/* Central FK Monogram & Pulsing Energy Ring */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Spinning gradient ring */}
            <div className="w-24 h-24 rounded-full border border-cyan-500/40 border-t-cyan-300 animate-spin" />

            {/* Glowing Monogram Card */}
            <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-[#050816] border border-cyan-400/50 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              <span className="text-xl font-black font-mono tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                {personalInfo.monogram}
              </span>
            </div>
          </motion.div>

          {/* Clean Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            className="mt-6 text-center"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 font-semibold">
              {personalInfo.name}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
