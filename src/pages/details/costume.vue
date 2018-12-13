<template>
  <div>
    <!--介绍-->
    <div class="des_item_head">
      <h4>秋冬服饰</h4>
      <div class="des_item_details">
        <p>团购热卖的好处是一种商品批发商的价格要比零售商的价格低很多，这得益于批发商使大批量进货，他享受的是厂家的一级代理价格，享受这种价格的前提是必须达到厂家量的要求。所以说，要想低价必须要有量的保证。但是个人在购买某件商品时是不可能达到厂家量的要求的，所以商品的终端购买者——终端客户永远都是多重利润（一级代理，二级代理，终端门店）的受害者。团购要做的就是把零散的终端购买进行组织，最终达到厂家量的要求，使终端消费者享受到一级代理的价格。</p>
      </div>
    </div>
    <!--form-->
    <div class="submit_form" onselectstart="return false">
      <div class="submit_table">
        <div class="st_titele">产品类型：</div>
        <div class="st_data">
          <radio :radioData="radioList" @on-change="paramChange('buyVersion',$event)"></radio>
        </div>
      </div>
      <div class="submit_table">
        <div class="st_titele">产品产地：</div>
        <div class="st_data">
          <pull-down :pullDownData="addOrigin" @on-change="paramChange('buyOrigin',$event)"></pull-down>
        </div>
      </div>
      <div class="submit_table">
        <div class="st_titele">购买品牌：</div>
        <div class="st_data">
          <checkeds :checkData="brands" @on-change="paramChange('buyBrands',$event)"></checkeds>
        </div>
      </div>
      <div class="submit_table">
        <div class="st_titele">购买数量：</div>
        <div class="st_data" @click="changeData">
          <my-number @on-change="paramChange('buyNumber',$event)"></my-number>
        </div>
      </div>
      <div class="submit_table">
        <div class="st_titele">总价：</div>
        <div class="st_data">  {{getSumPrice}}</div>
      </div>
      <!--start:测试state-->
      <div class="submit_table">
        <div class="st_titele">改变state：</div>
        <div class="st_data">
          {{this.$store.state.stateNumber}}
          <button @click="changeData" style="padding: 6px 20px;cursor: pointer;margin-left: 20px;">设置</button>
        </div>
      </div>
      <!--end:测试state-->
      <div class="submit_table">
        <button class="btn" @click="shopBtn">立即购买</button>
      </div>
    </div>
    <!--说明-->
    <div class="des_explain">
      <h4>说明书</h4>
      <table class="table_main">
        <tbody>
        <tr>
          <td>安全安保</td>
          <td>办公文教</td>
          <td>彩票</td>
          <td>车辆物流</td>
          <td>嘿嘿哈嘿</td>
          <td>出版传媒</td>
          <td>电脑硬件</td>
        </tr>
        <tr>
          <td>电子电工</td>
          <td>房地产建筑装修</td>
          <td>分类平台</td>
          <td>服装鞋帽</td>
          <td>箱包饰品</td>
          <td>化工原料制品</td>
          <td>机械设备</td>
        </tr>
        <tr>
          <td>家庭日用品</td>
          <td>家用电器</td>
          <td>教育培训</td>
          <td>节能环保</td>
          <td>金融服务</td>
          <td>礼品</td>
          <td>旅游住宿</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--点击购买后的弹出框-->
    <my-dialog :isShow="isShowDialog" @on-close="onCloseDialog">
      <table class="form_table">
        <tr>
          <th>产品类型</th>
          <th>产品产地</th>
          <th>产品品牌</th>
          <th>产品数量</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{buyVersion.name}}</td>
          <td>{{buyOrigin.name}}</td>
          <td><span v-for="item in buyBrands">{{item.name}}</span></td>
          <td>{{buyNumber}}</td>
          <td>{{getSumPrice}}</td>
        </tr>
      </table>
      <my-brank></my-brank>
      <button class="sum_btn" @click="sumBotton">确认购买</button>
    </my-dialog>
    <!--提交订单之后的状态-->
    <pay-states :isShowStates="ShowPay"></pay-states>
  </div>
</template>
<script>

  import Radio from '../../components/base/radio'
  import PullDown from '../../components/base/pullDown'
  import Checkeds from '../../components/base/checkeds'
  import myNumber from '../../components/base/count'
  import myDialog from '../../components/base/dialog'
  import myBrank from '../../components/base/brank'
  import PayStates from '../../components/base/payStates'
  import _ from 'lodash'
  import store from "../../vuex/store"
  export default{
    components:{Radio,PullDown,Checkeds,myNumber,myDialog,myBrank,PayStates},
    data(){
      return{
//        stateNumber: 0,
        // 2. 定义组件传出后接收的变量
        buyVersion:{},
        buyOrigin:{},
        buyBrands:[],
        buyNumber: 1,
        radioList:[
          {name:'精装服饰', id:0},
          {name:'精品女装', id:1},
          {name:'帅气男装', id:2},
          {name:'可爱童装', id:3},
          {name:'箱包鞋帽', id:4}
        ],
        addOrigin:[
          {name:'北京',id:0},
          {name:'天津',id:1},
          {name:'山东',id:2},
          {name:'河北',id:3},
          {name:'杭州',id:4},
          {name:'广东',id:5},
        ],
        brands:[
          {name:'美邦',id:0},
          {name:'森马',id:1},
          {name:'拉夏贝尔',id:2},
          {name:'cache',id:3},
          {name:'爱居兔',id:4},
        ],
        getSumPrice: 0,
        isShowDialog:false,
        ShowPay:false
      }
    },
    store, //注册
    methods:{
      // 1. 拿到的当前改变的内容
      paramChange( attr ,  val ){
        this[attr] = val
        console.log(attr,this[attr])
        this.getSum()
      },
      getSum(){
          let brandItem = _.map(this.buyBrands, (item) => {
              //遍历数组，拿到里面每一个对象，取到对象里面的name属性值
             return item.id
          })
          //向后台传送参数，通过不同的数值拿到不同的返回值
          let reqParams = {
            selVersion:this.buyVersion.id,
            selOrigin:this.buyOrigin.id,
            selBrand:brandItem.join(","),
            selNumber: this.buyNumber
          }
          // console.log(reqParams)
        this.$http.post('/api/getPrice', reqParams)
          .then((res) => {
            this.getSumPrice = res.data.getPrice.amount
          },(err) => {
            console.log("请求失败")
          })
      },
      shopBtn(){
        this.isShowDialog = true
      },
      onCloseDialog(){
          this.isShowDialog = false

      },
      sumBotton(){
        //选择银行，提交订单后，自动跳转到银行支付页面
        this.onCloseDialog() //隐藏自身
        this.ShowPay = true //显示付款状态
      },
      changeData(){
        this.$store.commit("changeDate")
      }
    },
    mounted(){
      //进入页面首先传给后台一份初始化参数
        this.buyVersion = this.radioList[0],
        this.buyOrigin = this.addOrigin[0],
        this.buyBrands = [this.brands[0]],
        this.buyNumber = 1,
        this.getSum()//页面加载完成首次向后台发送请求
    }
  }
</script>
<style>
  .form_table{width: 100%;}
  .form_table th , .form_table td{width: 19.5%;line-height: 30px;text-align: center;border: 1px solid #e3e3e3;}
  .form_table th{background-color: #4fc08d;color: #fff;}
  .form_table td span{line-height: 22px;display: block;}
  .sum_btn{padding: 6px 20px;background-color: #4fc08d;border: none;color: #fff}
</style>
