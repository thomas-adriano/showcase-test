import 'buy/buy.scss';

export default BuyCtrl;

BuyCtrl.$inject = ['$stateParams', '$window', 'sessionSv'];

function BuyCtrl($stateParams, $window, sessionSv) {

    $window.showcaseMeta = {
        page: 'buy',
        buy: {
            productId: $stateParams.productCode,
            userId: sessionSv.getSessionId()
        }
    }

    let vm = this;

    vm.test = $stateParams.productCode;
}