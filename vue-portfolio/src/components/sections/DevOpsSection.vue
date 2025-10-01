<template>
  <section id="devops-cyber" class="section scroll-reveal" aria-labelledby="devops-cyber-title">
    <div class="container">
      <h2 id="devops-cyber-title" class="section-title text-gradient">DevOps & Cloud Infrastructure / Cybersecurity</h2>
      <div class="tech-lists-container">
        <!-- DevOps Column -->
        <div class="tech-column">
          <h3 class="column-title">DevOps & Cloud Infrastructure</h3>
          <div class="tech-list">
            <div class="tech-list-item glass" v-for="tech in devOpsTech" :key="tech.name">
              <div class="tech-icon">{{ tech.icon }}</div>
              <div class="tech-content">
                <h4>{{ tech.name }}</h4>
                <p>{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cybersecurity Column -->
        <div class="tech-column">
          <h3 class="column-title">Cybersecurity</h3>
          <div class="tech-list">
            <div class="tech-list-item glass" v-for="tech in cyberTech" :key="tech.name">
              <div class="tech-icon">{{ tech.icon }}</div>
              <div class="tech-content">
                <h4>{{ tech.name }}</h4>
                <p>{{ tech.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const devOpsTech = [
  { name: 'Azure Cloud', description: 'Enterprise cloud solutions', icon: '☁️' },
  { name: 'Google Cloud', description: 'Scalable cloud architecture', icon: '🌐' },
  { name: 'Docker', description: 'Container orchestration', icon: '🐳' },
  { name: 'Kubernetes', description: 'Container management at scale', icon: '☸️' },
]

const cyberTech = [
  { name: 'Kali Linux', description: 'Advanced penetration testing', icon: '🔒' },
  { name: 'Network Security', description: 'Firewall & IDS configuration', icon: '🛡️' },
  { name: 'Vulnerability Assessment', description: 'Security auditing & scanning', icon: '🔍' },
  { name: 'Cryptography', description: 'Encryption & secure protocols', icon: '🗝️' },
]
</script>

<style scoped>
.tech-lists-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-2xl);
  margin-top: var(--space-2xl);
}

.tech-column {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.column-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  text-align: center;
  margin-bottom: var(--space-md);
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.tech-list-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
}

.tech-icon {
  font-size: var(--font-size-2xl);
  min-width: 50px;
  text-align: center;
}

.tech-content h4 {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.tech-content p {
  color: var(--text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .tech-lists-container {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  
  .tech-list-item {
    padding: var(--space-md);
  }
}
</style>