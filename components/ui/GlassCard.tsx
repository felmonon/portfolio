'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  delay?: number
  tilt?: boolean
  glowColor?: 'purple' | 'cyan' | 'mixed'
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  delay = 0,
  tilt = true,
  glowColor = 'purple'
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smoother spring config for premium feel
  const springConfig = { stiffness: 250, damping: 25 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  // More subtle tilt for elegance
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-6, 6])

  // Spotlight position
  const spotlightX = useTransform(xSpring, [-0.5, 0.5], ['0%', '100%'])
  const spotlightY = useTransform(ySpring, [-0.5, 0.5], ['0%', '100%'])

  // Glow color variants
  const glowColors = {
    purple: 'rgba(168, 85, 247, 0.12)',
    cyan: 'rgba(34, 211, 238, 0.12)',
    mixed: 'rgba(168, 85, 247, 0.08)',
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !tilt) return

    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      whileHover={hover ? {
        y: -6,
        scale: 1.01,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : undefined}
      className={`
        relative overflow-hidden group
        bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.03]
        backdrop-blur-xl backdrop-saturate-150
        border border-white/[0.06]
        rounded-2xl
        transition-all duration-300
        ${hover ? 'hover:bg-white/[0.05] hover:border-white/[0.12] hover:shadow-card-hover' : ''}
        ${glow ? 'shadow-glow' : ''}
        ${className}
      `}
    >
      {/* Top highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Bottom subtle shadow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      {/* Dynamic spotlight effect following cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(
            600px circle at ${spotlightX} ${spotlightY},
            ${glowColors[glowColor]},
            transparent 40%
          )`,
        }}
      />

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovering ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/[0.03] via-transparent to-accent-cyan/[0.03]" />
      </motion.div>

      {/* Content with subtle 3D lift */}
      <div
        className="relative z-10 transition-transform duration-300"
        style={{
          transform: tilt && isHovering ? 'translateZ(25px)' : 'translateZ(0)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>

      {/* Shine/reflection effect - more subtle */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            115deg,
            transparent 40%,
            rgba(255, 255, 255, 0.02) 45%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.02) 55%,
            transparent 60%
          )`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Edge highlight on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: isHovering
            ? 'inset 0 0 0 1px rgba(255,255,255,0.08)'
            : 'inset 0 0 0 0px rgba(255,255,255,0)',
          transition: 'box-shadow 0.3s ease',
        }}
      />
    </motion.div>
  )
}
