import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/' // for project sites on GitHub Pages; use '/' for user site (username.github.io)
})
