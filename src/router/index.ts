/* eslint-disable no-restricted-globals */
import VueRouter from 'vue-router'
import { siteRelativePath } from '@/../dev/private.json'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue'

export default new VueRouter({
	base: siteRelativePath,
	mode: 'history',
	routes: [{
		path: '/index.aspx',
		name: 'home',
		component: Home
	}, {
		path: '/about/index.aspx',
		name: 'about',
		component: About
	}, {
		path: '*',
		name: 'any',
		component: NotFound
		// redirect: '/index.aspx'
	}]
})