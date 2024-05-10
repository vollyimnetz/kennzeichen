// Modules
import vuetify from './vuetify'
import router from '../router'
import store from '../store'


export function registerModules(app) {
  app
    .use(store)
    .use(vuetify)
    .use(router)
   // .use(VueSmoothScroll, { duration: 400, updateHistory: false, })

}
