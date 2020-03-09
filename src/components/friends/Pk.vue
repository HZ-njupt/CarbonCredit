<template>
   <div>
       <div class="pkline">
          <div class="pk"></div>
          <div class="pk"></div>
       </div>
       <div class="pkline user1">
           <div class="userone">
             <img src="#" alt="user1" class="userH">
             <span>50</span>
           </div>
           <div class="userone">
             <span>50</span>
             <img src="#" alt="user2" class="userH">
            </div>
       </div>
       <div v-for="(item , index) in $store.state.FriendsList" :key="index">
         <div class="usercard">
          <img src="#" alt="" class="userpic">
          <p class="name user">{{item.name}}</p>
          <p class="user credit">{{item.credit}}</p>
         </div>
       </div>
   </div>
</template>

<style scoped >
  .userpic{
     position: relative;
     border: solid;
     border-radius: 50%;
     height:5vh;
     width:5vh;
     margin:auto 1vh;
  }
  .usercard{
      border: solid;
     border-radius: 10px;
     display:flex;
     flex-direction: row;
     height: 8vh;
     width:85%;
     margin:1vh auto;
  }
  .user{
      font-size: 25px;
      margin:auto;
  }
  .name{
      margin-left:10px;
  }
  .pkline{
     display:flex;
     flex-direction: row; 
     width:95%;
     margin:2vh auto;
  }
  .pk{
     border: solid;
     width: 50%;
     height: 3vh;
     
  }
  .userH{
      position: relative;
      width:5vh;
      height: 5vh;
      border:solid;
      border-radius: 10px;
      margin:auto 1vh;
  }
  .userone{
   height: 8vh;
   width:50%;
   margin:auto;
  }
      
</style>
   
<script>
//import friends from './friends/FriendsMessage'
export default {
    name:'pk',
    data(){
       return {

       }
    },
}
</script>