'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
}

const chars = '!<>-_\\/[]{}—=+*^?#________'

export default function TextScramble({ text, className = '', delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  const scramble = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)

    let iteration = 0
    const originalText = text
    const totalIterations = originalText.length * 3

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 3) {
              return originalText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iteration += 1

      if (iteration >= totalIterations) {
        clearInterval(interval)
        setDisplayText(originalText)
        setIsAnimating(false)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [text, isAnimating])

  useEffect(() => {
    const timer = setTimeout(() => {
      scramble()
    }, delay)

    return () => clearTimeout(timer)
  }, [scramble, delay])

  return (
    <motion.span
      className={`inline-block font-mono ${className}`}
      onMouseEnter={scramble}
      whileHover={{ scale: 1.02 }}
    >
      {displayText}
    </motion.span>
  )
}
