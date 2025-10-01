<template>
  <div class="coffee-page">
    <div class="container">
      <div class="coffee-content glass p-xl text-center">
        <h1 class="text-gradient mb-lg">☕ Buy Me a Coffee</h1>
        <p class="mb-xl">
          Like my work? Support me with a coffee! Every cup fuels more awesome projects.
        </p>
        <div class="coffee-message glass p-lg">
          <p>🚧 Payment integration coming soon! 🚧</p>
          <p class="mt-md">For now, you can reach out directly via the contact page.</p>
          <RouterLink to="/contact" class="btn btn-primary mt-lg">Contact Me</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.coffee-page {
  min-height: 100vh;
  padding: 140px 0 var(--space-2xl);
  display: flex;
  align-items: center;
}

.coffee-content {
  max-width: 600px;
  margin: 0 auto;
}

.coffee-content h1 {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: 900;
}

.coffee-message {
  color: var(--text-muted);
}
</style>