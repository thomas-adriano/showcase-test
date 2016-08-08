import angular from 'angular';

import buyCtrl from 'buy/buy.ctrl';

export default angular.module('app.buy', [])
    .controller('buyCtrl', buyCtrl)
    .name;