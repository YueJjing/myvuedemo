<template>
  <div class="pull_wrap">
    <div class="pull_cur" @click="toggleShow">
      {{pullDownData[curIndex].name}}
      <span class="pull_arrows"></span>
    </div>
    <ul class="pull_data" v-if="isShowData">
      <li v-for="(item,index) in pullDownData" @click="colsePullData(index)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  import {eventBus} from '../../eventBus'
  export default{

      props:{
        pullDownData:{
          type:Array,
          default:[{
              name:'请选择',
            id:0
          }]
        }
      },
      data(){
          return{
            isShowData:false,
            curIndex: 0
          }
      },
    mounted(){
          eventBus.$on("reset-component",() => {
            this.isShowData = false
          })
    },
    methods:{
      toggleShow(event){
         event.stopPropagation()
         eventBus.$emit("reset-component")
          this.isShowData = !this.isShowData
      },
      colsePullData(index){
          this.curIndex = index
          this.isShowData = false
          this.$emit("on-change",this.pullDownData[this.curIndex])
      }
    }
  }
</script>
<style>
  .pull_wrap{display:inline-block;position: relative;background-color: #fff}
  .pull_cur{width:70px;position: relative;padding:6px 18px 6px 12px ;text-align: left;border: 1px solid #e3e3e3;font-size: 13px;color: #333;cursor:pointer;}
  .pull_arrows{position:absolute;right:6px;top:50%;margin-top:-3px;width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-top: 6px solid #e3e3e3;}
  .pull_data{width:100%;position: absolute;top:31px;left: 0;font-size: 13px;text-align:center;border: 1px solid #e3e3e3;border-top:none;background-color: #fff;}
  .pull_data li{width: 100%;line-height:26px;cursor:pointer;}
  .pull_data li:hover{background-color: #e3e3e3}
</style>
