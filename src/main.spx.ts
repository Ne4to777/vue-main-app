import App from '@/App.vue'
import router from '@/router/index'
// import store from '@/store/index'

declare const Vue: any

Vue.config.productionTip = false

new Vue({
	router,
	render: (h: any) => h(App)
}).$mount('#app')
