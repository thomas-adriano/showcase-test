export default CartCtrl;

CartCtrl.$inject = ['$stateParams'];

function CartCtrl($stateParams) {
	this.test = $stateParams.productCode;
}