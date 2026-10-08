import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Supplied academy photos, posters, and logo are served as static assets.
  publicDir: 'assets',
});
