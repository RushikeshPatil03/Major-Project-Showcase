import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path so the static site works on any subpath (e.g. GitHub Pages /Major-Project-Showcase/)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
  },
});
