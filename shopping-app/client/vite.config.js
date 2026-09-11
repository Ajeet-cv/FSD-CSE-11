import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Run `npm install` in this directory before `npm run dev` so the local Vite binary is available.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:5173,
    host:"127.0.0.1"
  }
})
