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
		      scrollTop: target.offset().top - 100
		    }, 1000);
		    return false;
		  }
		}
	});
	
	$(".section").hover(function() {
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

	$(".nav-list li").hover(function() {
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

});
