<template>
<div>
<el-row :gutter="30">

  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" class="card" v-for="item in userData">
<el-row >
    <el-card >
     <img :src="item.img" alt="">
      <div class="card_content" >
        <span class="card_title">{{item.title}}</span>
        <p class="card_info">{{item.info}}</p>
        <div class="bottom clearfix">
          <time class="time">{{ item.time}}</time>
          <el-button type="text" class="button">like/  <span>{{item.like}}</span></el-button>
        </div>
      </div>
    </el-card>

</el-row>
  </el-col>

</el-row>



</div>
</template>
<script>
export default {
  data() {
    return {
      userData:[],
    };
  },
  created(){
  
  	var config = {
  syncURL: "https://wd7671337397bxyqyc.wilddogio.com" //输入节点 URL
};
wilddog.initializeApp(config);
  	var ref = wilddog.sync().ref();
  	let _this = this;
  	ref.on("value", function(snapshot) {
  		_this.userData = snapshot.val();
    console.log(_this.userData);
});
  }
};
</script>
<style lang="scss" scoped>
img{width:100%;height:45vh;}
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-card{border-radius:10	px;}
  .card{ margin-top:20px;
  	.card_content{padding: 14px;}
  	.card_title{font-size:18px;}
.card_info{font-size:14px; color:#ccc;font-weight:600;}
  
}
</style>