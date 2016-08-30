import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import cart from 'cart/cart.store';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createLogger()],
    modules: {
        cart
    }
});