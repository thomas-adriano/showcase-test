import 'jquery';

const scripts = document.getElementsByTagName('script');
const script = scripts[scripts.length - 1];
const apiKey = script.getAttribute('data-api-key');
const eventUrl = EVENT_SERVER_URL + '?accessKey=' + apiKey;

window.recomendaMeta = {
    page: {

    }
};


function sendEvent(args) {
    $.ajax({
        type: "POST",
        body: args,
        contentType: "application/json",
        url: eventUrl,
        complete: function(response) {
            console.log('event sent');
        },
        error: function(error) {
            console.log('something went wrong');
        }
    });
}

sendEvent({
    event: "view",
    entityType: "user",
    entityTypeId: "1705",
    targetEntityType: "item",
    targetEntityId: "S-1-22313",
    eventTime: "2015-02-17T02:11:21.934Z"
});
