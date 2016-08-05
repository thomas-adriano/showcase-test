import angular from 'angular';
import showcaseMetaDirective from 'core/showcaseMeta.directive';

export default angular.module('app.core', [])
    .directive('showcaseMeta', showcaseMetaDirective)
    .name;