import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/currencyExchange/',  // Add this line
  plugins: [react()],
})