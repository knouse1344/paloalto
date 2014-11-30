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

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html,body').animate({
		      scrollTop: target.offset().top - 150
		    }, 1000);
		    return false;
		  }
		}
	});

	/////////////////////////////////////////////////////////////////////////////////////
	// Horizontal Scroll on hover
	/////////////////////////////////////////////////////////////////////////////////////
	var amount = '';

	function loop (direction, element) {
		var $scroller = element;

		if (direction == 'left') {
			loopleft()
		} else if (direction == 'right') {
			loopright()
		} else {
			$scroller.stop();
		}

		function loopleft(){
			amount = '-=50';		
		    $scroller.stop().animate({scrollLeft: amount}, 100, 'linear', loopleft);
		} 

		function loopright(){
			amount = '+=50';
		    $scroller.stop().animate({scrollLeft: amount}, 100, 'linear', loopright);
		}
	}

	function stop(scrollfix){
	    loop('', scrollfix)
	}

	$(".hover-left").hover(		
		function () {
			var scrollfix = $(this).siblings('.scrollfix');
			loop('left', scrollfix); // Loop-fn on mouseenter, stop-fn on mouseleave
		}, function() {
			var scrollfix = $(this).siblings('.scrollfix');
			stop(scrollfix);
	});

	// $(".hover-left").hover(loopleft, stop); // Loop-fn on mouseenter, stop-fn on mouseleave
	$(".hover-right").hover(
		function () {
			var scrollfix = $(this).siblings('.scrollfix');
			loop('right', scrollfix); // Loop-fn on mouseenter, stop-fn on mouseleave
		}, function() {
			var scrollfix = $(this).siblings('.scrollfix');
			stop(scrollfix);
	});

	// var amount = '';

	// function scroll() {
	//     $('.scrollfix').animate({scrollLeft: amount}, 25, 'linear',function() {
	//         if (amount != '') {
	//             scroll();
	//         }
	//     });
	// }

	// $('.hover-left').hover(function() {
	//     amount = '+=20';
	//     scroll();
	// }, function() {
	//     amount = '';
	// });
	// $('.hover-right').hover(function() {
	//     amount = '-=10';
	//     scroll();
	// }, function() {
	//     amount = '';
	// });
	

	/////////////////////////////////////////////////////////////////////////////////////
	// Click Functions
	/////////////////////////////////////////////////////////////////////////////////////
	$(".section").on("click", function() {
		$("#index").toggleClass('hover');
		if($( this ).hasClass('products')) {
			$('#index').toggleClass('products-hover');
		} else if($( this ).hasClass('solutions')) {
			$('#index').toggleClass('solutions-hover')
		} else if($( this ).hasClass('services')) {
			$('#index').toggleClass('services-hover');			
		} else if($( this ).hasClass('partners')) {
			$('#index').toggleClass('partners-hover');			
		} else if($( this ).hasClass('customers')) {
			$('#index').toggleClass('customers-hover');			
		} else if($( this ).hasClass('company')) {
			$('#index').toggleClass('company-hover');		
		} else if($( this ).hasClass('careers')) {
			$('#index').toggleClass('careers-hover');			
		} else if($( this ).hasClass('resources')) {
			$('#index').toggleClass('resources-hover');			
		} else if($( this ).hasClass('support')) {
			$('#index').toggleClass('support-hover');		
		} else if($( this ).hasClass('contact')) {
			$('#index').toggleClass('contact-hover');			
		};
	});

	$(".nav-list li a").on("click", function() {
		$("#index").toggleClass('hover');
		if($( this ).parent().hasClass('products')) {
			$('#index').removeClass();
			$('#index').toggleClass('products-hover');
		} else if($( this ).parent().hasClass('solutions')) {
			$('#index').removeClass();
			$('#index').toggleClass('solutions-hover')
		} else if($( this ).parent().hasClass('services')) {
			$('#index').removeClass();
			$('#index').toggleClass('services-hover');			
		} else if($( this ).parent().hasClass('partners')) {
			$('#index').removeClass();
			$('#index').toggleClass('partners-hover');			
		} else if($( this ).parent().hasClass('customers')) {
			$('#index').removeClass();
			$('#index').toggleClass('customers-hover');			
		} else if($( this ).parent().hasClass('company')) {
			$('#index').removeClass();
			$('#index').toggleClass('company-hover');		
		} else if($( this ).parent().hasClass('careers')) {
			$('#index').removeClass();
			$('#index').toggleClass('careers-hover');			
		} else if($( this ).parent().hasClass('resources')) {
			$('#index').removeClass();
			$('#index').toggleClass('resources-hover');			
		} else if($( this ).parent().hasClass('support')) {
			$('#index').removeClass();
			$('#index').toggleClass('support-hover');		
		} else if($( this ).parent().hasClass('contact')) {
			$('#index').removeClass();
			$('#index').toggleClass('contact-hover');			
		};
	});

});
