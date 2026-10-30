"use client";

import { useState, useRef } from "react";
import { ExternalLink, Github, Sparkles, ShieldAlert, CheckCircle2, Eye, X } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const isSweetDelight = project.id === "sweetdelight";
  const hasLiveDemo = project.links.liveDemo && project.links.liveDemo !== "#" && project.links.liveDemo.trim() !== "";
  const hasSourceCode = project.links.sourceCode && project.links.sourceCode !== "#" && project.links.sourceCode.trim() !== "";

  // Subtle 3D Card Tilt on pointer move (Phase 11 Requirement)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4; // limited to -4 to +4 deg
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out",
        }}
        className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 hover:border-blue-400 dark:hover:border-cyan-500/50 backdrop-blur-xl shadow-lg hover:shadow-2xl dark:shadow-none dark:hover:shadow-blue-500/10 flex flex-col justify-between transition-colors"
      >
        {/* Top Interactive Visual Showcase / Browser Window Mockup */}
        <div className="relative w-full overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-950">
          
          {/* Mock Browser Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="px-3 py-0.5 rounded-md bg-white dark:bg-slate-950/80 text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 max-w-[200px] truncate">
              {isSweetDelight ? "sweetdelight-bakery.local" : "cinematic-stream.local"}
            </div>

            <button
              onClick={() => setIsPreviewOpen(true)}
              type="button"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-600 dark:text-cyan-400 hover:underline"
              aria-label={`Open preview modal for ${project.title}`}
            >
              <Eye className="w-3 h-3" />
              <span>Inspect</span>
            </button>
          </div>

          {/* High-Fidelity Custom Illustrative UI Preview */}
          <div className="relative h-64 sm:h-72 w-full p-4 overflow-hidden transition-transform duration-500 group-hover:scale-[1.015]">
            
            {isSweetDelight ? (
              /* ================= SweetDelight Bakery Mockup ================= */
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2D1B13] via-[#3E2723] to-[#1E110A] p-4 text-[#F5EBE6] flex flex-col justify-between border border-[#8D6E63]/30 shadow-inner">
                {/* Bakery Navigation */}
                <div className="flex items-center justify-between border-b border-[#8D6E63]/30 pb-2">
                  <span className="font-serif text-sm font-bold tracking-wide text-[#E8D8CE]">
                    SweetDelight Patisserie
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8D6E63]/40 text-[#D7CCC8]">
                    Artisan Cakes
                  </span>
                </div>

                {/* Bakery Hero Banner */}
                <div className="my-auto py-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#BCAAA4]">
                    Handcrafted Daily
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#FFFFFF] mt-0.5 mb-1">
                    Artisan Cakes & Custom Confections
                  </h4>
                  <p className="text-[11px] text-[#D7CCC8]/90 max-w-sm">
                    Warm brown & bisque tones, seasonal cake showcases, and a custom cake order interface.
                  </p>
                </div>

                {/* Confectionery Showcase Cards */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#8D6E63]/30">
                  <div className="bg-[#4E342E]/70 rounded-xl p-2 border border-[#8D6E63]/40 text-center">
                    <div className="text-sm">🎂</div>
                    <div className="text-[10px] font-medium text-[#EFEBE9] mt-1">Velvet Cocoa</div>
                    <div className="text-[9px] text-[#BCAAA4]">Custom Order</div>
                  </div>
                  <div className="bg-[#4E342E]/70 rounded-xl p-2 border border-[#8D6E63]/40 text-center">
                    <div className="text-sm">🍰</div>
                    <div className="text-[10px] font-medium text-[#EFEBE9] mt-1">Vanilla Bisque</div>
                    <div className="text-[9px] text-[#BCAAA4]">Signature</div>
                  </div>
                  <div className="bg-[#4E342E]/70 rounded-xl p-2 border border-[#8D6E63]/40 text-center">
                    <div className="text-sm">🧁</div>
                    <div className="text-[10px] font-medium text-[#EFEBE9] mt-1">Berry Delight</div>
                    <div className="text-[9px] text-[#BCAAA4]">Fresh Daily</div>
                  </div>
                </div>
              </div>
            ) : (
              /* ================= Amazon Prime-Inspired Streaming Mockup ================= */
              <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#0F172A] via-[#090D16] to-[#050816] p-4 text-white flex flex-col justify-between border border-[#00A8E1]/30 shadow-inner">
                {/* Streaming Platform Navbar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-tight text-[#00A8E1]">
                      PRIME<span className="text-white">STREAM</span>
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      Cinematic UI
                    </span>
                  </div>
                  <div className="flex gap-2 text-[10px] text-slate-400">
                    <span className="text-white font-medium">Home</span>
                    <span>Movies</span>
                    <span>Series</span>
                  </div>
                </div>

                {/* Featured Cinematic Banner */}
                <div className="relative rounded-xl p-3 bg-gradient-to-r from-blue-950/90 via-slate-900/80 to-transparent border border-blue-500/20 my-auto">
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#00A8E1]/20 text-[#38BDF8] font-semibold">
                    SPOTLIGHT FEATURE
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                    Cosmic Frontiers: Odyssey
                  </h4>
                  <p className="text-[10px] text-slate-300 max-w-xs mt-0.5">
                    Dark cinematic visuals, content discovery rows, responsive navigation, and modern layout.
                  </p>
                </div>

                {/* Horizontal Category Cards */}
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  <div className="h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[10px] font-mono text-cyan-300">
                    Trending
                  </div>
                  <div className="h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[10px] font-mono text-blue-300">
                    Sci-Fi
                  </div>
                  <div className="h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[10px] font-mono text-indigo-300">
                    Series
                  </div>
                  <div className="h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-[10px] font-mono text-slate-400">
                    Top 10
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Project Metadata & Content */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 text-blue-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">{project.subtitle}</p>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Educational Disclaimer for Amazon Prime-Inspired Website */}
            {project.disclaimer && (
              <div className="mb-6 p-3 rounded-xl bg-amber-50 dark:bg-slate-950/70 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300/90 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{project.disclaimer}</span>
              </div>
            )}

            {/* Key Features Bullet List */}
            <div className="space-y-2 mb-6">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons: Live Demo & Source Code */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
            {/* Live Demo Button */}
            {hasLiveDemo ? (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/30 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                disabled
                title="Configurable: Add deployed URL in data/portfolio.js"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 cursor-not-allowed opacity-80"
              >
                <span>Live Demo</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  Coming Soon
                </span>
              </button>
            )}

            {/* Source Code Button */}
            {hasSourceCode ? (
              <a
                href={project.links.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            ) : (
              <button
                disabled
                title="Configurable: Add repository URL in data/portfolio.js"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 cursor-not-allowed opacity-80"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  Configurable
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Inspection / Preview Modal */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mt-0.5">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
                Key Highlights:
              </span>
              <ul className="space-y-2">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="px-5 py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
