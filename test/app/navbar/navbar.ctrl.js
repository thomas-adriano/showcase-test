import 'navbar/navbar.scss';

export default NavbarCtrl;

NavbarCtrl.$inject = ['$stateParams', '$window', 'cartSv'];

function NavbarCtrl($stateParams, $window, cartSv) {

    let vm = this;

    vm.cartItemsQuantity = "("+cartSv.getSumOfProducts()+")";


}