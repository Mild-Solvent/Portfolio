<template>
  <div ref="particlesContainer" class="particles" id="particles"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const particlesContainer = ref<HTMLElement>()
let animationFrame: number
let mouseTrailThrottle = false

// Performance detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const isLowPerformance = navigator.hardwareConcurrency <= 2
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Mouse trail particles
const createTrailParticle = (x: number, y: number) => {
  if (!particlesContainer.value) return
  
  const particle = document.createElement('div')
  particle.style.position = 'fixed'
  particle.style.width = '4px'
  particle.style.height = '4px'
  particle.style.background = 'var(--neon-cyan)'
  particle.style.borderRadius = '50%'
  particle.style.pointerEvents = 'none'
  particle.style.zIndex = '9999'
  particle.style.left = x + 'px'
  particle.style.top = y + 'px'
  particle.style.boxShadow = '0 0 6px var(--neon-cyan)'
  particle.style.transition = 'all 1s ease-out'
  particle.style.opacity = '0.8'
  
  document.body.appendChild(particle)
  
  // Animate particle
  setTimeout(() => {
    particle.style.transform = `translate(${(Math.random() - 0.5) * 30}px, ${(Math.random() - 0.5) * 30}px) scale(0)`
    particle.style.opacity = '0'
  }, 10)
  
  // Remove particle after animation
  setTimeout(() => particle.remove(), 1000)
}

const handleMouseMove = (e: MouseEvent) => {
  if (mouseTrailThrottle || isMobile || isLowPerformance || reducedMotion) return
  
  createTrailParticle(e.clientX, e.clientY)
  
  mouseTrailThrottle = true
  setTimeout(() => { mouseTrailThrottle = false }, 16) // ~60fps
}

// Background particles
const createBackgroundParticles = () => {
  if (!particlesContainer.value) return
  
  // Reduce particle count on mobile/low-performance devices
  let particleCount = isMobile || isLowPerformance ? 15 : 30
  if (reducedMotion) particleCount = 5
  
  const fragment = document.createDocumentFragment()
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 10 + 's'
    particle.style.animationDuration = Math.random() * 15 + 10 + 's'
    
    // Random size
    const size = Math.random() * 6 + 2
    particle.style.width = size + 'px'
    particle.style.height = size + 'px'
    
    const colors = [
      'var(--neon-blue)',
      'var(--neon-purple)', 
      'var(--neon-pink)',
      'var(--neon-green)',
      'var(--neon-cyan)',
    ] as const
    const color = colors[Math.floor(Math.random() * colors.length)] || 'var(--neon-cyan)'
    particle.style.background = color
    particle.style.boxShadow = `0 0 ${size * 2}px ${color}`
    
    fragment.appendChild(particle)
  }
  
  particlesContainer.value.appendChild(fragment)
}

// Parallax effect
const handleScroll = () => {
  if (reducedMotion || isMobile) return
  
  const scrolled = window.pageYOffset
  const gradientBg = document.querySelector('.gradient-bg') as HTMLElement
  
  if (gradientBg) {
    const parallaxSpeed = 0.5
    gradientBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
  }
  
  // Occasionally create scroll particles
  if (Math.random() > 0.995 && !isLowPerformance && particlesContainer.value) {
    const scrollParticle = document.createElement('div')
    scrollParticle.className = 'particle'
    scrollParticle.style.left = Math.random() * 100 + '%'
    scrollParticle.style.top = window.pageYOffset + window.innerHeight + 'px'
    scrollParticle.style.animation = 'particle-float 5s linear forwards'
    
    particlesContainer.value.appendChild(scrollParticle)
    
    setTimeout(() => scrollParticle.remove(), 5000)
  }
}

let scrollTicking = false
const throttledScroll = () => {
  if (!scrollTicking) {
    animationFrame = requestAnimationFrame(() => {
      handleScroll()
      scrollTicking = false
    })
    scrollTicking = true
  }
}

onMounted(() => {
  createBackgroundParticles()
  
  // Mouse trail events
  if (!isMobile && !isLowPerformance && !reducedMotion) {
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
  }
  
  // Parallax scroll effect
  if (!reducedMotion && !isMobile) {
    window.addEventListener('scroll', throttledScroll, { passive: true })
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', throttledScroll)
  
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-particles);
  pointer-events: none;
  overflow: hidden;
}

:deep(.particle) {
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;
  animation: particle-float 10s linear infinite;
}
</style>