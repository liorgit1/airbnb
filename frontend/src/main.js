import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vClickOutside from "click-outside-vue3"

import 'v-calendar/style.css';
import VCalendar from 'v-calendar';

import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css"; 
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// Vue.component('Datepicker', VueDatepickerUi)

// import SsrCarousel from 'vue-ssr-carousel'
// import ssrCarouselCss from 'vue-ssr-carousel/index.css'
// Vue.component 'ssr-carousel'

import './assets/styles/main.scss'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(vClickOutside)
app.use(VCalendar, {})
app.use(PrimeVue)
// app.use(SsrCarousel)
app.mount('#app')
