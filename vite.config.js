import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sri_radhe_interior_solution/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})