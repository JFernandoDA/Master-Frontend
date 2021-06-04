import { createStore } from "vuex";

export default createStore({
  state: {
    company: "lemoncode" 
  },
  mutations: {
    setCompanyName( state, newCompany ) {
      state.company = newCompany;
    }
  },
  actions: {},
  modules: {},
});
