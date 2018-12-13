<template>
  <div>
    <h5 style="font-size: 22px;margin-top: 20px;">新闻标题: {{newsText.title}}</h5>
    <div v-html="newsText.content"></div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            newsText:[]
          }
      },
    methods:{
          requresData(id){
            let api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+ id
            console.log(id)
            this.$http.get(api).then((res)=>{
                this.newsText = res.body.result[0]
                console.log(res.body.result)
            },(err)=>{
                console.log(err)
            })
          }
    },
    activated(){
      let id = this.$route.params.aid
      console.log(id)
      this.requresData(id)
    }
  }
</script>
