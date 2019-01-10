<template>
<div>
<el-row :gutter="30">
  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" >
<el-row >
    <el-card >
     <img src="../../assets/1.jpeg" alt="">
      <div style="padding: 14px;">
        <span>crazy nice day</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">like</el-button>
        </div>
      </div>
    </el-card>
</el-row>
  </el-col>

    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" >
<el-row >
    <el-card >
     <img src="../../assets/1.jpeg" alt="">
      <div style="padding: 14px;">
        <span>crazy nice day</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">like</el-button>
        </div>
      </div>
    </el-card>
</el-row>
  </el-col>

    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" >
<el-row >
    <el-card >
     <img src="../../assets/1.jpeg" alt="">
      <div style="padding: 14px;">
        <span>crazy nice day</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">like</el-button>
        </div>
      </div>
    </el-card>
</el-row>
  </el-col>

    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" >
<el-row >
    <el-card >
     <img src="../../assets/1.jpeg" alt="">
      <div style="padding: 14px;">
        <span>crazy nice day</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">like</el-button>
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
      currentDate: new Date()
    };
  },
  created(){
  	axios.get('https://wd7671337397bxyqyc.wilddogio.com').then(res=>{
  		console.log('111')
  		console.log(res)
  	})
  	var config = {
  syncURL: "https://wd7671337397bxyqyc.wilddogio.com" //输入节点 URL
};
wilddog.initializeApp(config);
  	var ref = wilddog.sync().ref();
  	ref.on("value", function(snapshot) {
    console.log(snapshot.val());
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
</style>