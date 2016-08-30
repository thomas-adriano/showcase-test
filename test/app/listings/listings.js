import Vue from 'vue';
import Q from 'q';

import 'listings/listings.scss';
import view from 'listings/listings.html';
import noImg from 'img/no_img.png';
import listings from 'json/listings.json';
import {
    API_ENDPOINTS
} from 'core/constants';

export default {
    template: view,
    data: model,
    created: init
};

function model() {
    return {
        error: false,
        products: []
    }
}

//utiliza "this" dentro da funcao
//pois o Vue injeta o this como sendo a propriedade "data"
//por isso os acessores (products, error..) sao chamados diretamente.
function init() {
    loadListings()
        .then((data) => {
            this.error = false;
            this.products = data;
        })
        .catch((status, statusText) => {
            this.error = true;
            this.products = listings.map(elm => {
                return {
                    data: elm,
                    photo: noImg, //TODO: se um dia houver fotos dos produtos elas devem ser buscadas..
                };
            });
        });
}

function loadListings() {
    return fetchProducts()
        .then((data) => {
            return data.map(elm => {
                return {
                    data: elm,
                    photo: noImg, //TODO: se um dia houver fotos dos produtos elas devem ser buscadas..
                };
            });
        });
}

function fetchProducts() {
    var deferred = Q.defer();
    var req = new XMLHttpRequest();
    req.onload = (evt) => {
        if (req.status == 200) {
            deferred.resolve(JSON.parse(req.responseText));
        }
    };
    req.onerror = (evt) => {
        deferred.reject(req.status, req.statusText);
    };
    req.open("get", API_ENDPOINTS.PRODUCTS, true);
    req.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiJ9.b3V0cm8.woW2ltXd6PeNKsJx1VoIas4OEZ3G1KCHHLkMU2v-zeQ");
    req.send();
    return deferred.promise;
}