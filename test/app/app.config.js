export default appCfg;

appCfg.$inject = ['toastr'];

function appCfg(toastr) {
    toastr.options.closeButton = true;
    toastr.options.timeOut = 2000;
    toastr.options.extendedTimeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
    toastr.options.newestOnTop = true;
}