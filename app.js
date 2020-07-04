$('.burger').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('burger-active');
	$('.nav').toggleClass('show');

	
	
});

$('.our-services, .man-pen, .gallery, .team, .contact-us, footer').on('click', function() {
		$('.nav').removeClass('show');
		$('.burger').removeClass('burger-active')
});

