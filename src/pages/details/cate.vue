<template>
  <div>
    <!--介绍-->
    <div class="des_item_head">
      <h4>简单模拟todolist</h4>
      <div class="des_item_details">
        <p>高效率 慢生活 跟上时间的步伐 做时间的主人！-------todolist</p>
      </div>
    </div>
     <div class="m" style="background-color: #fff">
        <div class="addtodo">
          <input type="text" v-model="value" placeholder="请输入您需要记录的事情">
          <button @click="add($event)">增加</button>
        </div>
        <div class="tudo">
          <h4>待办事项</h4>
          <ul>
            <li v-for="(item,index) in todoList" v-if="!item.checked" @change="changeData()">
              <input type="checkbox" v-model="item.checked">
              <p>{{item.title}}</p>
              <button class="del" @click="remove(index)">删除</button>
            </li>
          </ul>
        </div>
        <div class="tudo">
          <h4>已办事项</h4>
          <ul>
            <li v-for="(item,index) in todoList" v-if="item.checked" @change="changeData()">
              <input type="checkbox" v-model="item.checked">
              <p>{{item.title}}</p>
              <button class="del" @click="remove(index)">删除</button>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
  import storage from '../../module/storage'
  export default {
    data(){
      return{
        ok:false,
        value:'',
        todoList:[],  //数据
      }
    },
    methods:{
      //添加到列表
      add(e){
        if(this.value !== ""){
          this.todoList.push({title:this.value,checked:false})
          storage.setStorage("list",this.todoList)
        }
        this.value = ""
      },
      //从列表删除
      remove(idx){
        this.todoList.splice(idx,1)
        storage.setStorage("list",this.todoList)
      },
      changeData(){
        storage.setStorage("list",this.todoList)
      }
    },
    mounted(){
      //parse将JSON字符串转换成为JSON对象输出
      var list = storage.getStorage("list")
      if(list){
        this.todoList = list
      }
    }
  }
</script>
<style type="text/css" lang="scss" src="../../assets/css/todolist.scss"></style>
