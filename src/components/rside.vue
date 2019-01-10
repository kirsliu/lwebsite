<template>
	<div class="rside">
		<div class="head"><img src="../assets/sky.png" alt=""></div>
		<div class="hnavbar"><hnavBar></hnavBar></div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import hnavBar from './common/hnavbar.vue'
	export default {
		components:{
			hnavBar
		}
	};
</script>
<style lang="scss" scoped>
@import './style/mixin.scss';
.rside{
	@include wh(100%,100vh);
	position:relative;
.head{@include wh(100%,25vh); img{@include wh(100%,100%)}}
.hnavbar{
	width:90%;
	position:absolute;
	top:23%;
	left:10%;
	box-shadow:0px 1px 10px 0px rgba(0,0,0,.3)
}
.content{@include wh(100%,auto);
	min-height:75vh;	
	padding:5%;
background:#efefef;
}
}
</style>