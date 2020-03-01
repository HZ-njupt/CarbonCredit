<template>
   <div class="store">
       <div v-for="(item , index) in $store.state.StoreList" :key="index" class="commodity">
           <img :src="item.pic" alt="picture" v-lazy="item">
           <p>{{item.name}}</p>
           <p>{{item.discripe}}</p>
           <p>{{item.time}}</p>
           <p>{{item.credit}}</p>
           <p>{{item.deal}}</p>
       </div>
   </div>
</template>

<style scoped>
 .commodity{
    display : flex;
    flex-direction : column;
    border:solid;
    width:45%;
    height: 33vh;
    margin-left:2%;
    margin-top:1vh;
    border-radius: 10px;
    overflow: hidden;
 }
 .store{
     display: flex;
     flex-direction: row;
     flex-wrap:wrap;
     justify-content:flex-start;
     width:98%;
     margin:auto;
     overflow: hidden;
     
 }
</style>

<script>
export default {
    name:'commodity',
    data(){
        return{
            List:[],
        }
    },
 
  

}
</script>