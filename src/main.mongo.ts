import App from './App.vue'
import store from './store'

declare const Vue: any

Vue.config.productionTip = false

new Vue({
	store,
	render: (h: any) => h(App)
}).$mount('#app')
