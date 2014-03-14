$(document).ready(function() {
	$("#projectbutton").click(function() {
		$('html, body').animate({
        scrollTop: $("#block2").offset().top
    	}, 500);
	})
});