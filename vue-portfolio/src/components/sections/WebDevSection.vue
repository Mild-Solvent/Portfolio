<template>
  <section id="web-dev" class="section scroll-reveal" aria-labelledby="web-dev-title">
    <div class="container">
      <h2 id="web-dev-title" class="section-title text-gradient">Web Development</h2>
      <div class="web-grid">
        <ProjectCard
          v-for="project in webProjects"
          :key="project.id"
          :project="project"
          @click="openProject(project.url)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/common/ProjectCard.vue'

interface WebProject {
  id: number
  title: string
  description: string
  image: string
  hoverImage: string
  url: string
  alt: string
}

const webProjects: WebProject[] = [
  {
    id: 1,
    title: 'M&K Cleaning',
    description: 'Cleaning company website with complete booking system and stripe payments.',
    image: '/images/web1.jpg',
    hoverImage: '/images/web1-hover.jpg',
    url: 'https://mkbratislava.sk',
    alt: 'M&K Cleaning website screenshot'
  },
  {
    id: 2,
    title: 'CEA Europe.sk',
    description: 'Advertising agency website.',
    image: '/images/web2.jpg',
    hoverImage: '/images/web2-hover.jpg',
    url: 'https://new.ceaeurope.sk',
    alt: 'CEA Europe website screenshot'
  },
  {
    id: 3,
    title: 'TEDxRoatán',
    description: 'Independent TEDx Event organized on Island Roatán.',
    image: '/images/web3.jpg',
    hoverImage: '/images/web3-hover.jpg',
    url: 'https://tedxroatan.com',
    alt: 'TEDxRoatán website screenshot'
  },
  {
    id: 4,
    title: 'Morpheus - product webpage',
    description: 'Raw HTML, CSS and js delivered via GitHub Pages. Undergoing development.',
    image: '/images/web4.png',
    hoverImage: '/images/web4-hover.png',
    url: 'https://mild-solvent.github.io/Morpheus/',
    alt: 'Morpheus product webpage screenshot'
  }
]

const openProject = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.web-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-2xl);
}

@media (max-width: 768px) {
  .web-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>