import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locales'

Vue.use(VueI18n)

let locale = { language: 'id' }

if (localStorage.getItem('locale')) {
  locale = JSON.parse(localStorage.getItem('locale'))
}

export default new VueI18n({
  locale: locale.language || 'id',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'id',
  messages
})
