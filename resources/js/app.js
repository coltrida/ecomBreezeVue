require('./bootstrap')

import { createApp } from 'vue'
import Welcome from './pages/Welcome'

const app = createApp({})

app.component('welcome', Welcome)

app.mount('#app')
