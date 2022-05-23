/*import Vue from 'vue'
import Vuex from 'vuex'*/

import ProductModule from './module/product';
import {createStore} from "vuex";

// Vue.use(Vuex);

const store = createStore({
    modules: {
        products:ProductModule,
    }
});

export default store;
