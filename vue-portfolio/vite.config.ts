import { fileURLToPath, URL } from 'node:url'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Plugin to create 404.html for GitHub Pages SPA routing
function createGitHubPagesSPA() {
  return {
    name: 'create-github-pages-spa',
    writeBundle() {
      const outDir = resolve(__dirname, 'dist')
      const indexPath = resolve(outDir, 'index.html')
      const notFoundPath = resolve(outDir, '404.html')
      
      try {
        const indexContent = readFileSync(indexPath, 'utf-8')
        writeFileSync(notFoundPath, indexContent)
        console.log('✓ Created 404.html for GitHub Pages SPA routing')
      } catch (err) {
        console.warn('⚠ Failed to create 404.html:', err)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createGitHubPagesSPA(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
        },
      },
    },
  },
})
