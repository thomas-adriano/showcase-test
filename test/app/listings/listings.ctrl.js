import listings from 'json/listings.json';
import noImg from 'img/no_img.png';

export default ListingsCtrl;

ListingsCtrl.$inject = ['listingsSv'];

function ListingsCtrl(listingsSv) {
    let vm = this;
    vm.products = [];
    vm.error = false;

    listingsSv.fetchProducts((data) => {
        vm.products = data.map(elm => {
            return {
                data: elm,
                photo: noImg, //TODO: se um dia houver fotos dos produtos elas devem ser buscadas..
            };
        });
    }, (data) => {
        vm.error = true;
        vm.products = listings.map(elm => {
            return {
                data: elm,
                photo: noImg, //TODO: se um dia houver fotos dos produtos elas devem ser buscadas..
            };
        });
    });
}