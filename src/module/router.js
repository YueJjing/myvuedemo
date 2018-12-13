//引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Index from '../pages/index.vue'
import Detail from '../pages/detail'
import Lists from '../pages/lists'
import NewDetails from '../pages/newDetails'
import PageBrand from '../pages/details/brand'
import PageGroup from '../pages/details/group'
import PageCostume from '../pages/details/costume'
import PageCate from '../pages/details/cate'

//注册路由
Vue.use(VueRouter)
//配置路由
let router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Index,
    },
    {
      path:'/lists',
      component:Lists,
    },
    {
      path:'/detail',
      component:Detail,
      redirect:'/detail/costume',
      children:[
        {
          path:'brand',
          component:PageBrand
        },{
          path:'group',
          component:PageGroup
        },{
          path:'costume',
          component:PageCostume
        },{
          path:'cate',
          component:PageCate
        }
      ]
    },
    {
      path:'/newdetails/:aid',//可以传值
      component:NewDetails
    },
  ]
})
//暴露出接口
export default router;
