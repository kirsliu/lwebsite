<template>
	<div class="navbar">
  <ul>

    <li>
      <router-link :to="'/user/moment'">
      <span>moment</span>
    </router-link>
      </li>
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
	
</script>
<style lang="scss" scoped>
	.navbar ul{display:flex; justify-content:flex-start; background:#fff; 
li{width:20%; padding:1% 2%; color:#666; cursor:pointer; text-align:center; &:hover{color:skyblue;}
  }
}

</style>