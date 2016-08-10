import toastr from 'toastr';

import 'font-awesome/fonts/fontawesome-webfont.ttf';
import 'font-awesome/fonts/fontawesome-webfont.svg';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/fonts/fontawesome-webfont.woff2';

import 'font-awesome/scss/font-awesome.scss';

import 'jquery';
import 'babel-polyfill';

import angular from 'angular';

export default angular.module('app.thirdpartyLibs', [])
    .constant('toastr', toastr)
    .constant('$localStorage', localStorage)
    .constant('$Math', Math)
    .name;