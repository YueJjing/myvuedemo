<template>
  <div class="swiper_wrap" @mouseenter="stopGoto" @mouseleave="runGoto">
    <!--banner图-->
    <div class="swiper_img">
      <transition name="slide-new" >
        <img :src="slides[curIndex].src" alt="" v-if="isShow">
      </transition>
      <transition name="slide-old" >
        <img :src="slides[curIndex].src" alt="" v-if="!isShow">
      </transition>
    </div>
    <!--标题-->
    <h3 class="swiper_title">{{slides[curIndex].title}}</h3>
    <!--页码-->
    <ul class="pagestion" >
      <li @click="goto(gotoPrev)"> &lt; </li>
      <li v-for="( item , index ) in slides" :class="{ activePage : curIndex === index }" @click="goto(index)">
        <a>{{ index + 1 }}</a>
      </li>
      <li @click="goto(gotoNext)"> &gt; </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      slides:{
        type:Array,
        default:[]
      },
      intervalTime:{
        type:Number,
        default: 2000
      }
    },
    data(){
      return{
        curIndex:0,
        isShow:true
      }
    },
    computed:{
      //上一张
      gotoPrev(){
        if(this.curIndex === 0){
          return this.slides.length - 1
        }else{
          return this.curIndex - 1
        }
      },
      //下一张
      gotoNext(){
        if(this.curIndex === this.slides.length - 1){
          return 0
        }else{
          return this.curIndex + 1
        }
      }
    },
    methods:{
      goto(index){
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.curIndex = index
        },10)

      },
      runGoto(){
        this.setId = setInterval(() => {
          this. goto(this.gotoNext)
        },this.intervalTime)
      },
      stopGoto(){
        clearInterval(this.setId)
      }
    },
    mounted(){
      this.runGoto()
    }
  }
</script>

<style scoped>
.slide-new-enter-active{
  transition: all 0.5s;
}
.slide-new-enter {
  transform: translateX(100%);
}
.slide-old-leave-active{
  transition: all 0.5s;
  transform: translateX(-100%);
}
  .swiper_wrap{
    width: 960px;
    height: 500px;
    position: relative;
    overflow: hidden;
  }
  .swiper_img{
    width: 100%;
  }
  .swiper_img img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    cursor: pointer;
  }
.swiper_title{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  padding: 0 10px;
  font-size: 14px;
  color: #fff;
  z-index: 2;
}
  .pagestion{
    position: absolute;
    width: 100%;
    height: 38px;
    text-align: right;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.4);
  }
  .pagestion li{
    width: 38px;
    line-height: 38px;
    display: inline-block;
    font-size: 16px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
.pagestion li a{
  width: 26px;
  line-height: 26px;
  display: inline-block;
  color: #fff;
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
li.activePage a{
  background-color: #4FC08D;
}
</style>
