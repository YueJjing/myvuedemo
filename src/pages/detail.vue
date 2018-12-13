<template>
  <div class="des_wrap">
    <div class="des_left">
      <div class="des_img"><img :src="detailIcon" alt=""></div>
      <ul class="des_class">
        <template v-for="item in products">
          <router-link tag="li" :to='{path: item.path}' >{{item.name}}</router-link>
        </template>
      </ul>
    </div>
    <div class="des_right">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            isShow:true,
            products: [
              {
                name: '品牌街',
                path: 'brand',
                active: false
              },
              {
                name: '团购热卖',
                path: 'group',
                active: false
              },
              {
                name: '秋冬服饰',
                path: 'costume',
                active: false
              },
              {
                name: 'todolist',
                path: 'cate',
                active: false
              }
            ],
            imgMap: {
              '/detail/brand': require("../assets/background/1.png"),
              '/detail/group': require("../assets/background/2.png"),
              '/detail/costume': require("../assets/background/3.png"),
              '/detail/cate': require("../assets/background/4.png")
            }
          }
      },
    computed:{
      detailIcon(){
         return this.imgMap[this.$route.path]
      }
    },
  }
</script>
<style>
  .des_wrap{width: 1200px;margin: 0 auto;padding: 10px 0;overflow: hidden;}
  .des_left{width: 200px;padding: 20px 0;float: left;margin-right: 20px;box-sizing: border-box;-webkit-box-sizing: border-box;background-color: #fff;}
  .des_img{width: 100px;height: 100px;margin: 0 auto;border-radius: 50%;-webkit-border-radius: 50%;overflow: hidden;}
  .des_class{margin-top: 20px;}
  .des_class li{height: 38px;line-height: 38px;padding-left: 20px;font-size: 16px;color: #333;cursor:pointer;}
  .des_class li:hover {color: #fff;background-color: #4FC08D;}
  .des_class .router-link-active{
   color: #fff; background-color: #4FC08D;}
  .des_right{width: 980px;float: left;}
  .des_item_head{background-color: #fff; }
  .des_item_head h4 ,.des_explain h4{height: 60px; line-height: 60px; padding: 0 20px; font-size: 20px; color: #333; overflow: hidden; }
  .des_item_details{padding: 20px; background-color: #f7fcff; }
  .des_item_details p{line-height: 22px; font-size: 14px; color: #999; }
  .submit_form{padding: 20px; background-color: #fff; }
  .submit_table{vertical-align: top}
  .st_titele{width: 100px;height: 38px;line-height: 38px; display: inline-block;font-size: 15px; }
  .st_data{width: 80%;height: 38px;display: inline-block}
  .des_explain{margin-top:20px;background-color: #fff;padding: 20px;}
  .des_explain td{font-size:14px;padding: 10px 30px;border: 1px solid #999;}
  .btn{display:inline-block;padding: 6px 20px;margin-left:100px;background-color: #4fc08d;color: #fff;font-size: 16px;border:0;cursor:pointer;}
</style>
