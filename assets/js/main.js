$(document).ready(function() {
	$(".countdown").countdown({
		until: new Date("Aug 24 2019 13:00:00"),
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

	particlesJS("particles", {
		"particles": {
			"number": {
				"value": 160,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 4,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 4,
					"size_min": 0.3,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#00d1b2",
				"opacity": 0,
				"width": 0
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"retina_detect": true
	});

	// Check for click events on the navbar burger icon
	$(".navbar-burger").click(function() {

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");

	});
});