// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

window.addEventListener("load", windowLoaded, false);

function windowLoaded() {
    var newURL = "http://take5.herokuapp.com";
    chrome.tabs.create({ url: newURL });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setIcon({path: 'icons/24_green.png'})
});

var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': <OAuth request URL>,
  'authorize_url': <OAuth authorize URL>,
  'access_url': <OAuth access token URL>,
  'consumer_key': <OAuth consumer key>,
  'consumer_secret': <OAuth consumer secret>,
  'scope': <scope of data access, not used by all OAuth providers>,
  'app_name': <application name, not used by all OAuth providers>
});