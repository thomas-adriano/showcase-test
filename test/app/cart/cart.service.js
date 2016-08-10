export default cartSv;

cartSv.$inject = ['$localStorage', '$window', 'sessionSv', 'productSv', '$q'];

function cartSv($localStorage, $window, sessionSv, productSv, $q) {

    this.addToCart = addToCart;
    this.fetchProducts = fetchProducts;
    this.getSumOfProducts = getSumOfProducts;

    function addToCart(prodId) {
        let productsInCart = getProductsFromLocalStorage();

        let productsIds = productsInCart.map(elm => Object.keys(elm)[0]);
        let prodIndex = productsIds.indexOf(prodId);
        if (prodIndex === -1) {
            productsInCart.push({
                [prodId]: 1
            });
        } else {
            let prevProd = productsInCart[prodIndex];
            let lastQntd = prevProd[prodId];
            productsInCart.splice(prodIndex, 1);
            productsInCart.push({
                [prodId]: ++lastQntd
            });
        }

        $localStorage.setItem(getCartId(), JSON.stringify(productsInCart));
    }

    function fetchProducts(successCb, errorCb) {
        let callsFinished = 0;
        return $q((resolve, reject) => {
            let productsFromLocalStorage = getProductsFromLocalStorage();
            let productIds = getProductsFromLocalStorage().map(elm => Object.keys(elm)[0]);
            let products = [];
            productIds.forEach((elm) => {
                productSv.fetchProduct(elm, (data) => {
                    data.quantity = getProductQuantity(data.codigo, productsFromLocalStorage); //adiciona um campo referente a quantidade de itens
                    products.push(data);
                    callsFinished++;
                    if (callsFinished === productIds.length - 1) {
                        resolve(products);
                    }
                }, (data) => {
                    reject('Ocorreu um erro tentando buscar o produto' + elm);
                });
            });
        }).then(successCb, errorCb);

    }

    function getProductsFromLocalStorage() {
        return JSON.parse($localStorage.getItem(getCartId())) || [];
    }

    function getCartId() {
        let sessionId = sessionSv.getSessionId();
        return sessionId + '.cart';
    }

    function getProductQuantity(prodId, products) {
        for (let prod of products) {
            let prodDesc = Object.keys(prod)[0];
            if (prodDesc === prodId) {
                return prod[prodDesc];
            }
        }
        return 0;
    }

    function getSumOfProducts() {
        let productsFromLocalStorage = getProductsFromLocalStorage();
        let quantity = 0;
        productsFromLocalStorage.forEach(elm => {
            quantity += getProductQuantity(Object.keys(elm)[0], productsFromLocalStorage);
        });
        return quantity;
    }

}