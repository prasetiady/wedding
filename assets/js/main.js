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

	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 15,
				"density": {
					"enable": false
				}
			},
			"shape": {
				"type": "image",
				"polygon": {
					"nb_sides": 4
				},
				"image": {
					"src": loveImage,
					"width": 100,
					"height": 75
				}
			},
			"opacity": {
				"value": 0.3,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
	      "value": 15,
	    },
			"line_linked": {
				"enable": false
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "top",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false
			}
		},
		"interactivity": {
			"events": {
				"onhover": {
					"enable": false
				},
				"onclick": {
					"enable": false
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