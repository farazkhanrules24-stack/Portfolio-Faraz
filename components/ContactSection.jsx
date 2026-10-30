"use client";

import { Mail, MapPin, MessageSquare, Terminal } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import SocialLinks from "@/components/SocialLinks";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Faraz Khan"
      className="py-24 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 ambient-glow-blue pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 ambient-glow-cyan pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-cyan-500/30 bg-blue-50 dark:bg-cyan-950/20 text-blue-700 dark:text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have an idea, a project, or an opportunity to discuss? I'd love to hear from you.
          </p>
        </ScrollReveal>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Direct Info & Social Channels */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-xl relative overflow-hidden shadow-lg dark:shadow-none">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Get in Touch
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am continuously experimenting with frontend development and AI engineering. Whether you want to discuss a project, collaborate, or share ideas, feel free to send a message.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                {/* Email item */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Campus / Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Location</span>
                    <span className="text-sm text-slate-800 dark:text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Current Focus</span>
                    <span className="text-sm text-slate-800 dark:text-slate-200">{personalInfo.availability}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3 font-semibold">
                  Online Profiles
                </span>
                <SocialLinks iconSize="w-4 h-4" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <ContactForm />
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
