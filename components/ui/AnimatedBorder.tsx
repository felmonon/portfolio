'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedBorderProps {
  children: ReactNode
  className?: string
  borderRadius?: string
  duration?: number
  gradient?: string
}

export default function AnimatedBorder({
  children,
  className = '',
  borderRadius = '24px',
  duration = 3,
  gradient = 'from-accent-purple via-accent-cyan to-accent-purple',
}: AnimatedBorderProps) {
  return (
    <div
      className={`relative group ${className}`}
      style={{ borderRadius }}
    >
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[1px] rounded-[inherit] overflow-hidden"
        style={{ borderRadius }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={`absolute inset-[-100%] bg-gradient-conic ${gradient}`}
          style={{
            background: `conic-gradient(from 0deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)`,
          }}
        />
      </div>

      {/* Inner content with solid background */}
      <div
        className="relative bg-background rounded-[inherit]"
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>

      {/* Shimmer overlay on hover */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-[inherit]"
      />
    </div>
  )
}

// Variant with static gradient border that animates opacity
export function GlowBorder({
  children,
  className = '',
  glowColor = 'rgba(139, 92, 246, 0.5)',
}: {
  children: ReactNode
  className?: string
  glowColor?: string
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
    >
      {/* Glow effect */}
      <motion.div
        variants={{
          hover: {
            opacity: 1,
            scale: 1.02,
          },
        }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 rounded-2xl blur-xl"
        style={{ background: glowColor }}
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </motion.div>
  )
}
