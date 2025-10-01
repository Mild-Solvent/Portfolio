<template>
  <div class="web-card glass" @click="handleClick" @keypress="handleKeyPress" tabindex="0" role="button" :aria-label="`Open ${project.title} project`">
    <div class="image-container">
      <img
        :src="currentImage"
        :alt="project.alt"
        loading="lazy"
        @mouseenter="showHoverImage"
        @mouseleave="showOriginalImage"
        @load="handleImageLoad"
        @error="handleImageError"
      />
    </div>
    <div class="web-card-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  hoverImage?: string
  url: string
  alt: string
}

interface Props {
  project: Project
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()

const isHovered = ref(false)
const imageLoaded = ref(false)
const imageError = ref(false)

const currentImage = computed(() => {
  if (imageError.value) {
    return '/images/placeholder.jpg' // fallback image
  }
  
  return isHovered.value && props.project.hoverImage 
    ? props.project.hoverImage 
    : props.project.image
})

const showHoverImage = () => {
  if (props.project.hoverImage && imageLoaded.value) {
    isHovered.value = true
  }
}

const showOriginalImage = () => {
  isHovered.value = false
}

const handleClick = () => {
  emit('click')
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    emit('click')
  }
}

const handleImageLoad = () => {
  imageLoaded.value = true
}

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
.web-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  overflow: hidden;
  position: relative;
}

.web-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glass-shadow-hover);
  border-color: var(--glass-border-hover);
}

.web-card:focus-visible {
  outline: 2px solid var(--neon-cyan);
  outline-offset: 2px;
}

.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--duration-normal) var(--ease-out);
}

.web-card:hover .image-container img {
  transform: scale(1.05);
}

.web-card-content {
  padding: var(--space-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.web-card-content h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  line-height: var(--leading-tight);
}

.web-card-content p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
  flex: 1;
}

/* Loading and error states */
.image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--glass-bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--duration-normal);
  pointer-events: none;
}

.image-container.loading::before {
  opacity: 1;
  content: 'Loading...';
  color: var(--text-muted);
}

.image-container.error::before {
  opacity: 1;
  content: 'Image not found';
  color: var(--neon-red);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .web-card {
    margin-bottom: var(--space-lg);
  }
  
  .web-card-content {
    padding: var(--space-md);
  }
  
  .web-card-content h3 {
    font-size: var(--font-size-lg);
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .web-card {
    border: 2px solid var(--text-primary);
  }
  
  .web-card:hover {
    border-color: var(--neon-cyan);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .web-card,
  .image-container img {
    transition: none;
  }
  
  .web-card:hover .image-container img {
    transform: none;
  }
}
</style>