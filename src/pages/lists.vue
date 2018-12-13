<template>
    <div class="lists_box">
      <h3>您的产品</h3>
      <div class="time_filter"><!--filter 过滤器，筛选-->
        <div class="time_line">
          选择产品
          <pull-list :pullDownData="brands" @on-change="paramChange"></pull-list>
        </div>
        <!--<div class="time_line">-->
          <!--选择产品2-->
          <!--<pull-list :pullDownData="brands" @on-change="paramChange"></pull-list>-->
        <!--</div>-->
        <div class="time_line">
          开始日期：
          <date-picker v-model="startTime"
                       placeholder="选择日期"
                       :first-day-of-week="7"
                       type="date"
                       :editable="editable"
                       @change="changeStartTime"
                       value-format="YYYY-MM-DD"
          >
          </date-picker>
        </div>
        <div class="time_line">
          结束日期：
          <date-picker v-model="endTime"
                       placeholder="选择结束日期"
                       :first-day-of-week="7"
                       @change="changeEndTime"
                       editable>
          </date-picker>
        </div>
        <div class="time_line">
          关键词：
          <input type="text" v-model.lazy="keywords" placeholder="请输入关键词" class="keywords">
        </div>
      </div>
      <table class="table">
        <tr>
          <th v-for="head in tableHeads"
              @click="changeSorting(head)"
              :class="{active:head.active}"><!--传入的head是实际参数-->
            {{head.label}}</th>
        </tr>
        <tr v-for="item in tableData">
          <td v-for="head in tableHeads">{{item[head.key]}}</td>
        </tr>
      </table>
    </div>
</template>
<script>
  import PullList from "../components/base/pullDown"
  import DatePicker from "vue2-datepicker"
  import _ from "lodash"
    export default{
      components:{PullList,DatePicker},
      data(){
            return {
              brands:[
                {name:'美邦',id:0},
                {name:'森马',id:1},
                {name:'拉夏贝尔',id:2},
                {name:'cache',id:3},
                {name:'爱居兔',id:4},
              ],
              tableHeads:[
                {label: '订单号', key: 'orderId'},
                {label: '购买产品', key: 'product'},
                {label: '版本类型', key: 'version'},
                {label: '有效时间', key: 'period'},
                {label: '购买日期', key: 'date'},
                {label: '数量', key: 'buyNum'},
                {label: '总价', key: 'amount'}
              ],
              productId:0,
              keywords:'',//关键词
              startTime: '',//开始时间
              endTime:'',//结束时间
              tableData:[],
              editable:false,
              currentOrder: 'asc'
            }
        },
      watch:{
        keywords(){
          this.getLists()
        },
      },
      methods:{
        //获取产品类别，获取id
        paramChange(obj){
          this.productId = obj.id
          this.getLists()
        },
        //查询开始时间
        changeStartTime(val){
            this.startTime = this.changeTime(val);
            this.getLists()
        },
        //查询结束时间
        changeEndTime(val){
          this.endTime = this.changeTime(val)
          this.getLists()
        },
        //请求数据
        getLists(){
          let params = {
            productId : this.productId,
            keywords: this.keywords,//关键词
            startTime: this.startTime,//开始时间
            endTime: this.endTime,//结束时间
          }
         this.$http.post("/api/getOrderList",params)
        .then( (res) => {
          this.tableData = res.data.lists.list
        },(err) => {
          console.log("请求失败")
        })
        },
        //排序
        changeSorting(headItem){
          this.tableHeads.map((item) => {
               item.active = false
               return item
           })
          headItem.active = true
          if(this.currentOrder === 'asc'){
              this.currentOrder = 'desc'
          }
          else if(this.currentOrder === 'desc'){
            this.currentOrder = 'asc'
          }
          this.tableData =_.orderBy(this.tableData,headItem.key,this.currentOrder)
        },
        //转换时间格式
        changeTime(val){
          let year = val.getFullYear().toString();
          let month = val.getMonth() >= 9
            ? (val.getMonth() + 1).toString()
            : "0" + (val.getMonth() + 1);
          let date = val.getDate() >= 9
            ? val.getDate().toString()
            : "0" + val.getDate();
          return year + "-" + month + "-" + date;
        }
      },
      mounted(){
        this.getLists()
    }
    }
</script>
<style>
  .lists_box h3{height:38px;line-height:38px;font-size: 16px;font-weight: 700;}
  .time_filter{height:50px;}
  .time_line{display: inline-block;margin-right:20px;font-size: 14px;}
  .table{width: 100%;border-collapse:collapse; }
  .table th{padding:10px 0;text-align:center;font-weight:400;background-color: #4fc08d;color: #fff;cursor:pointer;}
  .table td{padding:10px 0;text-align:center;font-weight:400;color: #333;border:1px solid #e3e3e3;background-color: #fff;cursor:pointer;}
  .table th.active{background-color: green}
  .keywords{width:160px;height:30px;line-height:30px;padding:0 10px;border:none;overflow: hidden;}
  .mx-panel-date td.today{background-color: #e3e3e3}
</style>
