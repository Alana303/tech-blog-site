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
    outDir: 'dist'
  },
  server: {
    // Enables client-side routing fallback
    historyApiFallback: true
  },
  preview: {
    // Ensures Vite preview also works correctly
    historyApiFallback: true
  }
});
