import "@/app/globals.css";
import { personalInfo } from "@/data/portfolio";

export const metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
  title: {
    default: `${personalInfo.name} | ${personalInfo.role}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.name} is an engineering student specializing in AI & Data Science, passionate about modern web development, responsive design, and creative interactive experiences.`,
  keywords: [
    "Faraz Khan",
    "AI & Data Science Student",
    "Creative Web Developer",
    "Frontend Developer Portfolio",
    "Next.js Portfolio",
    "Tailwind CSS",
    "UI/UX Design",
    "Engineering Student",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    ...(process.env.NEXT_PUBLIC_SITE_URL ? { url: process.env.NEXT_PUBLIC_SITE_URL } : {}),
    title: `${personalInfo.name} | ${personalInfo.tagline}`,
    description: personalInfo.aboutShort,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.tagline}`,
    description: personalInfo.aboutShort,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Anti-flash theme script: runs synchronously before body render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('faraz-portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200 dark:selection:text-cyan-200 min-h-screen relative bg-[#050816] text-[#F8FAFC] dark:bg-[#050816] dark:text-[#F8FAFC]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow-xl ring-2 ring-cyan-400"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
