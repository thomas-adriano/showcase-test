import 'navbar/navbar.scss';

export default NavbarCtrl;

NavbarCtrl.$inject = ['$stateParams', '$window'];

function NavbarCtrl($stateParams, $window) {

    let vm = this;

    vm.test = $stateParams.productCode;
}