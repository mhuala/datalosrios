import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base : "/datalosrios/",
  build:{chunkSizeWarningLimit:1500},  
  plugins: [react()]
})
