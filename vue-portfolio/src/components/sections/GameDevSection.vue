<template>
  <section id="game-dev" class="section scroll-reveal" aria-labelledby="game-dev-title">
    <div class="container">
      <h2 id="game-dev-title" class="section-title text-gradient">Game Development</h2>
      <div class="game-container">
        <!-- Experiment Echo Game -->
        <div class="game-item glass">
          <h3>Unreal Engine 5: Experiment Echo</h3>
          <div class="game-carousel-container">
            <ImageCarousel
              :images="experimentEchoImages"
              :autoplay="true"
              :autoplay-delay="4000"
              slide-type="game screenshot"
              aria-label="Experiment Echo game screenshots carousel"
            />
          </div>
          <p>
            An immersive adventure built with Unreal Engine 5, currently in
            blockout stage with working mechanics and advanced AI. Developed
            with students of VŠMU.
          </p>
          <a
            href="https://github.com/Ezra525/Bakalarka_Denny_Ezri_Sofi/releases/tag/v0.0.4-alpha"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Game
          </a>
        </div>

        <!-- You Are The Loading Screen Game -->
        <div class="game-item glass">
          <h3>Godot: You are the loading screen - the point and click adventure game</h3>
          <div class="game-carousel-container">
            <ImageCarousel
              :images="loadingScreenGameImages"
              :autoplay="true"
              :autoplay-delay="3500"
              slide-type="game screenshot"
              aria-label="You are the loading screen game screenshots carousel"
            />
          </div>
          <p>
            Point and click adventure game set in alternative universe where you
            wake up inside a room with a computer that is running a citizen of
            the surrounding city.
          </p>
          <a href="#" class="btn btn-secondary" disabled>
            Alpha coming soon...
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/common/ImageCarousel.vue'

// Experiment Echo images (Unreal Engine 5)
const experimentEchoImages = [
  {
    src: '/images/game1-1.png',
    alt: 'Experiment Echo - Environment overview showing the game world'
  },
  {
    src: '/images/game1-2.png',
    alt: 'Experiment Echo - Character interaction scene'
  },
  {
    src: '/images/game1-3.png',
    alt: 'Experiment Echo - Interior environment design'
  },
  {
    src: '/images/game1-4.png',
    alt: 'Experiment Echo - Gameplay mechanics demonstration'
  },
  {
    src: '/images/game1-5.png',
    alt: 'Experiment Echo - Advanced AI interaction'
  },
  {
    src: '/images/game1-6.png',
    alt: 'Experiment Echo - Lighting and atmosphere showcase',
    webp: '/images/game1-6.webp'
  },
  {
    src: '/images/game1-7.png',
    alt: 'Experiment Echo - Level design and architecture',
    webp: '/images/game1-7.webp'
  },
  {
    src: '/images/game1-8.png',
    alt: 'Experiment Echo - Character models and animations',
    webp: '/images/game1-8.webp'
  },
  {
    src: '/images/game1-9.png',
    alt: 'Experiment Echo - UI and game interface'
  },
  {
    src: '/images/game1-10.png',
    alt: 'Experiment Echo - Final scene composition'
  }
]

// You Are The Loading Screen images (Godot)
const loadingScreenGameImages = [
  {
    src: '/images/IMG-20250710-WA0013.jpg',
    alt: 'You are the loading screen - Main menu and title screen'
  },
  {
    src: '/images/IMG-20250710-WA0014.jpg',
    alt: 'You are the loading screen - Point and click interface'
  },
  {
    src: '/images/IMG-20250710-WA0015.jpg',
    alt: 'You are the loading screen - Room with computer terminal'
  },
  {
    src: '/images/IMG-20250710-WA0016.jpg',
    alt: 'You are the loading screen - Character interaction screen'
  },
  {
    src: '/images/IMG-20250710-WA0017.jpg',
    alt: 'You are the loading screen - City citizen simulation'
  },
  {
    src: '/images/IMG-20250710-WA0018.jpg',
    alt: 'You are the loading screen - Alternative universe environment'
  },
  {
    src: '/images/IMG-20250710-WA0019.jpg',
    alt: 'You are the loading screen - Adventure game mechanics'
  }
]
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
  margin-top: var(--space-2xl);
}

.game-item {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.game-item h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--text-primary);
  margin-bottom: 0;
  line-height: var(--leading-tight);
}

.game-carousel-container {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--glass-shadow-hover);
}

.game-item p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
  margin: 0;
  text-align: center;
  max-width: 600px;
  align-self: center;
}

.game-item .btn {
  align-self: center;
  margin-top: var(--space-md);
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

@media (max-width: 768px) {
  .game-container {
    gap: var(--space-2xl);
  }
  
  .game-item {
    padding: var(--space-lg);
  }
  
  .game-item h3 {
    font-size: var(--font-size-xl);
    text-align: center;
  }
  
  .game-carousel-container {
    max-width: 100%;
    aspect-ratio: 4 / 3;
  }
}
</style>
