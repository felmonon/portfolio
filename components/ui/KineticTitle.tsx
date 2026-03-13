'use client'

import { motion } from 'framer-motion'

export function KineticTitle({
  lines,
  className = 'hero__title',
  ariaLabel,
}: {
  lines: string[]
  className?: string
  ariaLabel?: string
}) {
  return (
    <h1 className={className} aria-label={ariaLabel ?? lines.join(' ')}>
      {lines.map((line, li) => (
        <span key={li} className="k-line">
          {line.split('').map((ch, ci) => (
            <motion.span
              key={ci}
              className="k-char"
              initial={{ opacity: 0, y: '70%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{
                duration: 0.55,
                delay: 0.18 + li * 0.14 + ci * 0.016,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}
