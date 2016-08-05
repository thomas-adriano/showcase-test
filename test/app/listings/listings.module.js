import angular from 'angular';
import 'angular-resource';

import listingsCtrl from 'listings/listings.ctrl';
import listingsSv from 'listings/listings.service';
import constants from 'core/constants.module';

import 'listings/listings.scss';

export default angular.module('app.listings', ['ngResource', constants])
    .controller('listingsCtrl', listingsCtrl)
    .service('listingsSv', listingsSv)
    .name;