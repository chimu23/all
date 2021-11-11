import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  server: {
    host: '0.0.0.0',
    proxy: {
      //  vite 版本
      '^/proxy/.*': {
        target: 'http://10.225.41.0:3000',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, ''),
      },

      // axios的baseURL需要配置成''
      // 假定多个服务api的请求接口都是同一台服务器，则可以通过pathRewrite直接重写部分开头
      // '/proxy': {
      //   target: 'http://localhost:3000',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/proxy/todo': '/todo',
      //     '/proxy/abc': '/abc'
      //   }
      // }
      //    多个服务api,直接代理到根服务器就行（根据项目实际情况配置）
      //   '/proxy/todo': {
      //     target: 'http://localhost:3000',
      //     ws: true,
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '/proxy/todo': '',
      //     }
      //   }
    },
  },
})
