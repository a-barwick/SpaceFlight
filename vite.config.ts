import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: true
  },
  preview: {
    allowedHosts: true
  },
  test: {
    include: ['src/**/*.test.ts']
  }
});
