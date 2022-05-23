require('./bootstrap')

import router from './Router/index';
import { createApp } from 'vue'
import store from './Store/index';
import Welcome from './pages/Welcome'

const app = createApp({})

app.use(router)
app.use(store)

app.component('welcome', Welcome)

app.mount('#app')
