import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, CheckCircle2, ChevronRight, Layers } from "lucide-react";

// Precision SVG Gear Component with Blueprint Aesthetics for Light Mode
function Gear({ size = 120, teeth = 12, speed = 20, reverse = false, color = "#0284c7", glowColor = "rgba(2,132,199,0.3)", opacity = 0.25, className = "" }) {
  const teethArray = Array.from({ length: teeth });
  const stepAngle = 360 / teeth;

  return (
    <motion.div
      className={`inline-block pointer-events-none select-none ${className}`}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}>
        {teethArray.map((_, i) => (
          <rect
            key={i}
            x="43"
            y="2"
            width="14"
            height="16"
            rx="3"
            fill={color}
            opacity={opacity}
            transform={`rotate(${i * stepAngle}, 50, 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="4" opacity={opacity} />
        <circle cx="50" cy="50" r="24" fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="5 3" opacity={opacity * 0.9} />
        {[0, 60, 120].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="15"
            x2="50"
            y2="85"
            stroke={color}
            strokeWidth="3"
            opacity={opacity * 0.85}
            transform={`rotate(${angle}, 50, 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="14" fill="#ffffff" stroke={color} strokeWidth="3.5" opacity={opacity} />
        <circle cx="50" cy="50" r="5" fill={color} opacity={opacity} />
      </svg>
    </motion.div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "01",
      title: "Trip To Corbett",
      subtitle: "Wildlife & Resort Booking Platform",
      category: "Tourism & E-Commerce",
      description: "Comprehensive travel and safari booking platform for Jim Corbett National Park. Features custom tour package creation, resort availability engine, and interactive safari zone booking guidance.",
      link: "https://triptocorbett.com/",
      image: "/projects/triptocorbett.png",
      tech: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
      accentColor: "#059669",
      glowColor: "rgba(5, 150, 105, 0.2)",
      features: [
        "Interactive Jim Corbett safari & resort reservation system",
        "Curated tour package filtering & custom itinerary planning",
        "Responsive, mobile-optimized UI with instant booking inquiry",
      ],
    },
    {
      id: "02",
      title: "Book Uttarakhand",
      subtitle: "Travel Booking Platform",
      category: "Tourism Platform",
      description: "Responsive tourism platform showcasing destinations across Uttarakhand. Built with component architecture, smooth Framer Motion transitions, and multi-destination booking exploration.",
      link: "https://book-uttarakhand.vercel.app/",
      image: "/projects/book-uttarakhand.png",
      tech: ["React", "JavaScript", "REST APIs", "Framer Motion"],
      accentColor: "#0284c7",
      glowColor: "rgba(2, 132, 199, 0.2)",
      features: [
        "Exploration engine for hill stations & pilgrimage destinations",
        "Dynamic hotel & package gallery showcase",
        "Fluid motion animations and optimized load performance",
      ],
    },
    {
      id: "03",
      title: "Corbett Bakers",
      subtitle: "Ecommerce Bakery App",
      category: "E-Commerce",
      description: "High-performance ecommerce application with optimized UI, JWT-secured admin dashboard, dynamic product catalog, and WhatsApp-based checkout workflow for seamless orders.",
      link: "https://corbett-bakers.vercel.app/",
      image: "/projects/corbett-bakers.png",
      tech: ["React", "JavaScript", "REST APIs", "JWT"],
      accentColor: "#d97706",
      glowColor: "rgba(217, 119, 6, 0.2)",
      features: [
        "JWT-authenticated admin management console",
        "One-click WhatsApp order checkout integration",
        "Fast image loading and responsive cart state",
      ],
    },
    {
      id: "04",
      title: "Pahadi Store",
      subtitle: "Himalayan Ecommerce App",
      category: "E-Commerce & AI",
      description: "Ecommerce web application showcasing authentic Himalayan products with structured catalog browsing, AI product guidance, and streamlined user navigation.",
      link: "https://pahadi-store-app.vercel.app/",
      image: "/projects/pahadi-store.png",
      tech: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
      accentColor: "#dc2626",
      glowColor: "rgba(220, 38, 38, 0.2)",
      features: [
        "Authentic Himalayan artisanal product catalog",
        "AI-guided product recommendation assistant",
        "Clean, modern UI layout with intuitive category filtering",
      ],
    },
  ];

  const current = projects[activeIndex];

  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden">
      {/* ── AMBIENT GLOW & BLUEPRINT GEARS BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Soft Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0284c7 1.5px, transparent 1.5px), linear-gradient(to right, rgba(2,132,199,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl -translate-x-1/2 -z-10" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl translate-x-1/2 -z-10" />

        {/* Top Left Assembly */}
        <div className="absolute top-10 left-8 md:left-20 flex items-center justify-center">
          <Gear size={210} teeth={16} speed={24} color="#0284c7" glowColor="rgba(2,132,199,0.25)" opacity={0.28} />
          <div className="absolute top-24 left-32">
            <Gear size={120} teeth={10} speed={14} reverse color="#0d9488" glowColor="rgba(13,148,136,0.25)" opacity={0.28} />
          </div>
        </div>

        {/* Top Right Assembly */}
        <div className="absolute top-10 right-8 md:right-20 flex items-center justify-center">
          <Gear size={220} teeth={16} speed={26} reverse color="#7c3aed" glowColor="rgba(124,58,237,0.25)" opacity={0.25} />
          <div className="absolute top-24 right-32">
            <Gear size={130} teeth={12} speed={15} color="#d97706" glowColor="rgba(217,119,6,0.25)" opacity={0.28} />
          </div>
        </div>

        {/* Bottom Left Assembly */}
        <div className="absolute bottom-12 left-16 hidden lg:flex items-center justify-center">
          <Gear size={180} teeth={14} speed={22} reverse color="#dc2626" glowColor="rgba(220,38,38,0.25)" opacity={0.25} />
          <div className="absolute bottom-20 left-28">
            <Gear size={100} teeth={8} speed={11} color="#0284c7" glowColor="rgba(2,132,199,0.25)" opacity={0.28} />
          </div>
        </div>

        {/* Bottom Right Assembly */}
        <div className="absolute bottom-12 right-16 hidden lg:flex items-center justify-center">
          <Gear size={190} teeth={14} speed={23} color="#0d9488" glowColor="rgba(13,148,136,0.25)" opacity={0.28} />
          <div className="absolute bottom-20 right-28">
            <Gear size={110} teeth={10} speed={12} reverse color="#7c3aed" glowColor="rgba(124,58,237,0.25)" opacity={0.25} />
          </div>
        </div>

        {/* Central Giant Wheel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Gear size={640} teeth={24} speed={65} color="#0284c7" glowColor="rgba(2,132,199,0.15)" opacity={0.12} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 font-mono text-xs font-semibold border border-primary-200/80 mb-4 shadow-sm">
            <Sparkles size={14} className="text-primary-600 animate-pulse" />
            CINEMA PROJECT SHOWCASE
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore live production web applications built with modern engineering practices.
          </p>
        </motion.div>

        {/* ── PROJECT SWITCHER TABS ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative px-5 py-3 rounded-2xl font-mono text-sm font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? "bg-white text-slate-900 border border-primary-400 shadow-md shadow-primary-500/10"
                    : "bg-white/80 text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-white shadow-sm"
                }`}
              >
                <span className={`text-xs px-2 py-0.5 rounded-md font-bold ${isActive ? "bg-primary-100 text-primary-700" : "bg-slate-100 text-slate-500"}`}>
                  {project.id}
                </span>
                <span>{project.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-2xl border-2 border-primary-500 pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── MAIN CINEMA SPOTLIGHT (SPLIT SHOWCASE) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-xl shadow-slate-200/60"
          >
            {/* Left Column: Browser Mockup Showcase */}
            <div className="lg:col-span-7 relative group">
              <div 
                className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg transition-all duration-500 group-hover:border-primary-400/80 group-hover:shadow-xl"
                style={{ boxShadow: `0 10px 30px -10px ${current.glowColor}` }}
              >
                {/* Browser Top Bar */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-xs font-mono text-slate-600 flex items-center gap-2 border border-slate-200 shadow-xs truncate max-w-[240px] sm:max-w-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="truncate">{current.link}</span>
                  </div>
                  <div className="w-12 text-right font-mono text-xs text-slate-400 font-bold">
                    {current.id}
                  </div>
                </div>

                {/* Screenshot Image Frame */}
                <div className="relative h-[280px] sm:h-[380px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={current.image}
                    alt={`${current.title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Action Overlays */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between gap-4 z-20 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-all shadow-lg flex items-center gap-2"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                    <a
                      href={`https://github.com/amankProgrammer`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/90 text-slate-900 font-medium text-sm hover:bg-white transition-all border border-slate-200 flex items-center gap-2 shadow-sm"
                    >
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Executive Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary-50 text-primary-700 text-xs font-mono font-semibold mb-3 border border-primary-200/60">
                  <Layers size={14} />
                  {current.category}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-primary-600 font-medium text-sm mb-4">
                  {current.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-8">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Action Button */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono font-medium rounded-lg border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm text-center transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2"
                  >
                    Explore Live Site <ChevronRight size={18} />
                  </a>
                  <a
                    href="https://github.com/amankProgrammer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-3.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 transition-all"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── INTERACTIVE PROJECT SELECTOR STRIP ── */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((proj, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer group flex items-center gap-4 ${
                  isSelected
                    ? "bg-white border-primary-500 shadow-md shadow-primary-500/10"
                    : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm"
                }`}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-14 h-14 rounded-xl object-cover object-top border border-slate-200 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-primary-600 font-bold block">{proj.id} • {proj.category}</span>
                  <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-primary-600 transition-colors">
                    {proj.title}
                  </h4>
                  <span className="text-xs text-slate-500 truncate block">{proj.subtitle}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
