<template>
    <div>
      <my-dialog :isShow="isShowStates">
        <div class="pay_box">
          请选择您的支付状态
          <button @click="successStates">支付成功</button>
          <button @click="defeatedStates">支付失败</button>
        </div>
      </my-dialog>
      <my-dialog :isShow="isShowSuccess" @on-close="myCloseRouter">
        <div>购买成功</div>
      </my-dialog>
      <my-dialog :isShow="isShowDefeated" @on-close="myCloseRouter">
        <div>购买失败</div>
      </my-dialog>
    </div>
</template>
<script>
  import myDialog from '../../components/base/dialog'
    export default{
      components:{myDialog},
      props:{
        isShowStates:{
            type:Boolean,
            default:true
          }
      },
      data(){
            return {
              isShowSuccess:false,
              isShowDefeated:false,
            }
      },
      methods:{
        successStates(){
          this.isShowSuccess = true
          this.isShowDefeated = false
        },
        defeatedStates(){
          this.isShowDefeated = true
          this.isShowSuccess = false
        },
        myCloseRouter(){
            this.$router.push({path:"/lists"})
        }
      }
    }
</script>
<style>
.pay_box button{display:inline-block;padding:6px 20px;color:#fff;background-color:#4fc08d;border:none;}
</style>
