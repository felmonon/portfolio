'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const cursorRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check for interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'pointer'
      ) {
        setIsHovering(true)
        setCursorText(target.dataset.cursorText || '')
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
      setCursorText('')
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  // Hide on mobile/touch devices
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.75 : isHovering ? 2 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          {/* Outer ring with gradient */}
          <motion.div
            animate={{
              scale: isHovering ? 1.8 : 1,
              opacity: isHovering ? 0 : 0.6,
              rotate: isHovering ? 90 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* Inner dot with gradient */}
          <motion.div
            animate={{
              scale: isClicking ? 0.8 : 1,
            }}
            className="w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
            }}
          />

          {/* Cursor text */}
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-medium tracking-wider uppercase text-white bg-gradient-to-r from-accent-purple to-accent-cyan px-3 py-1.5 rounded-full"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Cursor trail glow - more subtle and elegant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1.2,
            opacity: isHovering ? 0.2 : 0.08,
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className="w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(34, 211, 238, 0.3) 50%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  )
}
