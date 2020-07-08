import './assets/styles/reset.css'
import './assets/styles/fonts.styl'
import './assets/styles/icons.styl'
import './assets/styles/global.styl'

import App from './App.vue'
import store from './store'

declare const Vue: any
declare const VueRouter: any

Vue.config.productionTip = false

Vue.use(store)
Vue.use(VueRouter)

new Vue({
	store,
	render: (h: any) => h(App)
}).$mount('#app')
