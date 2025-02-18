$(document).ready(function() {
	windowHeight = $(window).outerHeight();
	windowWidth = $(window).outerWidth();

	isWider = (windowWidth / windowHeight) > (1520 / 2036)

	if (isWider) {
		$('#welcome').css({
			"background-size": windowWidth + "px auto"
		})
	} else {
		$('#welcome').css({
			"background-size": "auto " + windowHeight + "px"
		})
	}

	$("body").css({"width": windowWidth + "px"})

	$(".countdown").countdown({
		since: new Date("Aug 24 2019 09:00:00"),
		compact: false,
		format: 'YODHMS',
		layout: '{yn} years {on} months {dn} days {hn}:{mnn}:{snn}'
	}).show().before("(").after(")");

	$("#location").click(function() {
		$("#location iframe").css("pointer-events", "auto");
	});

	$("#location").mouseleave(function() {
		$("#location iframe").css("pointer-events", "none");
	});

	$(".nav-toggle").click(function() {
		$(".nav-toggle,.nav-menu").toggleClass("is-active");
	});

	$("a[href*=\\#]").on("click", function(event) {
		event.preventDefault();
		$(".nav-toggle,.nav-menu").removeClass("is-active");
		$("html,body").animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});

	$(".slider-container").ikSlider({
		speed: 500,
		caption: false,
		autoPlay: true
	});

	// Check for click events on the navbar burger icon
	$(".navbar-burger").click(function() {

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");

	});
});
