<template>
  <div class="brank_module">
    <h4>请选择支付银行</h4>
    <ul class="brank_box">
      <li v-for="(item,index) in branks"
          :title="item.title"
          :class="[item.icon,{active:nowIndex===index}]"
          @click="selBrank(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              nowIndex:0,
              branks:[
                {title:"招商银行",id:0,icon:'zhaoshang'},
                {title:"建设银行",id:1,icon:'jianshe'},
                {title:"浦发银行",id:2,icon:'pufa'},
                {title:"交通银行",id:3,icon:'jiaotong'},
                {title:"民生银行",id:4,icon:'minsheng'},
                {title:"平安银行",id:5,icon:'pingan'},
                {title:"北京银行",id:6,icon:'beijing'},
                {title:"兴业银行",id:7,icon:'xingye'},
                {title:"广发银行",id:8,icon:'guangfa'},
                {title:"农业银行",id:9,icon:'nongye'},
              ]
          }
      },
    methods:{
      selBrank(index){
          console.log(index)
          this.nowIndex = index
          this.$emit("on-change",)
      }
    }
  }
</script>
<style>
  .brank_module h4{height:38px;line-height:38px;font-size: 16px;color: #333;}
  .brank_box li{width: 117px;height: 32px;margin: 5px;display: inline-block;border: 1px solid #e3e3e3;cursor: pointer;background-image: url("../../assets/banks/banks.png") ;background-repeat: no-repeat}
  .zhaoshang { background-position: -2160px 0; }
  .jianshe { background-position: -720px 0; }
  .pufa { background-position: -1800px 0; }
  .jiaotong { background-position: -3120px 0; }
  .minsheng { background-position: -2760px 0; }
  .pingan { background-position: -2400px 0; }
  .beijing { background-position: -960px 0; }
  .xingye { background-position: 0 0; }
  .shanghai { background-position: -1560px 0; }
  .guangfa { background-position: -840px 0; }
  .gongshang { background-position: -2640px 0; }
  .nongye { background-position: -1680px 0; }
  .guangda { background-position: -2280px 0; }
  .zhongguo { background-position: -2520px 0; }
  .zhongxin { background-position: -480px 0; }
  .chuxu { background-position: -120px 0; }
  .bnongshang { background-position: -1440px 0; }
  .huaxia { background-position: -2040px 0; }
  .snongshang { background-position: -2880px 0; }
  .baifubao { background-position: -1320px 0; }
  .brank_box li.active{border: 1px solid #4fc08d;}
</style>
