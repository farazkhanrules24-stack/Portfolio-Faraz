"use client";

import { Sparkles } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A showcase of frontend web experiences and interface concepts built with modern web tools.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
