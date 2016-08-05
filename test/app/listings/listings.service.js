export default listingsSv;

listingsSv.$inject = ['API_ENDPOINTS', '$resource'];

function listingsSv(API_ENDPOINTS, $resource) {

    this.fetchProducts = fetchProducts;

    function fetchProducts(successCb, errorCb) {
        return $resource(API_ENDPOINTS.PRODUCTS, {}, {
            listProducts: {
                method: 'GET',
                isArray: true,
                headers: {
                    accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyAiZW1haWwiIDogImFkbWluQHJlY29tZW5kYS5jb20uYnIiLCB7ICJuaWNrIiA6ICJvdXRybyIgfQ.5rwK_vCe1bovVoIkiOqjRcW5pqM1KB3h0FDNB7CzNbs'
                }
            },
        }).listProducts().$promise.then(successCb, errorCb);
    }

}