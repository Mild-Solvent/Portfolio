<template>
  <section id="game-dev" class="section scroll-reveal" aria-labelledby="game-dev-title">
    <div class="container">
      <h2 id="game-dev-title" class="section-title text-gradient">Game Development</h2>
      <div class="game-container">
        <div class="game-item glass">
          <h3>Unreal Engine 5: Experiment Echo</h3>
          <p>
            An immersive adventure built with Unreal Engine 5, currently in
            blockout stage with working mechanics and advanced AI. Developed
            with students of VŠMU.
          </p>
          <a
            href="https://github.com/Ezra525/Bakalarka_Denny_Ezri_Sofi/releases/tag/v0.0.4-alpha"
            class="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Download Game
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-top: var(--space-2xl);
}

.game-item {
  padding: var(--space-xl);
}

.game-item h3 {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.game-item p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-lg);
}
</style>