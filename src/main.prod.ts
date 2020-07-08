import App from './App.vue'
import store from './store'

declare const Vue: any
declare const VueRouter: any

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
	store,
	render: (h: any) => h(App)
}).$mount('#app')
