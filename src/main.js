// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './module/router.js'
import Layout from './components/base/layout'
//引入公共样式
import "./assets/css/base.scss"
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//awesome字体图标库
import Icon from"vue-awesome/components/Icon"
import "vue-awesome/icons/index.js"
Vue.component('icon', Icon);
//resource 请求数据
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components:{Layout},
  template: '<layout/>'

})
