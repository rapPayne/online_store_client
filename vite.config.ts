/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        'vite.config.ts',
        '.eslintrc.cjs',
        'src/main.tsx'
      ]
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/assets': 'http://localhost:3000',
    }
  }
})
