import Vue from "vue";
import Vuex from "vuex";
import Menu from "./modules/menu";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        MENU: Menu
    }
});
