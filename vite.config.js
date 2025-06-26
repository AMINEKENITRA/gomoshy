import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for Gomoshy project
export default defineConfig({
  base: "/gomoshy/",
  plugins: [react()]
})
