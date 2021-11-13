import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://cn.vitejs.dev/guide/build.html#customizing-the-build
const isDev = process.env.NODE_ENV === 'production' ? false : true

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: isDev ? '/' : '/all/',
  // build: {
  // assetsDir: 'all', //指定生成静态资源的存放路径(目录的意思)
  // },
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
