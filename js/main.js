$(document).ready(function() {

	$("#projectbutton").click(function() {
		$('html, body').animate({
        scrollTop: $("#block2").offset().top
    	}, 500);
	});

	$("#aboutbutton").click(function() {
		$('html, body').animate({
        scrollTop: $("#block3").offset().top
    	}, 500);
	});

	$("#contactbutton").click(function() {
		$('html, body').animate({
        scrollTop: $("#block4").offset().top
    	}, 500);
	});

	$("#linkpuff").click(function() {
		$('html, body').animate({
        scrollTop: $("#block4").offset().top
    	}, 500);
	});

	$("#totop").click(function() {
		$('html, body').animate({
        scrollTop: 0
    	}, 500);
	});

	$(window).scroll(function(){
		if ( $(window).scrollTop() >= $("#block2").offset().top )
			$("#totop").fadeIn();
		else
			$("#totop").fadeOut();
	});

});