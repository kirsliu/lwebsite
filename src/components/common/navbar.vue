<template>
<div>
  <nav class="navbar">

    <div class="userinfo">
      <div class="usericon">
        <img src="../../assets/i1.jpg" alt="">
      </div>
      <section class="userdetail">
      <p>gakki</p>
<span>krisliu</span>
</section>
    </div>

  <el-row class="tac" >
  <el-col :span="24"  >
    <el-menu router
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

     <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">我的信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">我的时刻</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">more</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</nav >  
</div>
</template>
<script>
    export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import '../style/mixin.scss';

.navbar{

  @include wh(100%,100%);
  background:#545c64;

.userinfo{
  width:100%;
  padding:25px 0;

.usericon{
  width:50%;
  border:8px solid #fff;
  border-radius:50%;
  margin:0 auto;
   img{@include wh(100%,auto);
border-radius:50%;
   }
}
.userdetail{
  text-align:center;
  margin:10px;
  p{color:#fff;font-size:24px; line-height:30px;}
}
}
}
</style>