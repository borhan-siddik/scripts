function moveButton(btn) {
	if(jQuery(btn).parent().attr("id") == "1st-column") {
		jQuery(btn).detach().appendTo("#2nd-column");
	} else {
		jQuery(btn).detach().appendTo("#1st-column");
	}
}