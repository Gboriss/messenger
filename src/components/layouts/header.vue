<template>
	<div class="header">
		<div class="header__back" @click="goBack">
			<i class="material-icons">keyboard_arrow_left</i>
			<span>Back</span>
		</div>
		<div class="header__user-info">
			<span>{{ userChat }}</span>
		</div>
		<div class="right-side"></div>
	</div>
</template>

<script>
export default {
	name: 'headerNav',
	methods: {
		goBack() {
			this.$router.go(-1)
		}
	},
	 computed: {
		userChat() {
            return this.$store.state.userChat     
		},
		isCoreRoute() {
			return this.$router.path === '/'
		}   
    },

}
</script>

<style>

</style>