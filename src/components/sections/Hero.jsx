import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Avatar3D } from "./Avatar3D";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Vibrant animated gradient background */}
      <div className="absolute inset-0 -z-10" style={{background: 'linear-gradient(135deg, #f0fdfa 0%, #f8fafc 40%, #eff6ff 100%)'}}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-60" style={{background: 'radial-gradient(circle, rgba(20,184,166,0.25) 0%, rgba(59,130,246,0.15) 50%, transparent 75%)', filter: 'blur(60px)', transform: 'translate(30%, -30%)'}} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-50" style={{background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(168,85,247,0.1) 50%, transparent 75%)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)'}} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-30" style={{background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'translate(-50%, -50%)'}} />
        {/* Subtle dot grid */}
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.15}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 py-10">
        <motion.div 
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Amank Lingwal</span>
          </motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl font-semibold text-slate-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            "Building scalable, AI-powered, and high-performance web applications."
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="/assets/AMANK_LINGWAL_RESUME.pdf"
              download="AMANK_LINGWAL_RESUME.pdf"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md"
            >
              <Download className="group-hover:-translate-y-1 transition-transform text-slate-500" size={20} />
              Resume
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center p-4 rounded-xl bg-white text-slate-600 hover:text-primary-600 hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow-md"
              aria-label="Contact Me"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="https://github.com/amankProgrammer" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-sm transition-all hover:-translate-y-1">
              <Github size={22} />
            </a>
            <a href="http://www.linkedin.com/in/amank-lingwal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-[#0a66c2] hover:border-slate-300 shadow-sm transition-all hover:-translate-y-1">
              <Linkedin size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full relative mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* 3D Interactive Avatar */}
          <Avatar3D />
          
          {/* Decorative blur elements behind avatar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-200 to-blue-200 blur-3xl rounded-full opacity-30 -z-10 pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <motion.span
          className="text-xs font-medium text-slate-400 uppercase tracking-widest"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >Scroll</motion.span>
        <motion.div
          className="w-5 h-9 border-2 border-slate-300 rounded-full flex justify-center pt-1.5"
          animate={{ borderColor: ['#cbd5e1', '#14b8a6', '#cbd5e1'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary-500 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
