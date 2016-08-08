import 'jquery';

const scripts = document.getElementsByTagName('script');
const script = scripts[scripts.length - 1];
const apiKey = script.getAttribute('data-api-key');
const eventUrl = EVENT_SERVER_URL + '?accessKey=' + apiKey;

window.recomendaMeta = {
    page: {

    },
    user: {

    },
    item: {

    }
};


window.sendEvent = function(args) {
    return $.ajax({
        type: "POST",
        contentType: "application/json",
        url: eventUrl,
        data: JSON.stringify(args),
        dataType: "json"
    });
};