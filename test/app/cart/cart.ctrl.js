import 'cart/cart.scss';

export default CartCtrl;

CartCtrl.$inject = ['$stateParams', '$window', 'cartSv', '$state'];

function CartCtrl($stateParams, $window, cartSv, $state) {

    $window.showcaseMeta = {
        page: 'cart',
        cart: {

        }
    }

    var vm = this;
    vm.products = [];

    cartSv.fetchProducts((products) => {
        vm.products = products;
    }, (error) => {
        console.log("OCORREU UM ERRO TENTANDO OBTER OS PRODUTOS DO CARRINHO.");
    });

}