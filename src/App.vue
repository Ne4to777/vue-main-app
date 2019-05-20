<template>
	<master-app>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link :to="{ query: { a: 1 } }">Gregg</router-link>
		</div>
		<router-view />
	</master-app>
</template>

<script>
export default {
	name: 'main-app',
	created() {
		document.title = 'Look Ma!'
	}
}
</script>

<style>
</style>
