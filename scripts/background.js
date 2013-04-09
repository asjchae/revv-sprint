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
