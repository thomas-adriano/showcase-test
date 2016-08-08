export default navbar;

import navbarView from 'navbar/navbar.html';

function navbar() {
    return {
        restrict: 'E',
        link: () => {

        },
        template: navbarView
    }
}