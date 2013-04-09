chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/main.js");



		// ----------------------------------------------------------

	}
	}, 10);
});


$(document).ready(function(){
    console.log("Sent from main.js via jquery");
    // $('body').prepend("<div id='screen' style='position: relative; left: 0; top: 0; background: #000; z-index: 2147483647 !important;'></div>")
    // $('#screen').css({ opacity: 0.7, 'width':$(document).width(),'height':$(document).height()});
    // $('*').css({'overflow':'hidden'});
});
