import angular from 'angular';
import showcaseMetaDirective from 'core/showcaseMeta.directive';
import sessionSv from 'core/session.service.js';

export default angular.module('app.core', [])
    .directive('showcaseMeta', showcaseMetaDirective)
    .service('sessionSv', sessionSv)
    .name;