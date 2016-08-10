import angular from 'angular';

import cartCtrl from 'cart/cart.ctrl';
import cartSv from 'cart/cart.service';

export default angular.module('app.cart', [])
    .controller('cartCtrl', cartCtrl)
    .service('cartSv', cartSv)
    .name;