(function($){
	$(document).ready(function() {
		/* Requried */
		$("#privacy-agreement").click(function() {
			if($("#submit-btn").is(":disabled")) {
				$("#submit-btn").removeAttr('disabled');
			} else {
				$("#submit-btn").attr('disabled', 'disabled');
			}
		});
		/* Requried */

	$("form").submit(function(e){
		$("#submit-btn").after("<p class='mt-3 text-success'>Successfully Submitted!</p>");
		e.preventDefault();
		setTimeout(() => {
			$("#submit-btn").next().remove();
		}, 3000);
	});

	});
}(jQuery)); 