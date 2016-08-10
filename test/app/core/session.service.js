export default sessionSv;

sessionSv.$inject = ['$localStorage', '$window', '$Math'];

function sessionSv($localStorage, $window, $Math) {

    this.getSessionId = getSessionId;

    function getSessionId() {
        let sessionId = $localStorage.getItem("showcase.session");
        if (!sessionId) {
            sessionId = generateId();
            $localStorage.setItem("showcase.session", sessionId);
        }
        return sessionId;
    }

    function generateId() {
        return $window.btoa(($Math.random() * 1000) + new Date().getTime());
    }

}