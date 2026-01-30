import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  // Use root path for Netlify, GitHub Pages path for GitHub deployment
  base: process.env.DEPLOY_TARGET === 'github-pages' ? '/CedarBayTrailCo2026/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
