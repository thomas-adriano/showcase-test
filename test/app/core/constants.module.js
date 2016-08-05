import angular from 'angular';

export default angular.module('app.constants', [])
    .constant('API_ENDPOINTS', {
        PRODUCTS: BACKEND_URL + 'erp-analytics-webservices/api/produtos',
        PRODUCT: BACKEND_URL + 'erp-analytics-webservices/api/produtos/:productId',
    })
    .name;