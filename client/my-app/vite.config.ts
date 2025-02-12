import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "https://team-book-it-13rh.onrender.com", // Your deployed backend URL
        changeOrigin: true,
        secure: true,
      },
    },
  },
})