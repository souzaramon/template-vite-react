/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/template-vite-react/",
  server: {
    port: 8080,
  },
  test: {
    include: ["./src/**/*.test.ts", "./src/**/*.test.tsx"],
    environment: "jsdom",
    setupFiles: "./tests/config/global-setup-unit.ts",
    globals: true,
  },
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },
});
