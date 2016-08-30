import Vue from 'vue';
import 'cart/cart.scss';
import view from 'cart/cart.html';
import store from 'app.store';
import productMixin from 'product/product.mixin';
import Q from 'q';

export default {
    mixins: [
        productMixin
    ],
    vuex: {
        getters: {
            localStorageProducts: state => state.cart.products,
        }
    },
    data: model,
    template: view,
    created: init,
    methods: {
        loadProducts: loadProducts,
    }
};

function model() {
    return {
        products: [],
    };
}

function init() {
    this.loadProducts()
        .then((data) => {
            this.products = data
        })
        .catch(console.error);
}

function loadProducts() {
    let deferred = Q.defer();
    let callsFinished = 0;
    let productIds = this.localStorageProducts.map(elm => Object.keys(elm)[0]);
    let products = [];
    productIds.forEach((elm) => {
        console.log('tratando prodid: ' + elm);
        this.fetchProduct(elm)
            .then((data) => {
                data.quantity = store.getProductQuantity(data.codigo, this.localStorageProducts); //adiciona um campo referente a quantidade de itens
                products.push(data);
                callsFinished++;
                if (callsFinished === productIds.length - 1) {
                    deferred.resolve(products);
                }
            })
            .catch((data) => {
                deferred.reject('Ocorreu um erro tentando buscar o produto' + elm);
            });
    });
    return deferred.promise;

}