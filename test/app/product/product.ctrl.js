import product from 'json/product-S-100-100836.json';
import noImg from 'img/no_img.png';

export default ProductCtrl;

ProductCtrl.$inject = ['$stateParams', 'productSv'];

function ProductCtrl($stateParams, productSv) {

    let vm = this;
    vm.data = {};
    vm.photo = noImg;
    vm.error = false;

    productSv.fetchProduct($stateParams.code, (data) => {
        console.log(JSON.stringify(data));
        vm.data = data;
    }, (data) => {
        vm.error = true;
        vm.data = product;
    });
}