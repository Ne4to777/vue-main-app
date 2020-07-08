import './assets/styles/reset.css'
import './assets/styles/fonts.styl'
import './assets/styles/icons.styl'
import './assets/styles/global.styl'

import App from './App.vue'
import store from './store'
import polyfillsPlugin from './plugins/polyfills'
import spxPlugin from './plugins/spx'
import initDataSPPlugin from './plugins/initDataSP'

declare const Vue: any
declare const VueRouter: any

Vue.config.productionTip = false

Vue.use(polyfillsPlugin)
Vue.use(spxPlugin)
Vue.use(store)
Vue.use(VueRouter)
Vue.use(initDataSPPlugin)

// Vue.component('master-app', App)

new Vue({
	store,
	render: (h: any) => h(App)
}).$mount('#master-app')
