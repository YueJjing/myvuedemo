<template>
    <div class="count_wrap">
      <div class="minus" @click="minusNumber">-</div> <!--:class="{prohibit:mProhibit}"-->
      <input type="text" class="count_num" v-model="number" @keyup="verification">
      <div class="add" @click="addNumber">+</div> <!--:class="{prohibit:aProhibit}"-->

    </div>
</template>

<script>
  //引入vuex
  import store from "../../vuex/store"
    export default {
      props:{
        minNum:{
          type:Number,
          default:1
        },
        maxNum:{
          type:Number,
          default:5
        }
      },
        data(){
          return{
            number:this.minNum
          }
        },
      store, //注册
      watch:{
        number(){
          this.$emit("on-change",this.number)
        }
      },
      methods:{
        verification(){//verification 验证 查证 核实
          let fix
          if(typeof this.number === 'string'){//输入内容类型是否为字符串
            fix = this.number.replace(/\D/g,'')
          }else{
              fix = this.number
          }
          if(fix >=this.maxNum || fix <= this.minNum){
             fix = this.minNum
          }
          return this.number = fix
        },
        minusNumber(){
          if(this.number === this.minNum){
            // this.mProhibit = true
            return this.minNum
          }else{
            return this.number --
          }
        },
        addNumber(){
          if(this.number === this.maxNum){
            // this.aProhibit = true
            return this.maxNum
          }else{
            return this.number ++
          }
        }
      }
    }
</script>

<style scoped>
.count_wrap{display:inline-block;border: 1px solid #e3e3e3;vertical-align: top; }
.count_num{width:60px;display:inline-block;text-align:center;border:none;}
  .minus,.add{width: 30px;height: 30px;display:inline-block;line-height: 30px;text-align: center;font-size: 18px;color: #333;cursor:pointer;}
  .minus{border-right:1px solid #e3e3e3;}
  .add{border-left:1px solid #e3e3e3}
  .minus:hover,.add:hover{background-color: #4FC08D;color:#fff }
</style>
