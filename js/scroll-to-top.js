(function(jQuery){
	$("document").ready(function() {
		$("#back-to-top").click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, "slow");
		});
	});
}($));