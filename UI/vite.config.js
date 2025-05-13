import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/      base: '/Liveliness/',   "homepage": "/Liveliness/"
export default defineConfig({
  base: 'https://livelinessprod.suresellpay.in:9634/',
  plugins: [react()],
})
