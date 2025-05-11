import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect() // 可視化分析構建產物
  ],
  base: '/', // 確保路由在部署時正常工作
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 代碼分割設定
    rollupOptions: {
      output: {
        manualChunks: {
          // 將 React 相關的庫分組
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 將圖表庫分組
          'chart-vendor': ['recharts'],
        },
      },
    },
    // 設定 chunk 大小警告門檻
    chunkSizeWarningLimit: 1000, // 1MB
  },
})
