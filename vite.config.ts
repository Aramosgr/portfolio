import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '**/brands/**',
        '**/common/**',
        '**/interfaces/**',
        '**/theme/**',
      ],
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/predictorapi': {
        target: 'https://dev.incentivegames.com/predictorapi',
        changeOrigin: true,
      },
      '/sportsapi': {
        target: 'https://dev.incentivegames.com/sportsapi',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: './build',
  },
});
