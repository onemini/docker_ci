import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import ant from './utils/ant'
import 'lib-flexible/flexible'
import 'vant/lib/index.css' // 全局引入样式
import './utils/rem'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ant)
app.mount('#app')
