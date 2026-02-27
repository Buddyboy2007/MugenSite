import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  // Base URL for GitHub Pages deployment
  // Replace 'MugenSite' with your actual repository name
  base: '/MugenSite/'
});
