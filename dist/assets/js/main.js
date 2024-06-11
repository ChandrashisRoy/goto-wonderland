const OLI = "347719";
const contentType = "microsite";
const vendor = "GoTo";

function sendPageView(page) {
    const gaPrefix = window.location.hostname + '/service.labs/' + vendor + '/' + contentType + '/' + OLI + '/en/sw/';
    gtag('config', 'UA-314222-5', {
      'page_location': gaPrefix + page,
      'non_interaction': true
    });
  }

  //format for sending events. action should be click for most uses, label should be name of what is clicked (in this case the asset name)
function sendEvent(action, label) {
    gtag('event', action, {
      'event_category': 'Vendor Non-Interactive',
      'event_label': label + ' | ' + OLI,
      'non_interaction': true
    });
  }

  sendPageView('landingPage');