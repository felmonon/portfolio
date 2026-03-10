'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-xl
    transition-all duration-300
    cursor-pointer
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan
      text-white
      hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
      hover:scale-105
    `,
    secondary: `
      bg-white/[0.05] backdrop-blur-md
      border border-white/[0.1]
      text-white
      hover:bg-white/[0.1]
      hover:border-white/[0.2]
    `,
    ghost: `
      text-white/70
      hover:text-white
      hover:bg-white/[0.05]
    `
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </Component>
  )
}
