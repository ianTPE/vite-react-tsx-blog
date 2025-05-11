import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect() // 可視化分析構建產物
  ],
  base: '/', // 確保路由在部署時正常工作
})
