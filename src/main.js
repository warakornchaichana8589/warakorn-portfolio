import './assets/main.css'
import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VuePrlx from 'vue-prlx'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VuePrlx);
app.mount('#app')
