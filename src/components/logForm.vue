<template>
  <div class="">
    <div class="table_line">
      <div class="table_info">
        <span>用户名:</span>
        <input type="text" v-model="username" placeholder="请输入用户名">
      </div>
      <p class="error">{{ userErrors.errorText }}</p>
    </div>
    <div class="table_line">
      <div class="table_info">
        <span>密码:</span>
        <input type="password" v-model="password">
      </div>
      <p class="error">{{ PasswordErrors.errorText }}</p>
    </div>
    <div class="table_line">
      <input type="checkbox" v-model="checked" class="checkbox" @click="storageData()"><span>记住密码</span>
    </div>
    <div class="table_line">
      <button class="button" @click="onLogin">登录</button>
    </div>
    <p class="error">{{errorText}}</p>
  </div>
</template>
<script>
  //引入本地存储组件
  import storage from "../module/storage"
  export default{
      data(){
          return{
            username:'',
            password:'',
            errorText:'',
            checked: false
          }
      },
    computed:{
      userErrors(){
        let errorText,status
        if(!/@/g.test(this.username)){
              status = false
              errorText = "不含@"
        }else{
            status = true
            errorText = ''
        }
        if(!this.userFlag){
            errorText = ''
            this.userFlag = true
        }
        return {
            status,
            errorText
        }
      },
      PasswordErrors(){
        let errorText,status
        if(!/^\w{4,6}$/g.test(this.password)){
          status = false
          errorText = "密码应该为4~6位"
        }else{
          status = true
          errorText = ''
        }
        if(!this.passwordFlag){
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }

      }
    },
    methods:{
          //登录操作
          onLogin(){
              if(!this.userErrors.status || !this.PasswordErrors.status){
                  this.errorText = '验证不通过'
              }else{
                this.errorText = ''
                this.$http.post('/api/login')
                  .then((res) => {
                    this.$emit("on-login",res.data)
                  },(err) => {
                      console.log("请求失败")
                  })
              }
          },
          //记住密码,使用localStorage本地存储功能
         storageData(){
           this.checked = !this.checked
           if(this.checked){
                let data={
                    username:this.username,
                    password:this.password
                }
                //使用封装好的方法
              storage.setStorage("storageData",data)
            }
         }
    }
  }







//  export default {
//    data () {
//      return {
//        usernameModel: '',
//        passwordModel: '',
//        errorText: ''
//      }
//    },
//    computed: {
//      userErrors () {
//        let errorText, status
//        if (!/@/g.test(this.usernameModel)) {
//          status = false
//          errorText = '不包含@'
//        }
//        else {
//          status = true
//          errorText = ''
//        }
//        if (!this.userFlag) {
//          errorText = ''
//          this.userFlag = true
//        }
//        return {
//          status,
//          errorText
//        }
//      },
//    }
//    }
</script>
