"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Terminal, Sparkles } from "lucide-react";
import DeveloperScene from "@/components/DeveloperScene";
import SocialLinks from "@/components/SocialLinks";
import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  const words = "Hi, I'm Faraz Khan.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction & Hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-hero-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Introduction & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Status / Availability Pill (Eyebrow: EXPLORING • LEARNING • BUILDING) */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-cyan-500/30 bg-blue-50/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              <span className="text-xs sm:text-sm font-mono font-medium text-blue-700 dark:text-cyan-300 tracking-wide uppercase">
                {personalInfo.statusLabel}
              </span>
            </motion.div>

            {/* Main Headline: Word reveal animation ("Hi, I'm Faraz Khan.") */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
            >
              {words.map((word, index) => (
                <span key={index} className="inline-block mr-2.5 sm:mr-3.5">
                  {word === "Faraz" || word === "Khan." ? (
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Role ("AI & Data Science Student | Creative Web Developer") */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-2"
            >
              <Terminal className="w-5 h-5 text-blue-600 dark:text-cyan-400 inline shrink-0" />
              <span>{personalInfo.tagline}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {personalInfo.aboutShort}
            </motion.p>

            {/* Action Buttons: Explore My Work & Get In Touch */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-cyan-400/50 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Social Pills */}
            <motion.div
              variants={itemVariants}
              className="pt-3 border-t border-slate-200 dark:border-slate-800/80 w-full max-w-md"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Connect
                </span>
                <SocialLinks iconSize="w-4 h-4" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Developer Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="lg:col-span-5 w-full relative"
          >
            <DeveloperScene />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
