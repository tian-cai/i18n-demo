import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import zh from './i18n/zh.js'
import en from './i18n/en.js'
import { numberFormats, dateTimeFormats } from './i18n/i18n-config.js'

Vue.config.productionTip = false
Vue.use(VueI18n)

let lang = (navigator.languages && navigator.languages[0]) || navigator.language
const i18n = new VueI18n({
  locale: lang.split('-')[0],
  messages: {
    zh,
    en
  },
  numberFormats,
  dateTimeFormats
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
