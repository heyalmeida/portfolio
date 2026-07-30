import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { setupAnalytics } from '@/utils/analytics'

// Single CSS import — everything else is Tailwind
import '@/assets/css/global.css'

// JavaScript
import '@/assets/js/cursor-follower.js'

const app = createApp(App)
app.use(router)
setupAnalytics(router)
const head = createHead()
app.use(head)
app.mount('#app')
