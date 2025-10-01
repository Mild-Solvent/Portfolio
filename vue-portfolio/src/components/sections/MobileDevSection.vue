<template>
  <section id="mobile-dev" class="section scroll-reveal" aria-labelledby="mobile-dev-title">
    <div class="container">
      <h2 id="mobile-dev-title" class="section-title text-gradient">Mobile App Development</h2>
      <div class="app-showcase">
        <div class="glass p-xl">
          <h3>Cross-Platform Excellence</h3>
          <p class="mb-lg">Building performant mobile applications with React Native and modern technologies.</p>
          <div class="tech-list">
            <div class="tech-item glass p-lg mb-md">
              <h4 style="color: var(--neon-cyan);">React Native</h4>
              <p>Cross-platform mobile development</p>
            </div>
            <div class="tech-item glass p-lg mb-md">
              <h4 style="color: var(--neon-purple);">Node.js Backend</h4>
              <p>Google Cloud hosted JavaScript infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.app-showcase {
  display: flex;
  gap: var(--space-xl);
  margin-top: var(--space-2xl);
  align-items: start;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.tech-item h4 {
  font-family: var(--font-heading);
  margin-bottom: var(--space-xs);
}

.tech-item p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .app-showcase {
    flex-direction: column;
  }
}
</style>