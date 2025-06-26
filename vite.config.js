import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Use '/' if deploying at root URL (Netlify default)
  plugins: [react()],
});
