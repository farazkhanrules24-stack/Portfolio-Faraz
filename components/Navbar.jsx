"use client";

import { useEffect, useState } from "react";
import { Menu, Mail } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { personalInfo, navigationLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy for active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 shadow-lg shadow-black/5 dark:shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* FK Monogram / Wordmark */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
              aria-label="Faraz Khan Portfolio Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <div className="w-full h-full bg-slate-50 dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-sm font-black font-mono tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                    {personalInfo.monogram}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors leading-none">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-tight mt-1">
                  AI & Data Science
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md">
              {navigationLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? "text-blue-600 dark:text-cyan-300 font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-cyan-500/30 shadow-sm -z-10 animate-in fade-in zoom-in-95 duration-200" />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Theme Toggle & CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Mobile Controls (Theme Toggle + Hamburger Menu) */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <ThemeToggle />

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                type="button"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
