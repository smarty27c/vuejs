import Vue from "vue";
import Vuex from "vuex";
import JSONData from '../assets/report.json'

Vue.use(Vuex);
// In production code or large applications this code will be modularied.Actions,Mutations,Getter,State will be in separate files.
export default new Vuex.Store({
  state: {
    JSONData: []
  },
  mutations: {
    // Changes to state should be only in mutations
    changeCategory (state, categoryType) {
        let arr = [];
        arr.push(['date',categoryType])
        JSONData.records.forEach(item => {
                arr.push([item.date, item[categoryType]])
            });
        state.JSONData = arr
    }
  },
  actions: {
    changeCategory ({ commit }, data) {
      commit('changeCategory', data);
    }
  },
  getters: {
    // Use of getter for getting data to components
    getJSONData: state => {
      return state.JSONData;
    }
  }
});
