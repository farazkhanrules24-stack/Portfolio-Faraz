"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Code2, Sparkles, Terminal, FileCode, CheckCircle2, ChevronRight, X } from "lucide-react";

export default function DeveloperScene() {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // 1. WebGL Feature Detection
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    // 2. Reduced Motion Check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setHasWebGL(false);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    let width = currentMount.clientWidth || 500;
    let height = currentMount.clientHeight || 500;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050816, 0.02);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.1, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1633, 2.8);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 4.5, 18);
    blueLight.position.set(-3.5, 3, 2.5);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 5.5, 18);
    cyanLight.position.set(3.5, 2.2, 3.2);
    scene.add(cyanLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    rimLight.position.set(0, 4.5, -3.5);
    scene.add(rimLight);

    // Workspace Root Group for Parallax
    const workspaceGroup = new THREE.Group();
    scene.add(workspaceGroup);

    // 1. Digital Platform / Illuminated Base
    const platformGeo = new THREE.CylinderGeometry(2.3, 2.5, 0.18, 36);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x0a1024,
      roughness: 0.25,
      metalness: 0.85,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -1.25;
    workspaceGroup.add(platform);

    // Inner glowing ring on platform
    const ringGeo = new THREE.RingGeometry(1.65, 1.9, 36);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
    });
    const glowingRing = new THREE.Mesh(ringGeo, ringMat);
    glowingRing.rotation.x = -Math.PI / 2;
    glowingRing.position.y = -1.15;
    workspaceGroup.add(glowingRing);

    // Outer subtle ring
    const outerRingGeo = new THREE.RingGeometry(2.05, 2.15, 36);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const outerGlowingRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerGlowingRing.rotation.x = -Math.PI / 2;
    outerGlowingRing.position.y = -1.15;
    workspaceGroup.add(outerGlowingRing);

    // 2. Stylized Developer Avatar
    const avatarGroup = new THREE.Group();
    avatarGroup.position.set(0, -0.22, 0);
    workspaceGroup.add(avatarGroup);

    // Torso / Developer Hoodie
    const torsoGeo = new THREE.CylinderGeometry(0.48, 0.6, 1.15, 20);
    const hoodieMat = new THREE.MeshStandardMaterial({
      color: 0x101b35,
      roughness: 0.4,
      metalness: 0.3,
    });
    const torso = new THREE.Mesh(torsoGeo, hoodieMat);
    torso.position.y = 0;
    avatarGroup.add(torso);

    // Stylized Head
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.98, 0);
    avatarGroup.add(headGroup);

    const headGeo = new THREE.BoxGeometry(0.56, 0.6, 0.56);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.25,
      metalness: 0.7,
    });
    const head = new THREE.Mesh(headGeo, headMat);
    headGroup.add(head);

    // Cyan glowing visor (symbolizing AI & futuristic vision)
    const visorGeo = new THREE.BoxGeometry(0.48, 0.17, 0.14);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.4,
      roughness: 0.1,
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.06, 0.26);
    headGroup.add(visor);

    // 3. Floating Holographic Laptop / Workstation
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, -0.15, 0.68);
    laptopGroup.rotation.x = 0.22;
    avatarGroup.add(laptopGroup);

    const baseGeo = new THREE.BoxGeometry(0.88, 0.045, 0.62);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.2,
    });
    const laptopBase = new THREE.Mesh(baseGeo, baseMat);
    laptopGroup.add(laptopBase);

    // Laptop Screen
    const screenGeo = new THREE.BoxGeometry(0.88, 0.58, 0.035);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0a1024,
      metalness: 0.9,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.32, -0.29);
    screen.rotation.x = -0.32;
    laptopGroup.add(screen);

    // Glowing screen display
    const displayGeo = new THREE.PlaneGeometry(0.8, 0.49);
    const displayMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.9,
    });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.set(0, 0.325, -0.27);
    display.rotation.x = -0.32;
    laptopGroup.add(display);

    // 4. Floating Orbiting Tech Panels in 3D Space
    const panels = [];
    const panelConfigs = [
      { color: 0x3b82f6, size: [0.48, 0.34, 0.03], pos: [-1.45, 0.75, 0.4], rot: [0, 0.4, 0] },
      { color: 0x22d3ee, size: [0.44, 0.3, 0.03], pos: [1.45, 0.65, 0.3], rot: [0, -0.35, 0] },
      { color: 0x60a5fa, size: [0.38, 0.26, 0.03], pos: [1.25, -0.35, 0.8], rot: [-0.1, -0.5, 0] },
      { color: 0x38bdf8, size: [0.4, 0.28, 0.03], pos: [-1.35, -0.28, 0.75], rot: [0.1, 0.45, 0] },
    ];

    panelConfigs.forEach((cfg) => {
      const pGeo = new THREE.BoxGeometry(...cfg.size);
      const pMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.45,
        roughness: 0.2,
        metalness: 0.6,
        transparent: true,
        opacity: 0.8,
      });
      const panel = new THREE.Mesh(pGeo, pMat);
      panel.position.set(...cfg.pos);
      panel.rotation.set(...cfg.rot);
      panel.userData = { initialY: cfg.pos[1], speed: 1.6 + Math.random() };
      workspaceGroup.add(panel);
      panels.push(panel);
    });

    // 5. Ambient Orbiting Particle Constellation
    const particleCount = 260;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x3b82f6);
    const c2 = new THREE.Color(0x22d3ee);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 7.5;
      positions[i + 1] = (Math.random() - 0.5) * 5.2 + 0.4;
      positions[i + 2] = (Math.random() - 0.5) * 6.5;

      const mixedColor = Math.random() > 0.5 ? c1 : c2;
      particleColors[i] = mixedColor.r;
      particleColors[i + 1] = mixedColor.g;
      particleColors[i + 2] = mixedColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking / Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.32;
      targetRotationX = -y * 0.18;

      // Subtle avatar head tracking
      headGroup.rotation.y = x * 0.4;
      headGroup.rotation.x = -y * 0.22;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!currentMount) return;
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/workspace parallax interpolation (lerp)
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      workspaceGroup.rotation.y = currentRotationY;
      workspaceGroup.rotation.x = currentRotationX;

      // Gentle floating animation on avatar
      avatarGroup.position.y = -0.22 + Math.sin(elapsedTime * 1.5) * 0.035;

      // Floating tech panels
      panels.forEach((p, idx) => {
        p.position.y = p.userData.initialY + Math.sin(elapsedTime * p.userData.speed + idx) * 0.06;
        p.rotation.y += 0.003;
      });

      // Slowly rotating glowing rings & particles
      glowingRing.rotation.z += 0.006;
      outerGlowingRing.rotation.z -= 0.004;
      particles.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      renderer.dispose();
      platformGeo.dispose();
      platformMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      torsoGeo.dispose();
      hoodieMat.dispose();
      headGeo.dispose();
      headMat.dispose();
      visorGeo.dispose();
      visorMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      displayGeo.dispose();
      displayMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      panels.forEach((p) => {
        p.geometry.dispose();
        p.material.dispose();
      });
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[560px] lg:h-[600px] flex items-center justify-center select-none overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-gradient-to-b dark:from-[#0a1024]/90 dark:via-[#050816]/95 dark:to-[#050816] shadow-xl dark:shadow-2xl backdrop-blur-xl transition-colors">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern dark:opacity-35 opacity-25 pointer-events-none" />

      {/* WebGL Canvas or High-Fidelity CSS 3D Fallback */}
      {hasWebGL ? (
        <div ref={mountRef} className="w-full h-full relative cursor-grab active:cursor-grabbing" />
      ) : (
        /* Accessible High-Fidelity CSS 3D Fallback */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-cyan-500/40 animate-ping opacity-25" />
            <div className="absolute inset-2 rounded-full border border-blue-500/30 animate-pulse" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 backdrop-blur-md border border-slate-700/60 shadow-xl" />

            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-cyan-400/50 shadow-lg flex items-center justify-center">
                <div className="w-10 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
              </div>
              <div className="w-24 h-12 mt-2 rounded-t-3xl bg-slate-800 border-t border-slate-700 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-wider">
            [ Faraz Khan • 3D Developer Workspace ]
          </p>
        </div>
      )}

      {/* Top Floating Mini Code Editor Panel (Phase 5 Requirement) */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-auto max-w-[240px] sm:max-w-[270px]">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <FileCode className="w-3 h-3 text-cyan-500" />
              <span>Workspace.jsx</span>
            </div>
          </div>
          <div className="p-2.5 font-mono text-[11px] leading-relaxed select-text">
            <div className="text-slate-400 dark:text-slate-500">// AI & Frontend Student</div>
            <div>
              <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
              <span className="text-blue-600 dark:text-blue-300">dev</span> = &#123;
            </div>
            <div className="pl-3 text-slate-600 dark:text-slate-300">
              name: <span className="text-emerald-600 dark:text-emerald-400">&quot;Faraz&quot;</span>,
            </div>
            <div className="pl-3 text-slate-600 dark:text-slate-300">
              focus: <span className="text-cyan-600 dark:text-cyan-300">&quot;Creative Web&quot;</span>,
            </div>
            <div className="pl-3 text-slate-600 dark:text-slate-300">
              building: <span className="text-amber-600 dark:text-amber-400">true</span>
            </div>
            <div>&#125;;</div>
          </div>
        </div>
      </div>

      {/* Floating Technology Labels: HTML, CSS, Tailwind CSS, Next.js (Phase 5 Requirement) */}
      <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
        
        {/* Top Right: Next.js & Tailwind CSS Badges */}
        <div className="flex justify-end items-start gap-2 pt-1">
          <button
            type="button"
            onClick={() => setActiveCard(activeCard === "nextjs" ? null : "nextjs")}
            className="pointer-events-auto transform hover:scale-105 active:scale-95 transition-all duration-200 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 backdrop-blur-md shadow-md text-xs font-mono text-slate-800 dark:text-blue-200 hover:border-blue-400 flex items-center gap-2"
            aria-label="View Next.js technology info"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-semibold">Next.js</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCard(activeCard === "tailwind" ? null : "tailwind")}
            className="pointer-events-auto transform hover:scale-105 active:scale-95 transition-all duration-200 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-500/30 backdrop-blur-md shadow-md text-xs font-mono text-slate-800 dark:text-cyan-200 hover:border-cyan-400 flex items-center gap-2"
            aria-label="View Tailwind CSS technology info"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span className="font-semibold">Tailwind CSS</span>
          </button>
        </div>

        {/* Bottom Bar: HTML & CSS Badges */}
        <div className="flex justify-between items-end gap-2 pb-6">
          <button
            type="button"
            onClick={() => setActiveCard(activeCard === "html" ? null : "html")}
            className="pointer-events-auto transform hover:scale-105 active:scale-95 transition-all duration-200 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 backdrop-blur-md shadow-md text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-amber-400 flex items-center gap-2"
            aria-label="View HTML technology info"
          >
            <Code2 className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-semibold">HTML</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveCard(activeCard === "css" ? null : "css")}
            className="pointer-events-auto transform hover:scale-105 active:scale-95 transition-all duration-200 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 backdrop-blur-md shadow-md text-xs font-mono text-slate-800 dark:text-slate-200 hover:border-blue-400 flex items-center gap-2"
            aria-label="View CSS technology info"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="font-semibold">CSS</span>
          </button>
        </div>
      </div>

      {/* Floating Interactive Micro-Card / Modal */}
      {activeCard && (
        <div className="absolute bottom-14 inset-x-4 sm:inset-x-8 z-30 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-cyan-500/40 backdrop-blur-2xl shadow-2xl text-left transition-all animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs uppercase font-mono tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
              Technology Focus: {activeCard.toUpperCase()}
            </span>
            <button
              onClick={() => setActiveCard(null)}
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close tech info"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeCard === "nextjs" &&
              "Developing responsive, fast applications with Next.js App Router, Server Components, and optimized client interactivity."}
            {activeCard === "tailwind" &&
              "Architecting bespoke design tokens, fluid layouts, dark/light themes, and custom styling with utility classes."}
            {activeCard === "html" &&
              "Writing semantic, accessible, and standards-compliant document structures that power inclusive user experiences."}
            {activeCard === "css" &&
              "Crafting responsive CSS Grid and Flexbox layouts, modern CSS variables, fluid animations, and custom 3D depth effects."}
          </p>
        </div>
      )}

      {/* Subtle interaction tip */}
      <div className="absolute bottom-2 text-center pointer-events-none">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-wide">
          ✦ Interactive 3D Spatial Canvas • Move Pointer to Orbit
        </span>
      </div>
    </div>
  );
}
