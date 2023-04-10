import {createApp} from 'vue'
import {createPinia} from "pinia";
import piniaPLuginPersist from 'pinia-plugin-persist'
import router from "./router";
import App from './App.vue'
import naive from 'naive-ui'
import './style/content.sass'
import useStore from './stores/counter'
import VueLazyload from 'vue3-lazyload'
import i18n from "./i18n/index";

const pinia = createPinia()


const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(naive)
app.use(VueLazyload)
app.use(i18n)

// app.config.errorHandler = (err: any, instance, info) => {
//     console.log(err.message)
//     console.log(instance!.$.type)
// }
pinia.use(piniaPLuginPersist)

const store = useStore()

app.mount('#app')
