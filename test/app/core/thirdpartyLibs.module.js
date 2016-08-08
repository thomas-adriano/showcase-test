import angular from 'angular';
import toastr from 'toastr';

import 'jquery';

export default angular.module('app.thirdpartyLibs', [])
    .constant('toastr', toastr)
    .name;