<template>
<div>
   <mt-header title="">
    <router-link to="/" slot="left">
     <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
   <credit></credit>
   <!-- <commodity ></commodity> -->
   <mt-tabbar>
   <mt-tab-item id="mainpage">
    <img slot="icon" >首页
   </mt-tab-item>
   <mt-tab-item id="store">
    <img slot="icon" > 商城
   </mt-tab-item>
   <mt-tab-item id="friends">
    <img slot="icon" >圈子
   </mt-tab-item>
   <mt-tab-item id="personal">
    <img slot="icon" >个人中心
  </mt-tab-item>
</mt-tabbar>
</div>
</template>


<style scoped>

</style>


<script>
// import mock from '@/mock/index.js';
// import Cookies from 'js-cookies';
// import router from '@router';
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
import credit from './homepage/Credit'
import commodity from './store/Commodity'
export default {
  name: 'MainPage',
  components: {
      'credit' : credit ,
      'commodity' : commodity,
  },
  data () {
    return {
    }
  }
}
</script>

