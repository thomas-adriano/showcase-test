import Vue from 'vue';
import Q from 'q';
import product from 'json/product-S-100-100836.json';
import noImg from 'img/no_img.png';
import 'product/product.scss';
import view from 'product/product.html';
import {
    API_ENDPOINTS
} from 'core/constants';
import toastr from 'toastr';
import {
    addProduct
} from 'cart/cart.store.actions';
import productMixin from 'product/product.mixin';

export default {
    mixins: [
        productMixin
    ],
    vuex: {
        actions: {
            addProduct
        }
    },
    template: view,
    data: model,
    created: init,
    methods: {
        sendToCart,
    },
};


function init() {
    this.fetchProduct(this.productId)
        .then((data) => {
            this.data = data;
        })
        .catch((data) => {
            this.error = true;
            this.data = product;
        });
}

function model() {
    return {
        data: {},
        photo: noImg,
        error: false,
        productId: this.$route.params.productId,
    }
}

function sendToCart(prod) {
    this.addProduct(prod.codigo);
    toastr.success(prod.codigo + " adicionado ao carrinho");
}