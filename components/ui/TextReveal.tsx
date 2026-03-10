'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  scramble?: boolean
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  duration = 50,
  scramble = true,
}: TextRevealProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let currentIndex = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          if (scramble) {
            // Create scrambled text for remaining characters
            const revealed = text.slice(0, currentIndex)
            const scrambled = text
              .slice(currentIndex)
              .split('')
              .map((char) => (char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
              .join('')
            setDisplayText(revealed + scrambled)
          } else {
            setDisplayText(text.slice(0, currentIndex))
          }
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, duration)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isInView, text, delay, duration, scramble])

  return (
    <span ref={ref} className={className}>
      {displayText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className={index < text.slice(0, displayText.length - (text.length - displayText.length)).length && isComplete ? '' : 'text-accent-purple/70'}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

// Split text animation - reveals text word by word or character by character
export function SplitTextReveal({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  type = 'chars', // 'chars' or 'words'
}: {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  type?: 'chars' | 'words'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const items = type === 'words' ? text.split(' ') : text.split('')

  return (
    <span ref={ref} className={className}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + index * staggerDelay,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {item}
          {type === 'words' && index < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}

// Gradient reveal - text reveals with a gradient mask
export function GradientTextReveal({
  text,
  className = '',
  delay = 0,
  duration = 1,
}: {
  text: string
  className?: string
  delay?: number
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Background text (hidden) */}
      <span className="opacity-20">{text}</span>

      {/* Revealed text with clip mask */}
      <motion.span
        className="absolute inset-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{
          duration,
          delay,
          ease: [0.77, 0, 0.175, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
  )
}
