"use client";

import { useEffect } from "react";
import { X, ArrowRight, Mail } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import SocialLinks from "@/components/SocialLinks";
import { personalInfo, navigationLinks } from "@/data/portfolio";

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl transition-all duration-300 animate-in fade-in"
    >
      {/* Top Header inside mobile menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
            <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="text-sm font-bold font-mono text-blue-600 dark:text-cyan-300">
                {personalInfo.monogram}
              </span>
            </div>
          </div>
          <span className="text-base font-bold text-slate-900 dark:text-white">{personalInfo.name}</span>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onClose}
            type="button"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close mobile navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-6 py-8 overflow-y-auto">
        <ul className="space-y-4">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between text-lg font-medium p-3.5 rounded-2xl transition-all ${
                    isActive
                      ? "bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-cyan-500/40 text-blue-600 dark:text-cyan-300 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/30 text-center"
          >
            <Mail className="w-4 h-4" />
            <span>Let's Connect</span>
          </a>
        </div>
      </nav>

      {/* Footer Info inside mobile menu */}
      <div className="px-6 py-6 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/60">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3 font-semibold">
          Connect Online
        </span>
        <SocialLinks iconSize="w-5 h-5" />
      </div>
    </div>
  );
}
