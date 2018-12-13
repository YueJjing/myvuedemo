<template>
  <div class="check_wrap">
    <ul>
      <li :class="{active:selecActive(index)}"
          v-if=""
          v-for="(item,index) in checkData"
          @click="toggleStatus(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  import _ from 'lodash'
  export default{
      props:{
        checkData:{
            type:Array,
            default:[{
              name:'text',
              id:0
            }]
          }
      },
      data(){
          return{
              isChecked:false,
              curIndex:[0]
          }
      },
    methods:{
      toggleStatus(index){
          if(this.curIndex.indexOf(index) === -1) {//大于-1表示包含  等于-1表示不包含
            this.curIndex.push(index) //点击选项不在数组里面，就添加进去
        }else if(this.curIndex.indexOf(index) > -1){
              this.curIndex=_.remove(this.curIndex,(idx)=>{//点击选项在数组里面，就删除
                  return idx !== index
              })
          }
          let nowObject=_.map(this.curIndex,(idx) =>{
           return this.checkData[idx] //遍历选中的index数组，通过index拿到选中的选择
          })
          this.$emit("on-change", nowObject)
      },
      selecActive(index){
          return this.curIndex.indexOf(index) !== -1
      }
    }
  }
</script>
<style>
  .check_wrap{width: 100%;}
  .check_wrap li{display:inline-block;padding:6px 20px;margin-right:14px;font-size: 13px;color: #333;border: 1px solid #e3e3e3;border-radius: 5px;-webkit-border-radius: 5px;cursor: pointer;}
  .check_wrap .active{color:#fff;background-color: #4FC08D;border: 1px solid #4FC08D;}
</style>
