<template>
  <header class="glass">
    <nav>
      <RouterLink to="/" class="logo">
        <span class="logo-text">Denis Matejčík</span>
      </RouterLink>
      <ul class="nav-links">
        <li>
          <RouterLink to="/contact">Contact Me</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  padding: var(--space-lg) var(--section-padding-x);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  transition: all var(--duration-normal) var(--ease-out);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.logo {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: 900;
  text-decoration: none;
  display: inline-block;
  transition: all var(--duration-normal) var(--ease-out);
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-text {
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: var(--space-xl);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  overflow: hidden;
}

.nav-links a:hover {
  background: rgba(0, 212, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  color: var(--neon-cyan);
}

.nav-links a.router-link-active {
  color: var(--neon-cyan);
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  header {
    padding: var(--space-md) var(--space-lg);
  }
  
  .logo {
    font-size: var(--font-size-xl);
  }
  
  .nav-links {
    gap: var(--space-lg);
  }
  
  .nav-links a {
    padding: var(--space-xs) var(--space-md);
    font-size: var(--font-size-sm);
  }
}

@media (max-width: 480px) {
  nav {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .nav-links {
    gap: var(--space-md);
  }
}
</style>