import { createApp } from 'vue'

import { router } from './router.js'
import { store } from './store/store.js'

import vClickOutside from "click-outside-vue3"

import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
Vue.component('Datepicker', VueDatepickerUi)

import './assets/styles/main.scss'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vClickOutside)
app.mount('#app')
