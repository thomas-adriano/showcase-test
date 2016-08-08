import angular from 'angular';

import navbarCtrl from 'navbar/navbar.ctrl';

export default angular.module('app.navbar', [])
    .controller('navbarCtrl', navbarCtrl)
    .name;