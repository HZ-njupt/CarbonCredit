import axios from 'axios'
import mock from '@/mock/index.js';

const mutations = {
    GetStore(state){
       axios.get('http://localhost:8080/store')
       .then((res)=>{
          state.StoreList=res.data.data;
          state.showStore='true'
       }).catch((res)=>{
         alert(res);
       });
    }
}
  
export default mutations