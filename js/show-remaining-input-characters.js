(function($){
	$(document).ready(function() {
		var maxLnth = 23;
		$("#exampleInputPassword1").keyup(function() {
			var remlnth = maxLnth - $(this).val().length;
			$("#rchars").text(remlnth);
		});
	});
}(jQuery)); 