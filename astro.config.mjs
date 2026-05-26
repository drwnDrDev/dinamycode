import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
