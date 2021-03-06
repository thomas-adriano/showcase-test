import 'jquery';

const scripts = document.getElementsByTagName('script');
const script = scripts[scripts.length - 1];
const apiKey = script.getAttribute('data-api-key');
const eventUrl = EVENT_SERVER_URL + '?accessKey=' + apiKey;

init();

function init() {
    let event = {
        "entityType": "user",
        "entityId": showcaseMeta.user.id,
        "targetEntityType": "item",
        "targetEntityId": showcaseMeta.product.id
    };

    if (showcaseMeta.page === 'buy') {
        event.event = "buy";
    } else if (showcaseMeta.page === 'product') {
        event.event = "view";
    }

    sendEvent(event);
}

function sendEvent(args) {
    return $.ajax({
        type: "POST",
        contentType: "application/json",
        url: eventUrl,
        data: JSON.stringify(args),
        dataType: "json"
    });
};

function getRecommendations(args) {
    return $.ajax({
        type: "POST",
        contentType: "application/json",
        url: PREDICTION_SERVER_URL,
        success: function(response) {
            console.log('success');
            loadDataInsideDiv(response);
        },
        error: function(error) {
            console.log('não foi possível realizar a chamada');
        },
        data: JSON.stringify(args),
        dataType: "json"
    });
}

function loadDataInsideDiv(data) {
    console.log(data);
}