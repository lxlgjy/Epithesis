import {createApp} from 'vue'
import {createPinia} from "pinia";
import piniaPLuginPersist from 'pinia-plugin-persist'
import router from "./router";
import App from './App.vue'
import naive from 'naive-ui'
import './style/content.sass'
import useStore from './stores/counter'
import VueLazyload from 'vue3-lazyload'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(naive)
app.use(VueLazyload)
pinia.use(piniaPLuginPersist)

const store = useStore()
app.mount('#app')
