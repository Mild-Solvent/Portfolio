<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'
import ParticleSystem from './components/ParticleSystem.vue'
import AppHeader from './components/AppHeader.vue'

const router = useRouter()

// Update document title based on route meta
watch(
  () => router.currentRoute.value,
  (to) => {
    if (to.meta?.title) {
      document.title = to.meta.title as string
    }
  },
  { immediate: true }
)

onMounted(() => {
  // Initialize scroll reveal animations
  const observeScrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
  }

  // Wait for components to mount then initialize animations
  setTimeout(observeScrollReveal, 100)
})
</script>

<template>
  <div id="app">
    <!-- Skip to main content for screen readers -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Background Effects -->
    <div class="background-container">
      <div class="gradient-bg"></div>
    </div>
    <div class="background-overlay"></div>
    <div class="parallax-container"></div>
    
    <!-- Particle System -->
    <ParticleSystem />
    
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main id="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  position: relative;
}

main {
  position: relative;
  z-index: var(--z-content);
  min-height: 100vh;
}
</style>
