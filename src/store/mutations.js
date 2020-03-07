import axios from 'axios'
import mock from '@/mock/index.js';

const mutations = {
    GetStore(state){
       axios.get('http://localhost:8081/store')
       .then((res)=>{
          state.StoreList=res.data.data;
          state.showStore='true',
          state.showHome='false'
       }).catch((res)=>{
         alert(res);
       });
    },

    GetCredit(state){
      axios.get('http://localhost:8081/credit')
      .then((res)=>{
         state.CreditList=res.data.data;
         state.showStore='false',
         state.showHome='true'
      }).catch((res)=>{
        alert(res);
      });
   },
   GetJourney(state){
      axios.get('http://localhost:8081/journey')
      .then((res)=>{
         state.JourneyList=res.data.data;
         state.showStore='false',
         state.showHome='true'
      }).catch((res)=>{
        alert(res);
      });
   }
}
  
export default mutations