import angular from 'angular';
import 'angular-ui-router';

import 'app.scss';

import appCfg from 'app.config';
import appRoutes from 'app.routes';

import coreModule from 'core/core.module';
import listingsModule from 'listings/listings.module';
import cartModule from 'cart/cart.module';
import productModule from 'product/product.module';

angular.module('app', [coreModule, listingsModule, cartModule, productModule, 'ui.router'])
    .config(appCfg)
    .config(appRoutes);