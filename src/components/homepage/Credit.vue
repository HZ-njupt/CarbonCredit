<template>
<div class="main">
   <div class="creditbox box"></div>
   <div class="getcredit box"></div>
   <h5 style="text-align:left">最近行程</h5>
   <div class="box journey" ></div>
</div>
</template>


<style scoped>
.main{
    margin:0;
    width:100%;
    text-align: center;
}
  .creditbox{
      height: 14vh;
  }
  .getcredit{
      height: 4vh;
      border-radius: 5px;
  }
  .box{
      margin:auto;
      margin-top:1vh;
      width:95%;
      border-radius: 10px;
      border:solid;
  }
  .journey{
      height:15vh;
      width:90%;
  }
</style>

<script>
export default {
    name:'credit',
}
</script>

