import { createStore } from "vuex";
import { useCookies } from "vue3-cookies";

export default createStore({
  state: {
    theme: "light",
  },
  getters: {
    theme(state) {
      return state.theme;
    },
  },
  mutations: {
    SET_THEME(state, theme) {
      useCookies().cookies.set("theme", theme);
      state.theme = theme;
    },
  },
  actions: {
    setTheme(context, { theme }) {
      context.commit("SET_THEME", theme);
    },
    toggleTheme(context) {
      if (context.state.theme == "light") {
        context.commit("SET_THEME", "dark");
      } else {
        context.commit("SET_THEME", "light");
      }
    },
  },
  modules: {},
});
