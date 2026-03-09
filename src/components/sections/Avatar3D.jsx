import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function Avatar3D() {
  const containerRef = useRef(null)

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)

  // Spotlight highlight position
  const lightX = useTransform(mouseX, [-0.5, 0.5], ['-30%', '130%'])
  const lightY = useTransform(mouseY, [-0.5, 0.5], ['-30%', '130%'])

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[420px] lg:h-[520px] flex items-center justify-center relative cursor-none"
      style={{ perspective: '1000px' }}
    >
      {/* Outer ambient glow */}
      <motion.div
        className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)',
          filter: 'blur(30px)',
        }}
      />

      {/* 3D Tilt Card — no box, just the photo */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* Floating avatar circle */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* The photo — circular, no box */}
          <div
            className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden relative"
            style={{
              boxShadow: '0 30px 80px rgba(20,184,166,0.4), 0 0 0 4px rgba(255,255,255,0.15), 0 10px 40px rgba(0,0,0,0.3)',
              transform: 'translateZ(0)',
            }}
          >
            <img
              src="/avatar.png"
              alt="Amank Lingwal"
              className="w-full h-full object-cover object-top scale-110"
              draggable={false}
            />

            {/* Dynamic light shimmer on mouse move */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${useTransform(mouseX, [-0.5, 0.5], ['20%', '80%'])} ${useTransform(mouseY, [-0.5, 0.5], ['20%', '80%'])}, rgba(255,255,255,0.25) 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* Floating ring decoration */}
          <motion.div
            className="absolute -inset-3 rounded-full border-2 border-primary-400/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ borderStyle: 'dashed' }}
          />
          <motion.div
            className="absolute -inset-6 rounded-full border border-blue-300/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />

          {/* Shadow reflection below */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(20,184,166,0.3) 0%, transparent 70%)',
              filter: 'blur(12px)',
              transform: 'translateZ(-30px)',
            }}
          />

          {/* Floating badges — code & Java */}
          <motion.div
            className="absolute -right-8 top-12 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-2"
            animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{ transform: 'translateZ(40px)' }}
          >
            <span className="text-blue-600 font-black text-xs font-mono">{"</>"}</span>
            <span className="text-xs font-bold text-slate-700">React</span>
          </motion.div>

          <motion.div
            className="absolute -left-10 bottom-16 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-2"
            animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transform: 'translateZ(40px)' }}
          >
            <span className="text-orange-500 font-black text-xs font-mono">☕</span>
            <span className="text-xs font-bold text-slate-700">Java</span>
          </motion.div>

          <motion.div
            className="absolute -left-4 top-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl shadow-xl border border-white/60 flex items-center gap-2"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="text-lg">🤖</span>
            <span className="text-xs font-bold text-slate-700">AI</span>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  )
}
