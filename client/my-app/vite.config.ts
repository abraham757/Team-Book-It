import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "https://team-book-it-13rh.onrender.com:5000", // Your deployed backend URL
        changeOrigin: true,
        secure: true,
      },
    },
  },
  preview: {
    port: 4173,
    host: "0.0.0.0",
    allowedHosts: ["https://team-book-it-13rh.onrender.com"], // ✅ Add your Render frontend URL
  },
})