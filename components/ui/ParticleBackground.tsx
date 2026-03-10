'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  color: string
  pulsePhase: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = [
      { r: 139, g: 92, b: 246 },   // Purple
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 6, g: 182, b: 212 },    // Cyan
    ]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 15))

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const color = colors[Math.floor(Math.random() * colors.length)]

        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2.5 + 0.5,
          speedY: Math.random() * 0.4 + 0.1,
          speedX: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          color: `${color.r}, ${color.g}, ${color.b}`,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const drawConnections = () => {
      const particles = particlesRef.current
      const connectionDistance = 120
      const mouseDistance = 200

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            // Gradient line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, `rgba(${particles[i].color}, ${opacity})`)
            gradient.addColorStop(1, `rgba(${particles[j].color}, ${opacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Connect to mouse
        const mouseDx = particles[i].x - mouseRef.current.x
        const mouseDy = particles[i].y - mouseRef.current.y
        const mouseDistanceFromParticle = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDistanceFromParticle < mouseDistance) {
          const opacity = (1 - mouseDistanceFromParticle / mouseDistance) * 0.3
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(${particles[i].color}, ${opacity})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now() * 0.001

      // Draw connections first (behind particles)
      drawConnections()

      // Draw and update particles
      particlesRef.current.forEach((p) => {
        // Mouse repulsion/attraction
        const mouseDx = p.x - mouseRef.current.x
        const mouseDy = p.y - mouseRef.current.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)
        const mouseInfluence = 150

        if (mouseDistance < mouseInfluence) {
          const force = (1 - mouseDistance / mouseInfluence) * 2
          p.x += (mouseDx / mouseDistance) * force
          p.y += (mouseDy / mouseDistance) * force
        }

        // Pulsing size effect
        const pulseSize = p.size + Math.sin(time * 2 + p.pulsePhase) * 0.3

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseSize * 3)
        gradient.addColorStop(0, `rgba(${p.color}, ${p.opacity})`)
        gradient.addColorStop(0.5, `rgba(${p.color}, ${p.opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(${p.color}, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity * 1.5})`
        ctx.fill()

        // Movement
        p.y -= p.speedY
        p.x += p.speedX

        // Wrap around screen
        if (p.y < -20) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
          p.baseX = p.x
          p.baseY = p.y
        }
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
      })

      requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  )
}
