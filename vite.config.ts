import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/unidad-2-full-stack-2/',
  plugins: [react()],
})
