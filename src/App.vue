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

Component.registerHooks(['created', 'beforeUpdate'])

@Component({
	name: 'MainApp'
})
export default class MainApp extends Vue {
	x = true

	created(): void {
		console.log('1', this.x)
	}
}
</script>

<style lang="stylus"></style>
