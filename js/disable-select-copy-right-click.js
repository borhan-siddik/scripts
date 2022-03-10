(function ($) {
	$(document).ready(function () {
		// Check the css which is also required for preventing text selection
		$("document, html, body").on("contextmenu copy cut", function (e) {
			e.preventDefault();
			return false;
		});
	});
}(jQuery)); 