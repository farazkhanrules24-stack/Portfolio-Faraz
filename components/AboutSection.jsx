"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, GraduationCap, Layout, Sparkles, Terminal } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { personalInfo, interests, journeyTimeline } from "@/data/portfolio";

export default function AboutSection() {
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About Faraz Khan"
      className="py-24 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 ambient-glow-blue pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            A Little About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.aboutFull}
          </p>
        </ScrollReveal>

        {/* Profile Card & Core Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Identity / Avatar Profile Card */}
          <ScrollReveal
            delay={0.1}
            className="lg:col-span-4 rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-lg dark:shadow-none"
          >
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-black font-mono tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                      {personalInfo.monogram}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-cyan-400">{personalInfo.role}</p>
                </div>
              </div>

              {/* Quick Details Badges */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-sm">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{personalInfo.education}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Focus: Frontend, UI/UX & AI</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-cyan-400 hover:text-blue-500 dark:hover:text-cyan-300 transition-colors"
              >
                <span>Jump to selected projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Three Core Interest Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={0.15 + index * 0.1}
                className="rounded-3xl p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-md dark:shadow-none"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {getInterestIcon(item.icon)}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {item.focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Personal Learning Journey Timeline */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Learning Journey</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The iterative path of exploring concepts, mastering tools, and building practical projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyTimeline.map((step, index) => (
              <div
                key={step.stage}
                className="relative rounded-2xl p-5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm dark:shadow-none"
              >
                {/* Stage number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800/40">
                    Stage 0{index + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {step.badge}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
