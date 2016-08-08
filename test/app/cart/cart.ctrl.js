export default CartCtrl;

CartCtrl.$inject = ['$stateParams', '$window'];

function CartCtrl($stateParams, $window) {
    this.test = $stateParams.productCode;

    
}
