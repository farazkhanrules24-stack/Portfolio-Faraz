import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function Home() {
  return (
    <>
      {/* Animated Monogram Preloader */}
      <Preloader />

      {/* Low-Density Animated Ambient Background Particles (Phase 11) */}
      <BackgroundParticles />

      {/* Accessible Desktop Ambient Cursor Ring */}
      <CustomCursor />

      {/* Sticky Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Refined Footer */}
      <Footer />

      {/* Smooth Scroll Back-to-Top Button */}
      <BackToTop />
    </>
  );
}
