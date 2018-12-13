<template>
  <div style="background-color: #fff">
    <div class="des_item_head">
      <h4 style="background-color: #4FC08D;color: #fff;">品牌街</h4>
    </div>
    <!--内容-->
      <div class="brand_content">
        <!--每条数据-->
            <div class="item_wrap" v-for="item in brandList" >
              <div class="item_img">
                <img src="../../assets/background/3.png" alt="">
                <p class="item_title">{{item.title}}</p>
              </div>
            </div>
      </div>
    <!--分页-->
      <div class="page">
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total, prev, pager, next"
            :total="100">
          </el-pagination>
        </div>
      </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            pagesize:20, //每页显示的条数
            currentPage:1 ,//初始页数
            brandList:[],
          }
      },
    methods:{
          //请求数据函数
         requestData(){
           let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+ this.currentPage
//           let api='https://api.0086929.com/server/index.php?g=Web&c=Mock&o=simple&projectID=2&uri=https://app.0086929.com/index/goods/goods_list'
           this.$http.get(api).then((res)=>{
                this.brandList = res.body.result
//                this.brandList = res.data.data.goods.list
             console.log(this.brandList);
           },(err)=>{
                 console.log(err)
           })
         },
         //点击
         handleCurrentChange(currentPage){
            this.currentPage = currentPage;
            this.requestData();
         }
    },
    mounted(){
      this.requestData();
    },
  }
</script>
<style>
  .brand_content{  width: 100%; height: 596px; overflow: hidden; position: relative; background-color: #fff; }
  .item_wrap{ width: 19%; display: inline-block; background-color: pink; margin-right: 1.2%; margin-top: 6px; }
  .item_wrap:nth-child(5n){ margin-right: 0; }
  .item_img{ height: 140px; position: relative; background-color: #4FC08D; }
  .item_img img{ width: 100%; height: 140px; position: absolute; top:0; left: 0; right: 0; bottom: 0;  }
  .item_title{/*width: 100%;*/ height: 38px; line-height: 38px; position: absolute; left: 0; right: 0; bottom: 0; font-size: 16px; text-align: center; color: #fff; background-color: rgba(79,192,141,.8); }
  .item_img:hover .item_title{ height: 140px; line-height: 140px; vertical-align: middle; }
  /*分页*/
  .page{width: 100%;height: 50px;margin: 20px;text-align: center}
</style>
