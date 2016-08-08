import angular from 'angular';

import navbarCtrl from 'navbar/navbar.ctrl';
import navbarDirective from 'navbar/navbar.directive';

export default angular.module('app.navbar', [])
    .controller('navbarCtrl', navbarCtrl)
    .directive('navbar', navbarDirective)
    .name;