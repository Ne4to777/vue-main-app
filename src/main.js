import VueApp from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SPXPlugin from './plugins/spx'

VueApp.config.productionTip = false

Vue.use(SPXPlugin);
VueApp.use(SPXPlugin);

new VueApp({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
