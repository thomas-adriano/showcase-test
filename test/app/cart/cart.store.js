import session from 'core/session';

const state = {
    productsQuantity: getSumOfProducts() || 0,
    products: getProductsFromLocalStorage() || {}
};

const mutations = {
    ADD_PRODUCT: function(state, prodId) {
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
        state.productsQuantity++;
        localStorage.setItem(getCartLocalStorageId(), JSON.stringify(productsInCart));
    }
};

export default {
    state,
    mutations,
};

function getSumOfProducts() {
    let productsFromLocalStorage = getProductsFromLocalStorage();
    let quantity = 0;
    productsFromLocalStorage.forEach(elm => {
        quantity += getProductQuantity(Object.keys(elm)[0], productsFromLocalStorage);
    });
    return quantity;
}

function getProductsFromLocalStorage() {
    return JSON.parse(localStorage.getItem(getCartLocalStorageId())) || [];
}

function getCartLocalStorageId() {
    let sessionId = session.getSessionId();
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