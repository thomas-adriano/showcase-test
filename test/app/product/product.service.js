import listings from 'json/listings.json';

export default productSv;

productSv.$inject = ['API_ENDPOINTS', '$resource'];

function productSv(API_ENDPOINTS, $resource) {

    this.fetchProduct = fetchProduct;

    function fetchProduct(productId, successCb, errorCb) {
        return $resource(API_ENDPOINTS.PRODUCT, {}, {
            listProducts: {
                method: 'GET',
                params: {
                    productId: productId
                },
                headers: {
                    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyAiZW1haWwiIDogImFkbWluQHJlY29tZW5kYS5jb20uYnIiLCB7ICJuaWNrIiA6ICJvdXRybyIgfQ.5rwK_vCe1bovVoIkiOqjRcW5pqM1KB3h0FDNB7CzNbs'
                }
            },
        }).listProducts().$promise.then(successCb, errorCb);
    }

}