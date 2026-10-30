"use client";

import { motion } from "framer-motion";
import { Boxes, Code2, FileCode2, Layers, Palette, Wind } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case "FileCode2":
        return <FileCode2 className="w-7 h-7 text-orange-500" />;
      case "Palette":
        return <Palette className="w-7 h-7 text-blue-500" />;
      case "Wind":
        return <Wind className="w-7 h-7 text-cyan-500" />;
      case "Boxes":
        return <Boxes className="w-7 h-7 text-indigo-500" />;
      case "Figma":
      default:
        return <Layers className="w-7 h-7 text-pink-500" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills & Toolkit"
      className="py-24 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 ambient-glow-blue pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-cyan-500/30 bg-blue-50 dark:bg-cyan-950/20 text-blue-700 dark:text-cyan-300 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Technologies & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Skills & Toolkit
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Core technologies and design methodologies I leverage to architect responsive, user-friendly digital experiences.
          </p>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={skill.name}
              delay={index * 0.1}
              className="group relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-blue-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/60">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Explanation */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Qualitative Status & Animated Progression Bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-slate-500 dark:text-slate-400">Current Stage:</span>
                  <span className="text-blue-600 dark:text-cyan-300 font-semibold">{skill.status}</span>
                </div>

                {/* Qualitative Visual Indicator Bar */}
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden p-[1px] border border-slate-300 dark:border-slate-700/40">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400"
                  />
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                  {skill.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
