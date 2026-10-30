"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function SocialLinks({ className = "", iconSize = "w-5 h-5", showLabels = false }) {
  const links = [
    {
      name: "GitHub",
      href: personalInfo.socials.github,
      icon: Github,
      description: "View code repositories",
    },
    {
      name: "LinkedIn",
      href: personalInfo.socials.linkedin,
      icon: Linkedin,
      description: "Connect on LinkedIn",
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      description: "Send direct email",
    },
  ];

  if (personalInfo.socials.twitter) {
    links.push({
      name: "Twitter / X",
      href: personalInfo.socials.twitter,
      icon: Twitter,
      description: "Follow on Twitter",
    });
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((item) => {
        const Icon = item.icon;
        const isPlaceholder = !item.href || item.href === "#";

        return (
          <a
            key={item.name}
            href={isPlaceholder ? "#contact" : item.href}
            target={isPlaceholder ? undefined : "_blank"}
            rel={isPlaceholder ? undefined : "noopener noreferrer"}
            aria-label={`${item.name} profile (${item.description})`}
            className="group relative flex items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Icon className={`${iconSize} transition-transform duration-200 group-hover:scale-110`} />
            {showLabels && <span className="ml-2 text-sm font-medium">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
