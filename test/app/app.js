import 'core/thirdparty';
import 'app.config';
import 'app.style';
import Vue from 'vue';
import VueRouter from 'vue-router';

import store from 'app.store';

import navbar from 'navbar/navbar.js';
import listings from 'listings/listings.js';
import product from 'product/product.js';
import cart from 'cart/cart.js';
import buy from 'buy/buy.js';

Vue.use(VueRouter);

var app = Vue.extend({
    store,
    components: {
        'navbar': navbar,
    }
});

var router = new VueRouter();
router.map({
    '/': {
        name: 'listings',
        component: listings,
    },
    '/product/:productId': {
        name: 'product',
        component: product,
    },
    '/cart': {
        name: 'cart',
        component: cart,
    },
    '/buy': {
        name: 'buy',
        component: buy,
    }
});
router.start(app, '#app');