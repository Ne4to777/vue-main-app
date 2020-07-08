<template>
	<master-app id="app">
		<div id="nav">
			<router-link to="/index.aspx">Home</router-link>|
			<router-link to="/about/index.aspx">About</router-link>
		</div>
		<router-view />
	</master-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const masterModule = namespace('master')

Component.registerHooks(['created', 'beforeUpdate'])

@Component({
	name: 'MainApp'
})
export default class MainApp extends Vue {
	async created(): Promise<void> {
		console.log(1)
	}
}
</script>

<style lang="stylus">
@import '~@/assets/styles/variables.styl'
</style>
