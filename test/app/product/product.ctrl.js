import product from 'json/product-S-100-100836.json';
import noImg from 'img/no_img.png';
import 'product/product.scss';

export default ProductCtrl;

ProductCtrl.$inject = ['$stateParams', 'productSv', '$window', 'toastr'];

function ProductCtrl($stateParams, productSv, $window, toastr) {

    let vm = this;
    vm.data = {};
    vm.photo = noImg;
    vm.error = false;
    vm.productCode = $stateParams.code;
    vm.sendToCart = sendToCart;

    $window.sendEvent({
        "event": "view",
        "entityType": "user",
        "entityId": "u1",
        "targetEntityType": "item",
        "targetEntityId": $stateParams.productCode
    });


    productSv.fetchProduct(vm.productCode, (data) => {
        console.log(JSON.stringify(data));
        vm.data = data;
    }, (data) => {
        vm.error = true;
        vm.data = product;
    });

    function sendToCart(prodId) {
        toastr.success(prodId+" adicionado ao carrinho");
    }
}
