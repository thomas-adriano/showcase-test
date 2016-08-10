import product from 'json/product-S-100-100836.json';
import noImg from 'img/no_img.png';
import 'product/product.scss';

export default ProductCtrl;

ProductCtrl.$inject = ['$stateParams', 'productSv', '$window', 'toastr', 'cartSv', 'sessionSv'];

function ProductCtrl($stateParams, productSv, $window, toastr, cartSv, sessionSv) {

    $window.showcaseMeta = {
        page: 'product',
        product: {
            id: $stateParams.code,
        },
        user: {
            id: sessionSv.getSessionId(),
        }
    }

    let vm = this;
    vm.data = {};
    vm.photo = noImg;
    vm.error = false;
    vm.productCode = $stateParams.code;
    vm.sendToCart = sendToCart;

    productSv.fetchProduct(vm.productCode, (data) => {
        vm.data = data;
    }, (data) => {
        vm.error = true;
        vm.data = product;
    });

    function sendToCart(prod) {
        cartSv.addToCart(prod.codigo);
        toastr.success(prod.codigo + " adicionado ao carrinho");
    }
}