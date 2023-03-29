import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import vClickOutside from "click-outside-vue3"

import 'v-calendar/style.css';
import VCalendar from 'v-calendar';


// Vue.component('Datepicker', VueDatepickerUi)

import './assets/styles/main.scss'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(vClickOutside)
app.use(VCalendar, {})
app.mount('#app')
// app.component('VCalendar', Calendar)
// app.component('VDatePicker', DatePicker)
