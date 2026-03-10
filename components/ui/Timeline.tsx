'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import Badge from './Badge'

interface TimelineItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  tech: string[]
  type: 'work' | 'education'
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: '100%' } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent"
      />

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineCard({
  item,
  index,
  isInView,
}: {
  item: TimelineItem
  index: number
  isInView: boolean
}) {
  const isLeft = index % 2 === 0
  const Icon = item.type === 'work' ? Briefcase : GraduationCap

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-start gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: 'spring' }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan border-4 border-background shadow-lg shadow-accent-purple/30" />
      </motion.div>

      {/* Content */}
      <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
      }`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="relative p-6 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/[0.06] rounded-2xl overflow-hidden group"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Top line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative z-10">
            {/* Header */}
            <div className={`flex items-start gap-4 mb-4 ${
              isLeft ? 'md:flex-row-reverse' : ''
            }`}>
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 flex items-center justify-center flex-shrink-0"
              >
                <Icon className="w-6 h-6 text-accent-purple" />
              </motion.div>
              <div className={isLeft ? 'md:text-right' : ''}>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-accent-purple font-medium">{item.company}</p>
              </div>
            </div>

            {/* Meta info */}
            <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-white/50 ${
              isLeft ? 'md:justify-end' : ''
            }`}>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {item.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {item.location}
              </span>
            </div>

            {/* Description */}
            <ul className={`space-y-2 mb-4 ${isLeft ? 'md:text-right' : ''}`}>
              {item.description.map((desc, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                  className="text-white/60 text-sm leading-relaxed"
                >
                  • {desc}
                </motion.li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
              {item.tech.map((tech) => (
                <Badge key={tech} variant="default" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
