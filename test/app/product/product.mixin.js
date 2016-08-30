import Q from 'q';
import {
    API_ENDPOINTS
} from 'core/constants';

export default {
    methods: {
        fetchProduct: fetchProduct,
    }
}

function fetchProduct(productId) {
    let deferred = Q.defer();
    let req = new XMLHttpRequest();
    req.onload = () => {
        if (req == 200) {
            deferred.resolve(req.responseText);
        }
    }
    req.onerror = () => {
        deferred.reject(req.status, req.statusText);
    }
    req.open("get", API_ENDPOINTS.PRODUCT.replace(':productId', productId), true);
    req.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiJ9.b3V0cm8.woW2ltXd6PeNKsJx1VoIas4OEZ3G1KCHHLkMU2v-zeQ");
    req.send();
    return deferred.promise;
}