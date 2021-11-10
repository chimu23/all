import { createApp } from 'vue'
import App from './App.vue'
import '@/style/tailwind.scss'
import '@/style/iconfont'
import router from '@/routes/index.js'
import vuex from '@/store'

const app = createApp(App)
app.use(router).use(vuex).mount('#app')
