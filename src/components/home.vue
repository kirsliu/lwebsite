<template>
	<div class="homePage">
		<navBar style="width:15% "></navBar>
		<rSide style="width:85%;min-height:100vh; overflow:auto" >
			
		</rSide>
	</div>
</template>
<script>
	import navBar from './common/navbar.vue'
	import rSide from './rside.vue'

	export default {
		components:{
			navBar,
			rSide,
		},
	}
;
</script>

<style lang="scss" scoped>
@import './style/mixin.scss';
.homePage{display: flex; }


</style>
