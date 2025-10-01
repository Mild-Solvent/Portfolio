<script setup lang="ts">
import WebDevSection from '@/components/sections/WebDevSection.vue'
import GameDevSection from '@/components/sections/GameDevSection.vue'
import MobileDevSection from '@/components/sections/MobileDevSection.vue'
import DevOpsSection from '@/components/sections/DevOpsSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import CookiePopup from '@/components/CookiePopup.vue'
import { onMounted } from 'vue'

// Add structured data for SEO
onMounted(() => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Denis Matejčík',
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer specializing in web development, game development, mobile apps, DevOps & cloud infrastructure.',
    url: 'https://mild-solvent.github.io/Portfolio/',
    image: 'https://mild-solvent.github.io/Portfolio/images/og-image.jpg',
    email: 'mailto:matejcik.denis@gmail.com',
    sameAs: [
      'https://github.com/Mild-Solvent',
      'https://www.linkedin.com/in/denis-matejcik/',
      'https://wa.me/qr/QCT7GFP2BR2IG1'
    ],
    knowsAbout: [
      'Web Development',
      'Game Development', 
      'Mobile App Development',
      'DevOps',
      'Cloud Infrastructure',
      'React',
      'Next.js',
      'Unreal Engine',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Slovakia'
      }
    }
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
  
  // Add website structured data
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Denis Matejčík Portfolio',
    description: 'Portfolio showcasing web development, game development, mobile apps, and DevOps projects by Denis Matejčík.',
    url: 'https://mild-solvent.github.io/Portfolio/',
    author: {
      '@type': 'Person',
      name: 'Denis Matejčík'
    },
    inLanguage: 'en-US'
  }
  
  const websiteScript = document.createElement('script')
  websiteScript.type = 'application/ld+json'
  websiteScript.textContent = JSON.stringify(websiteData)
  document.head.appendChild(websiteScript)
})
</script>

<template>
  <div class="portfolio-home">
    <!-- Web Development Section -->
    <WebDevSection />
    
    <!-- Game Development Section -->
    <GameDevSection />
    
    <!-- Mobile App Development Section -->
    <MobileDevSection />
    
    <!-- DevOps & Cybersecurity Section -->
    <DevOpsSection />
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Cookie Popup -->
    <CookiePopup />
  </div>
</template>

<style scoped>
.portfolio-home {
  padding-top: 120px; /* Account for fixed header */
}
</style>
