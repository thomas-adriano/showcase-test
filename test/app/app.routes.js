import listingsView from 'listings/listings.html';
import cartView from 'cart/cart.html';
import productView from 'product/product.html';

export default appRoutes;

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function appRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/listings");
    $stateProvider
        .state('listings', {
            url: "/listings",
            template: listingsView,
            controller: 'listingsCtrl as listings'
        })
        .state('cart', {
            url: "/cart",
            template: cartView,
            controller: 'cartCtrl as cart'
        })
        .state('product', {
            url: "/product/:code",
            template: productView,
            controller: 'productCtrl as product'
        });
}