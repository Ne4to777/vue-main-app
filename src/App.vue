<template>
	<master-app>
		<div id="nav">
			<router-link to="/index.aspx">Home</router-link>|
			<router-link to="/about/index.aspx">About</router-link>
		</div>
		<router-view />
	</master-app>
</template>

<script lang="ts">
export default {
	created(): void {
		console.log('1')
	}
}
</script>

<style lang="stylus"></style>
