import listings from 'json/listings.json';
import noImg from 'img/no_img.png';

export default ListingsCtrl;

ListingsCtrl.$inject = ['listingsSv', '$window'];

function ListingsCtrl(listingsSv, $window) {
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
        sendEvents();
    }, (data) => {
        vm.error = true;
        vm.products = listings.map(elm => {
            return {
                data: elm,
                photo: noImg, //TODO: se um dia houver fotos dos produtos elas devem ser buscadas..
            };
        });
    });

    //TODO: send all items in a single call
    var sendEvents = function() {
        vm.products.forEach(function(product) {
            $window.sendEvent({
                "event": "view",
                "entityType": "user",
                "entityId": "u1",
                "targetEntityType": "item",
                "targetEntityId": product.data.codigo
            });
        });
    }

}
