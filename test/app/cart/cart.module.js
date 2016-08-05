import angular from 'angular';

import cartCtrl from 'cart/cart.ctrl';

export default angular.module('app.cart', [])
    .controller('cartCtrl', cartCtrl)
    .name;