import './style/index.css'
import { createApp } from 'vue'
import './registerServiceWorker'
import Vue3Progress from 'vue3-progress'

import store from './store'
import router from './router/router'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Progress, {
    position: 'fixed',
    height: '3px',
    color: '#006BC2'
  })
  .mount('#app')
