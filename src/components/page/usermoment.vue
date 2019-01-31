<template>
<div class="m-list">

    <div class="card" v-for="item in userData" >
     <img :src="item.img" alt="">
      <div class="card_content" >
      	<p class="card_author">{{item.author}}:</p>

		<section>
        <p class="card_title">{{item.title}}</p>
        <p class="card_info">{{item.info}}</p>
</section>

        <div>
          <span class="time">{{ item.time}}</span>
         <!--  <p >like  <span>{{item.like}}</span></p> -->
        </div>
      </div>
    </div>





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
img{width:100%;}
 .time {
 	padding:5px 10px;
    font-size: 13px;
    color: #999;
    background:pink;
    transform:translateX(10);
    &:hover{background:blue;  .time{transform:translateX(10);} }

    &:before{
    	content:"";
    	display:block;
    	width:0px;
		height:0px;
		border-width:15px;
		border-style:solid;
		border-color:transparent pink transparent transparent;
    	float:left;
    }
  }
  
.m-list{margin:0 15%; padding:3% 0; background:#f6f5f4; 
box-shadow:8px 8px 0px rgba(176,174,170,1), 16px 16px 0 rgba(0,0,0,.1); 


}
  .card{
  	padding:15px 10%;
margin-bottom:30px;
  	.card_author{color:skyblue; font-size:16px;}
  	.card_content{padding: 14px;}
  	section{ margin:10px 0; padding-left:20px; border-left:2px solid #ccc;}
  	.card_title{font-size:16px; margin-bottom:15px;}
.card_info{width:70%;  font-size:14px; color:#666;}
  
}
</style>