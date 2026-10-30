/**
 * Faraz Khan - Personal Portfolio Configuration
 *
 * Edit this central file to update personal details, bio, links,
 * skills, projects, and contact information without touching component code.
 */

export const personalInfo = {
  name: "Faraz Khan",
  shortName: "Faraz",
  monogram: "FK",
  role: "AI & Data Science Student",
  education: "Engineering Student (AI & Data Science)",
  tagline: "AI & Data Science Student | Creative Web Developer",
  statusLabel: "Exploring • Learning • Building",

  aboutShort:
    "I turn ideas into engaging digital experiences through web development, thoughtful design, and a curiosity for emerging technology.",

  aboutFull:
    "I'm an engineering student specializing in AI & Data Science, interested in how technology, design, and creativity come together. I enjoy building websites, experimenting with modern frontend tools, and turning ideas into useful digital experiences. I'm continuously learning and developing projects that help me improve as a developer and designer.",

  // Editable contact & social placeholders
  email: "farazkhanrules24@gmail.com", // Replace with your real contact email
  socials: {
    github: "https://github.com/farazkhanrules24-stack", // Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/farazkhan-dev", // Replace with your LinkedIn profile
    twitter: "", // Optional: "https://twitter.com/yourhandle"
  },

  location: "Engineering Campus",
  availability: "Exploring opportunities & creative collaborations",
};

export const interests = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: "Code2",
    description: "Crafting clean, responsive, and interactive frontend experiences using modern frameworks and standard-based code.",
    focus: ["Next.js & React", "Semantic HTML & Modern CSS", "Tailwind CSS Architecture"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: "Layout",
    description: "Designing intuitive interfaces, thoughtful component hierarchies, clean typography, and delightful micro-interactions.",
    focus: ["Design Systems", "User Journeys & Wireframing", "Responsive Interaction"]
  },
  {
    id: "ai-ds",
    title: "AI & Data Science",
    icon: "Cpu",
    description: "Studying intelligent algorithms, machine learning fundamentals, and how data-driven models power modern web applications.",
    focus: ["Python & Data Analysis", "ML Fundamentals", "AI-Enhanced Interfaces"]
  }
];

export const journeyTimeline = [
  {
    stage: "Foundational Engineering",
    badge: "Academic Foundation",
    title: "Learning basic Fundamentals",
    description: "Constructing component-driven interfaces, optimizing performance, and building clean web applications."
  },
  {
    stage: "Frontend Exploration",
    badge: "Core Web",
    title: "Frontend Development",
    description: "Building responsive, accessible web layouts, deep-diving into modern CSS, Flexbox, Grid, and design fundamentals.",
  },
  {
    stage: "Component Systems & Frameworks",
    badge: "Modern Webs",
    title: "Web Development",
    description: "Blending thoughtful design aesthetics with interactive web technologies to build memorable personal projects.",
  },
  {
    stage: "Creative Digital Experiences",
    badge: "Interactive & Creative",
    title: "AI & Data Science",
    description: "Diving deep into computational thinking, algorithms, mathematics, and data science principles.",
  }
];

export const skills = [
  {
    name: "HTML",
    icon: "FileCode2",
    stage: "Core Foundation",
    status: "Building Projects",
    category: "Structure & Semantics",
    description: "Writing semantic, accessible, and standards-compliant document structures that form the bedrock of robust web applications.",
    highlights: ["Semantic Elements", "WCAG Accessibility", "SEO-Friendly Markup"]
  },
  {
    name: "CSS",
    icon: "Palette",
    stage: "Styling & Motion",
    status: "Building Projects",
    category: "Presentation & Layout",
    description: "Crafting fluid responsive layouts, CSS Grid/Flexbox architectures, custom variables, smooth transitions, and keyframe animations.",
    highlights: ["Modern Grid & Flexbox", "CSS Custom Properties", "Keyframe & Micro-interactions"]
  },
  {
    name: "Tailwind CSS",
    icon: "Wind",
    stage: "Rapid UI System",
    status: "Building Projects",
    category: "Utility Framework",
    description: "Architecting bespoke design systems with utility classes, theme customization, responsive breakpoints, and dark mode theming.",
    highlights: ["Design System Tokens", "Responsive Modifiers", "Dynamic Dark/Light Themes"]
  },
  {
    name: "Next.js",
    icon: "Boxes",
    stage: "Modern Framework",
    status: "Practicing & Building",
    category: "Full-Stack React",
    description: "Building fast, SEO-friendly applications with App Router, Server Components, client interactivity, and optimized routing.",
    highlights: ["App Router Architecture", "Server & Client Components", "Route Handlers & Optimization"]
  },
  {
    name: "UI/UX Design",
    icon: "Figma",
    stage: "Creative Direction",
    status: "Practicing & Refining",
    category: "Experience Design",
    description: "Developing user-focused interfaces with clear visual hierarchy, intentional whitespace, color contrast, and intuitive navigation.",
    highlights: ["Visual Hierarchy", "Component Architecture", "Design Consistency"]
  }
];

export const projects = [
  {
    id: "sweetdelight",
    title: "SweetDelight — Cake Bakery Website",
    subtitle: "Aesthetic Confectionery & Ordering Web Experience",
    shortDescription: "An aesthetic cake bakery website designed to showcase cakes, highlight custom orders, and deliver a warm, elegant browsing experience.",
    fullDescription: "A warm and inviting digital storefront built with an elegant brown and bisque theme. Developed to celebrate artisan cakes, highlight seasonal creations, and provide visitors with an effortless cake ordering and inquiry flow.",
    theme: {
      primary: "#8D6E63",
      accent: "#D7CCC8",
      surface: "#2D1B13",
      tagBg: "rgba(141, 110, 99, 0.2)",
      tagBorder: "rgba(215, 204, 200, 0.3)",
      badgeColor: "text-amber-300 bg-amber-950/40 border-amber-800/40"
    },
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    previewType: "bakery-showcase",
    // Configurable links: Replace "#" with your real URLs when deployed
    links: {
      liveDemo: "", // Set to your live URL or leave empty to show 'Demo Ready' / 'Configurable'
      sourceCode: "", // Set to your repository URL e.g. "https://github.com/..."
    },
    features: [
      "Warm artisanal brown and bisque color palette",
      "Interactive cake showcase with visual flavors",
      "Custom cake order inquiry interface",
      "Curated bakery photo gallery with responsive grid",
      "Mobile-optimized dessert browsing navigation"
    ]
  },
  {
    id: "amazon-prime-inspired",
    title: "Amazon Prime-Inspired Website",
    subtitle: "Cinematic Streaming Platform Frontend Concept",
    shortDescription: "A streaming-platform-inspired frontend concept focused on cinematic visuals, content discovery, responsive navigation, and a modern browsing experience.",
    fullDescription: "A sleek frontend learning project exploring high-density entertainment interfaces. Built with a dark cinematic aesthetic, featuring hero spotlight carousels, responsive media category rows, and smooth navigational patterns.",
    disclaimer: "Personal learning project created for educational & frontend practice. Not an official Amazon product.",
    theme: {
      primary: "#00A8E1",
      accent: "#38BDF8",
      surface: "#0F172A",
      tagBg: "rgba(0, 168, 225, 0.15)",
      tagBorder: "rgba(56, 189, 248, 0.3)",
      badgeColor: "text-cyan-300 bg-cyan-950/40 border-cyan-800/40"
    },
    technologies: ["HTML", "Tailwind CSS"],
    previewType: "streaming-showcase",
    // Configurable links: Replace "#" with your real URLs when deployed
    links: {
      liveDemo: "", // Set to your live URL or leave empty
      sourceCode: "", // Set to your repository URL e.g. "https://github.com/..."
    },
    features: [
      "Dark cinematic theater mode styling",
      "Spotlight hero banner with video metadata cards",
      "Horizontal content discovery rows with hover zoom",
      "Responsive navigation bar with search trigger",
      "Lightweight utility-first Tailwind implementation"
    ]
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
