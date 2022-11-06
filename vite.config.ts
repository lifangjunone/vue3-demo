import {defineConfig} from 'vite'
import path from "path";    //path引入可能报错可以使用 import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
let pythonDomain = 'http://127.0.0.1:5000' // / 测试
 export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: `${pythonDomain}/api`,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  css: {
    devSourcemap: true,  // 开启 CSS source maps
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
    },
  }
})