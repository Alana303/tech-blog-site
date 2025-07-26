// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    // Enables client-side routing fallback (useful for React Router)
    fs: {
      allow: ['.'],
    },
  },
  preview: {
    // Ensures Vite preview also works correctly with SPA routes
    port: 5000,
  },
});
