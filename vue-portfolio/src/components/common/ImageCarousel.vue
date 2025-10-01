<template>
  <div class="carousel" :class="{ mobile: isMobile }" role="region" :aria-label="ariaLabel">
    <div class="carousel-track" ref="carouselTrack" role="list">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="carousel-slide" 
        role="listitem"
        :class="{ active: currentSlide === index }"
      >
        <picture v-if="image.webp">
          <source :srcset="image.webp" type="image/webp">
          <img 
            :src="image.src" 
            :alt="image.alt" 
            loading="lazy" 
            @load="handleImageLoad(index)"
            @error="handleImageError(index)"
          />
        </picture>
        <img 
          v-else
          :src="image.src" 
          :alt="image.alt" 
          loading="lazy"
          @load="handleImageLoad(index)"
          @error="handleImageError(index)"
        />
      </div>
    </div>
    
    <!-- Navigation Controls -->
    <div class="carousel-controls" v-if="showControls && images.length > 1">
      <button 
        class="carousel-btn carousel-btn-prev" 
        @click="previousSlide"
        :aria-label="'Previous ' + slideType"
        type="button"
        :disabled="currentSlide === 0 && !loop"
      >
        ❮
      </button>
      <button 
        class="carousel-btn carousel-btn-next" 
        @click="nextSlide"
        :aria-label="'Next ' + slideType"
        type="button"
        :disabled="currentSlide === images.length - 1 && !loop"
      >
        ❯
      </button>
    </div>
    
    <!-- Indicators -->
    <div class="carousel-indicators" v-if="showIndicators && images.length > 1">
      <button
        v-for="(image, index) in images"
        :key="'indicator-' + index"
        class="carousel-indicator"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
        :aria-label="`Go to ${slideType} ${index + 1}`"
        type="button"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

interface CarouselImage {
  src: string
  alt: string
  webp?: string
}

interface Props {
  images: CarouselImage[]
  autoplay?: boolean
  autoplayDelay?: number
  loop?: boolean
  showControls?: boolean
  showIndicators?: boolean
  slideType?: string
  ariaLabel?: string
  isMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  autoplayDelay: 5000,
  loop: true,
  showControls: true,
  showIndicators: true,
  slideType: 'image',
  ariaLabel: 'Image carousel',
  isMobile: false
})

const currentSlide = ref(0)
const carouselTrack = ref<HTMLElement>()
const autoplayTimer = ref<number>()
const loadedImages = ref<Set<number>>(new Set())
const errorImages = ref<Set<number>>(new Set())

const totalSlides = computed(() => props.images.length)

const updateCarouselPosition = () => {
  if (carouselTrack.value) {
    carouselTrack.value.style.transform = `translateX(-${currentSlide.value * 100}%)`
  }
}

const nextSlide = () => {
  if (props.loop) {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  } else if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (props.loop) {
    currentSlide.value = currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1
  } else if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index: number) => {
  if (index >= 0 && index < totalSlides.value) {
    currentSlide.value = index
  }
}

const handleImageLoad = (index: number) => {
  loadedImages.value.add(index)
}

const handleImageError = (index: number) => {
  errorImages.value.add(index)
  console.warn(`Failed to load carousel image at index ${index}: ${props.images[index]?.src}`)
}

const startAutoplay = () => {
  if (props.autoplay && totalSlides.value > 1) {
    autoplayTimer.value = window.setInterval(() => {
      nextSlide()
    }, props.autoplayDelay)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = undefined
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextSlide()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    previousSlide()
  }
}

// Watch for slide changes to update position
watch(currentSlide, updateCarouselPosition)

// Touch/swipe support
let startX = 0
let startY = 0
let isSwiping = false

const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (!touch) return
  
  startX = touch.clientX
  startY = touch.clientY
  isSwiping = true
}

const handleTouchMove = (event: TouchEvent) => {
  if (!isSwiping) return
  
  const touch = event.touches[0]
  if (!touch) return
  
  const currentX = touch.clientX
  const currentY = touch.clientY
  const diffX = startX - currentX
  const diffY = startY - currentY
  
  // Only handle horizontal swipes
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
    event.preventDefault()
    
    if (diffX > 0) {
      nextSlide()
    } else {
      previousSlide()
    }
    
    isSwiping = false
  }
}

const handleTouchEnd = () => {
  isSwiping = false
}

onMounted(() => {
  updateCarouselPosition()
  startAutoplay()
  
  // Add keyboard navigation
  document.addEventListener('keydown', handleKeydown)
  
  // Add touch support
  if (carouselTrack.value) {
    carouselTrack.value.addEventListener('touchstart', handleTouchStart, { passive: false })
    carouselTrack.value.addEventListener('touchmove', handleTouchMove, { passive: false })
    carouselTrack.value.addEventListener('touchend', handleTouchEnd)
  }
})

onUnmounted(() => {
  stopAutoplay()
  document.removeEventListener('keydown', handleKeydown)
  
  if (carouselTrack.value) {
    carouselTrack.value.removeEventListener('touchstart', handleTouchStart)
    carouselTrack.value.removeEventListener('touchmove', handleTouchMove)
    carouselTrack.value.removeEventListener('touchend', handleTouchEnd)
  }
})

// Expose methods for parent component
defineExpose({
  nextSlide,
  previousSlide,
  goToSlide,
  currentSlide
})
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--glass-bg-dark);
}

.carousel.mobile {
  max-width: 360px;
  margin: 0 auto;
}

.carousel-track {
  display: flex;
  transition: transform var(--duration-slow) var(--ease-out);
  width: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-slide picture {
  display: block;
  width: 100%;
  height: 100%;
}

/* Navigation Controls */
.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 var(--space-sm);
  pointer-events: none;
}

.carousel-btn {
  pointer-events: all;
  background: var(--glass-bg-dark);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: bold;
  padding: var(--space-sm) var(--space-md);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  opacity: 0.8;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  opacity: 1;
  background: var(--glass-bg-medium);
  border-color: var(--glass-border-hover);
  transform: scale(1.1);
  box-shadow: var(--glass-shadow);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none;
}

.carousel-btn:disabled:hover {
  background: var(--glass-bg-dark);
  border-color: var(--glass-border);
  transform: none;
  box-shadow: none;
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: var(--space-md);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-xs);
  padding: var(--space-sm);
  background: var(--glass-bg-dark);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: var(--radius-full);
  border: 1px solid var(--glass-border);
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  border: 1px solid var(--glass-border);
  background: transparent;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
}

.carousel-indicator:hover {
  background: var(--glass-border-hover);
}

.carousel-indicator.active {
  background: var(--neon-cyan);
  border-color: var(--neon-cyan);
  box-shadow: 0 0 10px var(--neon-cyan);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .carousel-controls {
    padding: 0 var(--space-xs);
  }
  
  .carousel-btn {
    min-width: 36px;
    min-height: 36px;
    padding: var(--space-xs);
    font-size: var(--font-size-base);
  }
  
  .carousel-indicators {
    bottom: var(--space-sm);
    padding: var(--space-xs);
  }
  
  .carousel-indicator {
    width: 10px;
    height: 10px;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .carousel-track {
    transition: none;
  }
  
  .carousel-btn {
    transition: none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .carousel-btn {
    border: 2px solid var(--text-primary);
    background: var(--bg-primary);
  }
  
  .carousel-indicator {
    border: 2px solid var(--text-primary);
  }
}
</style>