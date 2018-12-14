<template>
  <div @click="resetComponent">
    <!--头部-->
    <div class="header" >
      <div class="m">
        <router-link to="/">
          <!--<img src="../../assets/logo.png" alt="">-->
        <i class="el-icon-loading" style="line-height:100px;color: #efc70d;font-size: 70px;margin-left: 10px;"></i>
        </router-link>
        <ul class="ul_h fr nav-list">
          <li v-if="username != ''">{{ username }}</li>
          <li v-if="username != ''">|</li>
          <li v-if="username === ''" @click="toggleLogForm" >登录</li>
          <li v-if="username === ''">|</li>
          <li v-if="username === ''" @click="toggleRegForm">注册</li>
          <li v-if="username != ''">退出</li>
          <li>|</li>
          <li @click="toggleAboutForm">关于我们</li>
        </ul>
      </div>
    </div>
    <!--主体内容-->
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!--底部-->
    <div class="footer">
      <p>© 2016 fishenal MIT</p>
    </div>
    <!--弹出框-->
    <my-dialog :is-show="isShowLogForm" @on-close="closeMySelf('isShowLogForm')">
      <log-form @on-login="successLogin"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegForm" @on-close="closeMySelf('isShowRegForm')">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :is-show="isShowAboutForm" @on-close="closeMySelf('isShowAboutForm')">
      <p>Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
    </my-dialog>
  </div>
</template>
<script>
  import { eventBus } from '../../eventBus'
  import myDialog from './dialog'
  import LogForm from '../logForm'
  import RegForm from '../regForm'
  export default{
      components:{myDialog,LogForm,RegForm},
      data(){
          return{
              isShowLogForm:false,
              isShowRegForm:false,
              isShowAboutForm:false,
              username:''
          }
      },
    methods:{
      toggleLogForm(){
          this.isShowLogForm = true
      },
      toggleRegForm(){
          this. isShowRegForm = true
      },
      toggleAboutForm(){
        this.isShowAboutForm = true
      },
      closeMySelf(attr){
          this[attr] = false
      },
      successLogin(data){
          this.username = data.login.username
          this.closeMySelf('isShowLogForm')
      },
      resetComponent(){
          eventBus.$emit("reset-component")
      }
    }
  }
</script>
<style lang="scss" src="../../assets/css/tf.scss"></style>
