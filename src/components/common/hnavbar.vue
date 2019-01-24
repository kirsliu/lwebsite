<template>
	<div class="navbar">
  <ul>
      <router-link tag="li" :to="'/user/moment'">
      <span>moment</span>
    </router-link>

          <li>
      <span>like</span>
      </li>
          <li>
      <span>pic</span>
      </li>
  </ul>
	</div>
</template>
<script>
	export default{

  };
</script>
<style lang="scss" scoped>
	.navbar ul{display:flex; justify-content:flex-start; background:#fff; 
li{width:20%; padding:1% 2%; color:#666; cursor:pointer; text-align:center; 
  &:hover{ span{color:skyblue} background:rgba(0,0,0,.1)}; 
}}

</style>