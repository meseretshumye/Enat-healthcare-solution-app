import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // if we want to change the default port
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
});
