$(document).ready(function() {
	$(".countdown").countdown({
		until: new Date("Aug 24 2019 09:00:00"),
		compact: true
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