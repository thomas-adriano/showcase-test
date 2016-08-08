import 'buy/buy.scss';

export default BuyCtrl;

BuyCtrl.$inject = ['$stateParams', '$window'];

function BuyCtrl($stateParams, $window) {

    let vm = this;

    $window.showcaseMeta = {
        page: 'buy',
        buy: {

        }
    }

    vm.test = $stateParams.productCode;
}