import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { MotionPlugin } from '@vueuse/motion'


library.add(fas, far, fab)

createApp(App).use(Quasar, quasarUserOptions).use(MotionPlugin).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
