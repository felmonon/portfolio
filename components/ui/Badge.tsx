'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gradient' | 'outline'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const variants = {
    default: `
      bg-white/[0.08]
      border border-white/[0.1]
      text-white/80
    `,
    gradient: `
      bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20
      border border-accent-purple/30
      text-white
    `,
    outline: `
      bg-transparent
      border border-white/[0.2]
      text-white/70
    `
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center
        px-3 py-1
        text-sm font-medium
        rounded-full
        backdrop-blur-sm
        transition-all duration-200
        hover:border-white/[0.3]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.span>
  )
}
