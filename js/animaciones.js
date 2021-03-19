$('a').click (function(e) {
	e.preventDefault();

	$('html,body').animate({
		scrollTop: $("#scroll").offset().top
	}, 2000);
})