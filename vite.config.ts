/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/template-vite-react/',
  server: {
    port: 8080,
  },
  test: {
    include: ['./tests/unit/**/*.test.ts', './tests/unit/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: './tests/unit/global-setup.ts',
    globals: true,
  },
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
    ]
  }
})
