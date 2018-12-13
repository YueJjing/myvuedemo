<template>
  <div class="dialog">
    <div class="dialog_float" v-if="isShow" @click="closeMySelf"></div>
    <transition name="drop">
    <div class="dialog_main" v-if="isShow">
      <div class="close fr" @click="closeMySelf">×</div>
      <slot></slot>
    </div>
    </transition>
  </div>
</template>
<script>
  export default{
    props: {
      isShow:{
        type:Boolean,
        default: false
     }
   },
   data(){
          return{}
      },
    methods:{
      closeMySelf(){
          this.$emit("on-close")
      }
    }
  }
</script>
<style>
  .drop-enter-active{
    transition: all 0.3s ease;
  }
  .drop-leave-active{
    transition: all 0.5s ease;
    transform: translateY(-500px);
  }
  .drop-enter{
    transform: translateY(-500px);
  }
  .dialog{
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .dialog_float{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0,0,0,0.3);
  }
  .dialog_main{
    width: 50%;
    min-height: 20%;
    background-color: #fff;
    border: 2px solid #464060;
    position: fixed;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    padding: 2%;
    z-index: 4;
  }
  .close{
    width: 30px;
    height: 30px;
    line-height: 40px;
    font-size: 22px;
    color: #363636;
    cursor: pointer;
    text-align: center;
    position: absolute;
    top:0;
    right: 0;

  }
  .table_line{
    width: 100%;
    height: 50px;
  }
  .checkbox{margin-left:100px;vertical-align: middle;}
  .table_line p{
    width: 150px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    color: orangered;
  }
  .table_info{
    display: inline-block;
  }
  .table_info span{
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .table_info input[type='text'] ,
  .table_info input[type='password']{
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 6px;
    font-size: 16px;
    border: 1px solid #ccc;
  }

  .button{
    font-size: 16px;
    color: #fff;
    padding: 10px 30px;
    background-color: #4fc08d;
    border:none;
    margin-left: 100px;
    cursor: pointer;
  }
</style>
