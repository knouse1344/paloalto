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
		      scrollTop: target.offset().top - 450
		    }, 500);
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

	$(".hover-right").hover(
		function () {
			var scrollfix = $(this).siblings('.scrollfix');
			loop('right', scrollfix); // Loop-fn on mouseenter, stop-fn on mouseleave
		}, function() {
			var scrollfix = $(this).siblings('.scrollfix');
			stop(scrollfix);
	});


	/////////////////////////////////////////////////////////////////////////////////////
	// Click Functions
	/////////////////////////////////////////////////////////////////////////////////////
	// $(".section").on("click", function() {
	// 	if($( this ).hasClass('products')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('products-hover');
	// 	} else if($( this ).hasClass('recommended')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('recommended-hover')
	// 	} else if($( this ).hasClass('popular')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('popular-hover')
	// 	} else if($( this ).hasClass('solutions')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('solutions-hover')
	// 	} else if($( this ).hasClass('services')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('services-hover');			
	// 	} else if($( this ).hasClass('partners')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('partners-hover');			
	// 	} else if($( this ).hasClass('customers')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('customers-hover');			
	// 	} else if($( this ).hasClass('company')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('company-hover');		
	// 	} else if($( this ).hasClass('careers')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('careers-hover');			
	// 	} else if($( this ).hasClass('resources')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('resources-hover');			
	// 	} else if($( this ).hasClass('support')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('support-hover');		
	// 	} else if($( this ).hasClass('contact')) {
	// 		$('#index').removeClass();
	// 		$('#index').toggleClass('contact-hover');			
	// 	};
	// 	$("#index").toggleClass('hover');
	// });

	$(".nav-list li a").on("click", function() {
		if($( this ).parent().hasClass('products')) {
			$('#index').removeClass();
			$('#index').toggleClass('products-hover');
		} else if($( this ).parent().hasClass('recommended')) {
			$('#index').removeClass();
			$('#index').toggleClass('recommended-hover')
		} else if($( this ).parent().hasClass('popular')) {
			$('#index').removeClass();
			$('#index').toggleClass('popular-hover')
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
		} else if($( this ).parent().hasClass('home')) {
			$('#index').removeClass();			
		};
		$("#index").toggleClass('hover');
	});

	function featureclick() {
		$('.pos-one').css({"width":"0", "padding":"0"});
		// setTimeout(function() {
		// 	$('.pos-one').css("display", "none");
		// }, 200);

		if($('.pos-one').hasClass('recommended')) {
			$('#index').removeClass();
			$('#index').addClass('recommended-hover');
		} else if($('.pos-one').hasClass('popular')) {
			$('#index').removeClass();
			$('#index').addClass('popular-hover');
		} else if($('.pos-one').hasClass('products')) {
			$('#index').removeClass();
			$('#index').addClass('products-hover');
		} else if($('.pos-one').hasClass('services')) {
			$('#index').removeClass();
			$('#index').addClass('services-hover');
		} else if($('.pos-one').hasClass('solutions')) {
			$('#index').removeClass();
			$('#index').addClass('solutions-hover');
		} else if($('.pos-one').hasClass('partners')) {
			$('#index').removeClass();
			$('#index').addClass('partners-hover');
		} else if($('.pos-one').hasClass('customers')) {
			$('#index').removeClass();
			$('#index').addClass('customers-hover');
		} else if($('.pos-one').hasClass('company')) {
			$('#index').removeClass();
			$('#index').addClass('company-hover');
		} else if($('.pos-one').hasClass('careers')) {
			$('#index').removeClass();
			$('#index').addClass('careers-hover');
		} else if($('.pos-one').hasClass('resources')) {
			$('#index').removeClass();
			$('#index').addClass('resources-hover');
		} else if($('.pos-one').hasClass('support')) {
			$('#index').removeClass();
			$('#index').addClass('support-hover');
		} else if($('.pos-one').hasClass('contact')) {
			$('#index').removeClass();
			$('#index').addClass('contact-hover');
		};

		$('.pos-one').addClass('feature');
		$('.pos-one').removeClass('pos-one');
		$('.pos-two').addClass('pos-one');
		$('.pos-two').removeClass('pos-two');
		$('.pos-three').addClass('pos-two');
		$('.pos-three').removeClass('pos-three');
		$('.pos-four').addClass('pos-three');
		$('.pos-four').removeClass('pos-four');
		$('.pos-five').addClass('pos-four');
		$('.pos-five').removeClass('pos-five');
		$('.pos-six').addClass('pos-five');
		$('.pos-six').removeClass('pos-six');
		$('.pos-seven').addClass('pos-six');
		$('.pos-seven').removeClass('pos-seven');
		$('.pos-eight').addClass('pos-seven');
		$('.pos-eight').removeClass('pos-eight');
		$('.pos-nine').addClass('pos-eight');
		$('.pos-nine').removeClass('pos-nine');
		$('.pos-ten').addClass('pos-nine');
		$('.pos-ten').removeClass('pos-ten');
		$('.pos-eleven').addClass('pos-ten');
		$('.pos-eleven').removeClass('pos-eleven');
		$('.pos-twelve').addClass('pos-eleven');
		$('.pos-twelve').removeClass('pos-twelve');

		var x = 0;
		random(x);

		function random(x) {
		    x = Math.floor((Math.random() * 4) + 1);
			
			if( x == 1 ) {
				$('.scrollfix').append('<div class="element col-sm-3 pos-twelve contact"><div class="box"><div class="info-section"><h2>We like raising the bar. Often.</h2><p>Learn more about the event by clicking below.</p><div class="call"><span>View Report</span><i class="fa fa-chevron-right"></i></div></div><img src="/assets/palo_bg.jpg" /></div></div>');
			} else if( x == 2 ) {
				$('.scrollfix').append('<div class="element col-sm-3 pos-twelve contact"><div class="box"><div class="info-section"><h2>VMWare and Palo Alto Join Forces</h2><p>Learn more about the event by clicking below.</p><div class="call"><span>View Report</span><i class="fa fa-chevron-right"></i></div></div><img src="/assets/cartoon_bg.png" /></div></div>');
			} else if( x == 3 ) {
				$('.scrollfix').append('<div class="element col-sm-3 pos-twelve contact"><div class="box"><div class="info-section"><h2>Three time Gartner Magic Quadrant leader</h2><p>Learn more about the event by clicking below.</p><div class="call"><span>View Report</span><i class="fa fa-chevron-right"></i></div></div><img src="/assets/cartoon_bg.png" /></div></div>');
			} else {
				$('.scrollfix').append('<div class="element col-sm-3 pos-twelve contact"><div class="box"><div class="info-section"><h2>Safetly enable mobile devices</h2><p>Learn more about the event by clicking below.</p><div class="call"><span>View Report</span><i class="fa fa-chevron-right"></i></div></div><img src="/assets/server_bg.jpg" /></div></div>');
			};
		};
	};
	
	$("#feature-area").on("click", function() {
		featureclick();
	});

	$('#shuffle').on("click", function() {
		var i = 0;
		while (i < 40) {
			featureclick();
			i++;
		};
	});

});
