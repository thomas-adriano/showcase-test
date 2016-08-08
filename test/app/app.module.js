import 'app.style';

import angular from 'angular';
import 'angular-ui-router';

import appCfg from 'app.config';
import appRoutes from 'app.routes';

import thirdpartyLibs from 'core/thirdpartyLibs.module';
import coreModule from 'core/core.module';
import navbar from 'navbar/navbar.module';
import listingsModule from 'listings/listings.module';
import cartModule from 'cart/cart.module';
import productModule from 'product/product.module';
import buyModule from 'buy/buy.module';


angular.module('app', [thirdpartyLibs, coreModule, navbar, listingsModule, cartModule, productModule, buyModule, 'ui.router'])
    .config(appCfg)
    .config(appRoutes);