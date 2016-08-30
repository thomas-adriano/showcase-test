import 'navbar/navbar.scss';
import view from 'navbar/navbar.html';

export default {
    template: view,
    vuex: {
        getters: {
            productsQuantity: state => state.cart.productsQuantity,
        }
    }
};