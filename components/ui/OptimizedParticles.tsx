'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export default function OptimizedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const frameCountRef = useRef(0)
  const isActiveRef = useRef(true)

  const initParticles = useCallback((width: number, height: number) => {
    // Reduce particle count on mobile
    const isMobile = width < 768
    const particleCount = isMobile ? 15 : 25
    
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Check for touch device - disable on mobile for performance
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) {
      canvas.style.display = 'none'
      return
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles(canvas.width, canvas.height)
    }
    
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    
    // Throttled mouse move
    let mouseTimeout: NodeJS.Timeout
    const throttledMouseMove = (e: MouseEvent) => {
      if (mouseTimeout) return
      mouseTimeout = setTimeout(() => {
        handleMouseMove(e)
        mouseTimeout = undefined as unknown as NodeJS.Timeout
      }, 50)
    }
    
    window.addEventListener('mousemove', throttledMouseMove)

    // Visibility check - pause when tab is hidden
    const handleVisibilityChange = () => {
      isActiveRef.current = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    let frameCount = 0
    const animate = () => {
      if (!isActiveRef.current) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      frameCount++
      // Skip frames for performance (target ~30fps instead of 60fps)
      if (frameCount % 2 !== 0) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Mouse repulsion (only for every 3rd particle)
        if (i % 3 === 0) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80) {
            const force = (80 - dist) / 80
            particle.vx -= (dx / dist) * force * 0.2
            particle.vy -= (dy / dist) * force * 0.2
          }
        }

        // Dampen velocity
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(168, 85, 247, 0.4)'
        ctx.fill()
      })

      // Draw connections (limited for performance)
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.08)'
      ctx.lineWidth = 0.5
      
      const connectionDistance = 120
      const maxConnections = 3
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        let connections = 0
        for (let j = i + 1; j < particlesRef.current.length && connections < maxConnections; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
            connections++
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', throttledMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 hidden md:block"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  )
}
