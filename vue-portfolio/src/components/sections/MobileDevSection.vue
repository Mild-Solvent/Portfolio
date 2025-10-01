<template>
  <section id="mobile-dev" class="section scroll-reveal" aria-labelledby="mobile-dev-title">
    <div class="container">
      <h2 id="mobile-dev-title" class="section-title text-gradient">Mobile App Development</h2>
      <div class="app-showcase">
        <!-- Mobile App Preview -->
        <div class="app-preview glass p-xl">
          <h3>Cross-Platform Excellence</h3>
          <p class="mb-lg">Building performant mobile applications with React Native and modern technologies.</p>
          
          <div class="mobile-carousel-container">
            <ImageCarousel
              :images="mobileAppImages"
              :autoplay="true"
              :autoplay-delay="3000"
              :is-mobile="true"
              slide-type="app screenshot"
              aria-label="Mobile app screenshots carousel"
            />
          </div>
          
          <a href="#" class="btn btn-secondary mt-lg" disabled>
            Coming soon...
          </a>
        </div>
        
        <!-- Technologies -->
        <div class="tech-column">
          <h3>Technologies</h3>
          <div class="tech-list">
            <div class="tech-item glass p-lg mb-md">
              <div class="tech-icon">⚛️</div>
              <div class="tech-content">
                <h4 style="color: var(--neon-cyan);">React Native</h4>
                <p>Building performant cross-platform mobile applications with a single codebase, leveraging the power of React ecosystem.</p>
              </div>
            </div>
            <div class="tech-item glass p-lg mb-md">
              <div class="tech-icon">🟢</div>
              <div class="tech-content">
                <h4 style="color: var(--neon-purple);">Node.js Backend</h4>
                <p>Google Cloud hosted JavaScript working under the hood.</p>
              </div>
            </div>
            <div class="tech-item glass p-lg mb-md">
              <div class="tech-icon">🍃</div>
              <div class="tech-content">
                <h4 style="color: var(--neon-blue);">MongoDB</h4>
                <p>Used to store logged in users, posts, interaction, etc keeping the application alive.</p>
              </div>
            </div>
            <div class="tech-item glass p-lg mb-md">
              <div class="tech-icon">📱</div>
              <div class="tech-content">
                <h4 style="color: var(--neon-green);">Expo</h4>
                <p>Rapid prototyping and deployment for Android and iOS apps.</p>
              </div>
            </div>
            <div class="tech-item glass p-lg">
              <div class="tech-icon">💼</div>
              <div class="tech-content">
                <h4 style="color: var(--neon-pink);">Services</h4>
                <p>Advertising, promotion and tier based subscription plans for workers to reach wider customer base.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/common/ImageCarousel.vue'

const getImagePath = (imageName: string) => {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}images/${imageName}`
}

// Mobile app images
const mobileAppImages = [
  {
    src: getImagePath('app1-1.png'),
    alt: 'Mobile app - Main screen with user interface'
  },
  {
    src: getImagePath('app1-2.png'),
    alt: 'Mobile app - Feature showcase and functionality'
  },
  {
    src: getImagePath('app1-3.png'),
    alt: 'Mobile app - Settings and configuration screen'
  }
]
</script>

<style scoped>
.app-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  margin-top: var(--space-2xl);
  align-items: start;
}

.app-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.app-preview h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.app-preview p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
  max-width: 400px;
}

.mobile-carousel-container {
  width: 100%;
  max-width: 360px;
  aspect-ratio: 9 / 16;
  margin: var(--space-xl) auto;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--glass-shadow-hover);
  border: 2px solid var(--glass-border);
}

.tech-column h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  text-align: center;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.tech-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
}

.tech-icon {
  font-size: var(--font-size-2xl);
  min-width: 50px;
  text-align: center;
  padding-top: var(--space-xs);
}

.tech-content {
  flex: 1;
}

.tech-content h4 {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xs);
}

.tech-content p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
  font-size: var(--font-size-sm);
}

.btn[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn[disabled]:hover {
  transform: none;
  box-shadow: none;
}

@media (max-width: 1024px) {
  .app-showcase {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .mobile-carousel-container {
    max-width: 300px;
    margin: var(--space-lg) auto;
  }
}

@media (max-width: 768px) {
  .app-showcase {
    gap: var(--space-lg);
  }
  
  .app-preview {
    padding: var(--space-lg);
  }
  
  .mobile-carousel-container {
    max-width: 280px;
    margin: var(--space-md) auto;
  }
  
  .tech-item {
    flex-direction: column;
    text-align: center;
    padding: var(--space-md);
  }
  
  .tech-icon {
    padding-top: 0;
  }
}
</style>
