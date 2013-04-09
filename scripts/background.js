// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

window.addEventListener("load", windowLoaded, false);

function windowLoaded() {
}

var min = 0;
var max = 1;
var current = max;

var timer = 0;
var break_timer = 0;

// Reset time
function toggle() {

  function reset_timer() {
    clearInterval(break_timer);
    timer=setInterval(function(){take_a_break()}, 1500000);
    console.log("Next break started")
  }

  if (current == 0) {

    clearInterval(timer);

    add = "";

  } else {

    timer=setInterval(function(){take_a_break()}, 1500000);
    console.log("Timer created");

    function take_a_break(){
        var newURL = "http://take5.herokuapp.com";
        chrome.tabs.create({ url: newURL });
        clearInterval(timer);

        break_timer=setInterval(function(){reset_timer()}, 300000);
        console.log("Break started.");
    }

    add = "_1";
  }

  chrome.browserAction.setIcon({path:"../icons/24" + add + ".png"});
  // chrome.tabs.executeScript(null, {file: "content" + current + ".js
  console.log("24" + add + ".png")
  current++;

  if (current > max)
    current = min;
}

chrome.browserAction.onClicked.addListener(function() {
    toggle();
});
