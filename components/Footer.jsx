"use client";

import { ArrowUp } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { personalInfo, navigationLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md pt-16 pb-12 overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand & Monogram (Phase 10: FK monogram, Faraz Khan, "Designed with curiosity. Built with code.") */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-sm font-black font-mono tracking-tight text-blue-600 dark:text-cyan-300">
                    {personalInfo.monogram}
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Designed with curiosity. Built with code. An engineering student exploring the intersection of modern frontend tools, design systems, and artificial intelligence.
            </p>

            <div className="pt-2">
              <SocialLinks iconSize="w-4 h-4" />
            </div>
          </div>

          {/* Quick Navigation Shortcuts */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-4 font-semibold">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Summary & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-4 font-semibold">
              Direct Contact
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Inquiries & Conversations:
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-medium text-blue-600 dark:text-cyan-400 hover:underline transition-colors block break-all"
            >
              {personalInfo.email}
            </a>
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-850"
                aria-label="Scroll back to the top of Faraz Khan's portfolio page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js, Tailwind CSS & Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
