import mock from '@/mock/index.js';

const actions = {
   GetHome(context){
       context.commit('GetCredit');
       context.commit('GetJourney');
   }
}

export default actions