<template>
<div class="page">
   <mt-header title="">
    <router-link to="/" slot="left">
     <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
   <!-- <credit></credit> -->
   <commodity v-if="$store.state.showStore"></commodity>
   <mt-tabbar v-model="selected">
   <mt-tab-item id="mainpage">
    <img slot="icon" >首页
   </mt-tab-item>
   <mt-tab-item id="store">
    <img slot="icon" > 商城
   </mt-tab-item>
   <mt-tab-item id="friends">
    <img slot="icon">圈子
   </mt-tab-item>
   <mt-tab-item id="personal">
    <img slot="icon" >个人中心
  </mt-tab-item>
</mt-tabbar>
</div>
</template>


<style scoped>
   .page{
     display: flex;
     flex-direction: column
   }
</style>


<script>
import mock from '@/mock/index.js';
import axios from 'axios'
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
      selected: sessionStorage.getItem('selected')? JSON.parse(sessionStorage.getItem('selected')):'首页'
    }
  },
  methods:{
    
  },
  watch: {
      selected(val, oldVal){
          //一旦标签栏变化，把selected的值存到sessionStorage，保存当前值
          sessionStorage.setItem('selected', JSON.stringify(val))
          
          if(val === 'friends'){
                   
          }else if(val === "store"){
              this.$store.commit('GetStore')           
          }
          else{
            
          }
      }
  },
}
</script>

