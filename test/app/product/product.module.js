import angular from 'angular';

import productCtrl from 'product/product.ctrl';
import productSv from 'product/product.service';

export default angular.module('app.product', [])
    .controller('productCtrl', productCtrl)
    .service('productSv', productSv)
    .name;