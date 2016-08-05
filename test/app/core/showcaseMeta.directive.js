export default showcaseMeta;

showcaseMeta.$inject = ['$window'];

function showcaseMeta($window) {
    return {
        restrict: 'E',
        link: function() {
            $window.showcaseMeta = {
                page: {
                    name: '',
                },
                user: {
                    id: '',
                    name: '',
                }
            };
        }
    };
}