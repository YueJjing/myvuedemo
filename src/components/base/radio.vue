<template>
    <div>
      <ul class="radio_wrap">
        <li :class="{active: curRadio === index}"
            @click="radioAction(index)"
            v-for="(radio,index) in radioData">
          {{radio.name}}</li>
      </ul>
    </div>
</template>
<script>
    export default {
      props:{
        radioData:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{
          curRadio:0
        }
      },
      methods:{
        radioAction(index){
          this.curRadio = index
          this.$emit("on-change",this.radioData[index])
        },
      }
    }
</script>

<style scoped>
  .radio_wrap{width: 100%;}
  .radio_wrap li{display:inline-block;padding:6px 20px;margin-right:14px;font-size: 13px;color: #333;border: 1px solid #e3e3e3;border-radius: 5px;-webkit-border-radius: 5px;cursor: pointer;}
  .radio_wrap .active{color:#fff;background-color: #4FC08D;border: 1px solid #4FC08D;}
</style>
