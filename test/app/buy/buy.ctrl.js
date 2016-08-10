import 'buy/buy.scss';

export default BuyCtrl;

BuyCtrl.$inject = ['$stateParams', '$window', 'sessionSv'];

function BuyCtrl($stateParams, $window, sessionSv) {

    $window.showcaseMeta = {
        page: 'buy',
        product: {
            id: $stateParams.productCode,
        },
        user: {
            id: sessionSv.getSessionId(),
        }
    }

    let vm = this;

    vm.test = $stateParams.productCode;
}