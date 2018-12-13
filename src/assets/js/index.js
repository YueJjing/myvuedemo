/**
 * Created by Administrator on 2018/11/9.
 */
import slideShow from '../../components/slideShow'
export default {
  components:{slideShow},
  data(){
    return{
      intervalTime:2000,
      productList:{
        liuliang:{
          classTitle:"好货推荐",
          lists:[
            {title:"品牌街", value:0,hot: false,url:'detail/brand'},
            {title:"团购热卖", value:1,hot: false,url:'detail/group'},
            {title:"秋冬服饰", value:2,hot: true,url:'detail/costume'},
            {title:"todoList", value:3,hot: false,url:'detail/cate'}
          ]
        },
        app:{
          classTitle:"手机应用",
          lists:[
            {title:"百度地图", value:0,url:''},
            {title:"手机管家", value:1,url:''},
            {title:"腾讯软件", value:2,url:''},
            {title:"美图软件", value:3,url:''}
          ]
        }
      },
      newsList:[],
      slideShow:[
        {
          src:require('../slideShow/1.jpg'),
          title:"第一张幻灯片",
          url:'https://www.baidu.com'
        },
        {
          src:require('../slideShow/2.jpg'),
          title:"第二张幻灯片",
          url:'https://www.baidu.com'
        },
        {
          src:require('../slideShow/3.jpg'),
          title:"第三张幻灯片",
          url:'https://www.baidu.com'
        },
        {
          src:require('../slideShow/4.jpg'),
          title:"第四张幻灯片",
          url:'https://www.baidu.com'
        }
      ],
      products:[
        {
          title:'品牌街',
          describe:"拥有全球最高档高端大气的品牌",
          id:1,
          url:'detail/brand'
        },
        {
          title:'团购热卖',
          describe:"多人成团，成团后享受折扣价格",
          id:2,
          url:'detail/group'
        },
        {
          title:'秋冬服饰',
          describe:"冰冻白雪，及其寒冷，穿个貂就不冷了嗷",
          id:3,
          url:'detail/costume'
        },
        {
          title:'todoList',
          describe:"简单模拟todoList功能",
          id:4,
          url:'detail/cate'
        }
      ]
    }
  },
  mounted(){
    //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
    // mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
    let api= "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"
    this.$http.get(api).then((res) => {
       console.log(res)
        this.newsList = res.body.result
      },(err) => {
        console.log("请求错误")
      })
  }
}
