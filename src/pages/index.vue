<template>
  <div id="app">
    <!--左侧分类-->
      <div class="left fl">
        <div class="class_wrap">
          <h3>全部产品</h3>
          <template v-for="pro in productList">
            <h6>{{pro.classTitle}}</h6>
            <ul class="class_module">
              <li v-for="item in pro.lists">
                <router-link :to="item.url">{{item.title}}</router-link>
                <icon name="fire" class="hot" v-if="item.hot"></icon>
              </li>
            </ul>
          </template>
        </div>
        <div class="class_wrap">
          <h3>最新消息</h3>
            <ul class="class_module news_module" >
              <li v-for="news in newsList">
                <!--动态路由-->
                <router-link :to="'newdetails/'+news.aid"><i class="fa-li fa fa-circle"></i>{{news.title}}</router-link>
              </li>
            </ul>
        </div>
      </div>
    <!--右侧详细-->
      <div class="right fr">
        <!--轮播图-->
        <slide-show :slides="slideShow" :intervalTime="intervalTime"></slide-show>
        <!--产品模块-->
        <div class="pro_wrap">
          <div class="pro_pub" v-for="product in products" :class="['pro_bg_' + product.id]">
            <div class="pro_main">
              <a :href="product.url">
                <h5>{{product.title}}</h5>
                <div class="describe">{{product.describe}}</div>
                <button class="btn">立即购买</button>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script src="../assets/js/index.js"></script>
<style src="../assets/css/index.css" lang="scss"></style>
<style>
  .fa-li{
    font-size: 20px;
    color: pink;
    display: inline-block;
  }
</style>
