import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for Gomoshy project
export default defineConfig({
  base: '/gomoshy/', // Base public path, change to '/' if deploying to root
  plugins: [react()]
});
