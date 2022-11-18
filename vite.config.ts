/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/template-vite-react/',
  server: {
    port: 8080,
  },
  test: {
    include: ['./tests/unit/**/*.test.ts'],
  }
})
