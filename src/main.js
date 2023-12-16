import { createApp } from 'vue'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

import router from './plugins/router.js'
// styles

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/styles/tailwind.css'

// mouting point for the whole app

import App from '@/App.vue'

import 'material-icons/iconfont/material-icons.css'
import 'material-symbols'

// routes

createApp(App)
    .use(router)
    .mount('#app')

export default {
    url: 'http://localhost:8000'
}
