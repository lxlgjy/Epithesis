import { createApp } from 'vue'
import {createPinia} from "pinia";
import piniaPLuginPersist from 'pinia-plugin-persist'
import router from "./router";

import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPLuginPersist)
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
