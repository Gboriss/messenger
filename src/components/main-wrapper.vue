<template>
	<div class="main-wrapper">
		<headerNav />
		<router-view></router-view>
		<bottomNav />
	</div>
</template>

<script>
import headerNav from './layouts/header'
import bottomNav from './layouts/bottom-nav'

export default {
	name: 'main-wrapper',
	components: {
		headerNav,
		bottomNav
		
	}

}
</script>

<style>

</style>