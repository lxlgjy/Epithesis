import { createApp } from 'vue'
import {createPinia} from "pinia";
import piniaPLuginPersist from 'pinia-plugin-persist'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPLuginPersist)
app.use(pinia)

app.mount('#app')
