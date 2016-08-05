import product from 'json/product-S-100-100836.json';
import noImg from 'img/no_img.png';
import 'product/product.scss';

export default ProductCtrl;

ProductCtrl.$inject = ['$stateParams', 'productSv', '$window'];

function ProductCtrl($stateParams, productSv, $window) {

    let vm = this;
    vm.data = {};
    vm.photo = noImg;
    vm.error = false;
    vm.productCode = $stateParams.code;

    $window.showcaseMeta = {
        page: 'product',
        product: {
            
        }
    }

    productSv.fetchProduct(vm.productCode, (data) => {
        console.log(JSON.stringify(data));
        vm.data = data;
    }, (data) => {
        vm.error = true;
        vm.data = product;
    });
}