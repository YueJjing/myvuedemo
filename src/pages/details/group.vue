<template>
  <div>
    <!--介绍-->
    <div class="des_item_head">
      <h4>团购热卖</h4>
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
        <div class="st_data">
          <my-number @on-change="paramChange('buyNumber',$event)"></my-number>
        </div>
      </div>
      <div class="submit_table">
        <div class="st_titele">总价：</div>
        <div class="st_data">  {{getSumPrice}}</div>
      </div>
      <!--start:测试state-->
      <div class="submit_table">
        <div class="st_titele">获取state：</div>
        <div class="st_data">  {{this.$store.state.stateNumber}}</div>
      </div>
      <!--end:测试state-->
      <div class="submit_table">
        <button class="btn" @click="shopBtn">立即购买</button>
      </div>
    </div>
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
  //引入vuex
  import store from "../../vuex/store"
  export default{
    components:{Radio,PullDown,Checkeds,myNumber,myDialog,myBrank,PayStates},
    data(){
      return{
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
    store,
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
      }
    },
    mounted(){
      //进入页面首先传给后台一份初始化参数
      this.buyVersion = this.radioList[0],
        this.buyOrigin = this.addOrigin[0],
        this.buyBrands = [this.brands[0]],
        this.buyNumber = 1,
        this.getSum()//页面加载完成首次向后台发送请求
    },
  }
</script>
<style>

</style>
