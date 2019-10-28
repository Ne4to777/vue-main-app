/* eslint-disable no-restricted-globals */
import userInfo from '../dev/private.json'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export default new VueRouter({
	base: userInfo.siteRelativePath,
	mode: history.pushState ? 'history' : 'hash',
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
