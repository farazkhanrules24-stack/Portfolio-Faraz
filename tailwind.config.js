/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#050816",
          secondary: "#0A1024",
          elevated: "#101B35",
          blue: "#3B82F6",
          cyan: "#22D3EE",
          text: "#F8FAFC",
          muted: "#94A3B8",
          border: "rgba(148, 163, 184, 0.15)",
          borderHover: "rgba(59, 130, 246, 0.4)",
          glow: "rgba(34, 211, 238, 0.25)",
        },
        light: {
          bg: "#F8FAFC",
          secondary: "#F1F5F9",
          elevated: "#FFFFFF",
          text: "#0F172A",
          muted: "#475569",
          border: "rgba(148, 163, 184, 0.25)",
          borderHover: "rgba(59, 130, 246, 0.5)",
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "'Fira Code'",
          "Consolas",
          "Monaco",
          "'Courier New'",
          "monospace"
        ]
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'beam': 'beam 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.6))' },
        },
        beam: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
        'grid-pattern-light': 'linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
