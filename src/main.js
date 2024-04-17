import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
