// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {

	// Next/previous buttons on feature scroller
	////////////////////////////////////////////////////////////
	var next = $('.feature .next');
	var previous = $('.feature .previous');

	$(next).on("click", function() {

		$(this).parent('.box').parent('.feature').css("top", "-100%").next('.feature').css("display", "block").addClass('active')
		$(this).parent('.box').next('.background-img').css("top", "60%");
		$(this).parent('.box').parent('.feature').removeClass('active').addClass('transition');

		setTimeout(function() {
			$('.transition').css("display", "none");
			$('.transition').css("top", "0%");
			$('.transition').children('.background-img').css("top", "0%");
			$('.transition').removeClass('transition');
		}, 750);
		
	});

	$(previous).on("click", function() {
		$(this).parent('.box').parent('.feature').css("top", "100%").prev('.feature').css("display", "block").addClass('active-down')
		$(this).parent('.box').prev('.background-img').css("top", "-50%")
		$(this).parent('.box').parent('.feature').removeClass('active-down').addClass('transition-down');

		setTimeout(function() {
			$('.transition-down').css("display", "none");
			$('.transition-down').children('.background-img').css("top", "0%");
			$('.transition-down').removeClass('active');
			$('.transition-down').removeClass('transition-down');
		}, 750);
		
	});

	//Smooth Scroller
	////////////////////////////////////////////////////////////
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html,body').animate({
		      scrollTop: target.offset().top - 450
		    }, 500);
		    return false;
		  }
		}
	});

	$()

});


function featureRoll(item) {
	var selected = $('.'+item);

	$(selected).css("opacity", "1");
	$("html, body").animate({ scrollTop: 0 }, "slow");
}




