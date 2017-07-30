$('.toggle').on('click touchstart', function(e){
    $('html').toggleClass('menu-active');
    e.preventDefault();
});

$("#nav li a").click(function() {
	if ( !$(this).parent().hasClass('menu-active') ) {
  	$('html').removeClass('menu-active');
  }
});

$(".wrapper").click(function() {
	if ( !$(this).parent().hasClass('menu-active') ) {
  	$('html').removeClass('menu-active');
  }
});

$(document).ready(function(){
	
	/* Angius */

	$('.menu1').click(function(){
	    /* mostra */
		$('#angius').removeClass('esconde');		
		$('#angius').addClass('mostra');

		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});

	/* Estetica */

	$('.menu2').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		/* mostra */
		$('#estetica').removeClass('esconde');		
		$('#estetica').addClass('mostra');

		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});

	/* Varizes */

	$('.menu3').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		/* mostra */
		$('#varizes').removeClass('esconde');		
		$('#varizes').addClass('mostra');

		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});


	/* Saude */

	$('.menu4').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		/* mostra */
		$('#saude').removeClass('esconde');		
		$('#saude').addClass('mostra');
		
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});

	/* Eco */

	$('.menu5').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		/* mostra */		
		$('#eco').removeClass('esconde');		
		$('#eco').addClass('mostra');

		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});
	
	/* Fistula */

	$('.menu6').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		/* mostra */		
		$('#fistula').removeClass('esconde');		
		$('#fistula').addClass('mostra');

		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});

	/* Convenios */

	$('.menu7').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		/* mostra */		
		$('#convenios').removeClass('esconde');		
		$('#convenios').addClass('mostra');

		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});

	/* Corpo */

	$('.menu8').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		/* mostra */				
		$('#corpo').removeClass('esconde');		
		$('#corpo').addClass('mostra');
/*
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
*/
	});

	/* Contato */

	$('.menu9').click(function(){
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
		/* mostra */				
/*
		$('#contato').removeClass('esconde');		
		$('#contato').addClass('mostra');
*/
	});

});

/*

$("#nav li a").click(function() {
	alert("Funciona");		
});


$('.menu2')[0].click(function() {
		$('#angius').addClass('esconde');		
		$('#angius').removeClass('esconde');		
		$('#estetica').addClass('mostra');		
});



$( ".menu2" ).click(function() {
/*	if ( $(this).is('menu2') ) { 
		$('#angius').removeClass('mostra');		
		$('#angius').addClass('esconde');
		$('#estetica').removeClass('esconde');		
		$('#estetica').addClass('style7 textblack spotlights mostra');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
});


$("#nav li a #menu1").click(function() {
		$('#angius').removeClass('esconde');		
		$('#angius').addClass('mostra');
		$('#estetica').removeClass('mostra');		
		$('#estetica').addClass('esconde');
		$('#varizes').removeClass('mostra');		
		$('#varizes').addClass('esconde');
		$('#saude').removeClass('mostra');		
		$('#saude').addClass('esconde');
		$('#eco').removeClass('mostra');		
		$('#eco').addClass('esconde');
		$('#fistula').removeClass('mostra');		
		$('#fistula').addClass('esconde');
		$('#convenios').removeClass('mostra');		
		$('#convenios').addClass('esconde');
		$('#corpo').removeClass('mostra');		
		$('#corpo').addClass('esconde');
		$('#contato').removeClass('mostra');		
		$('#contato').addClass('esconde');
});


	if ( $(this).hasClass('menu2') ) {
		$('#estetica').removeClass('esconde');
		$('#estetica').addClass('mostra');
	}
	if ( $(this).hasClass('menu3') ) {
		$('#varizes').removeClass('esconde');
		$('#varizes').addClass('mostra');
	}
	if ( $(this).hasClass('menu4') ) {
		$('#angius').toggleClass('esconde');
		$('#estetica').toggleClass('esconde');
		$('#varizes').toggleClass('esconde');
		$('#saude').toggleClass('mostra');
		$('#eco').toggleClass('esconde');
		$('#fistula').toggleClass('esconde');
		$('#convenios').toggleClass('esconde');
		$('#corpo').toggleClass('esconde');
		$('#contato').toggleClass('esconde');

	}
	if ( $(this).hasClass('menu5') ) {
		$('#angius').toggleClass('esconde');
		$('#estetica').toggleClass('esconde');
		$('#varizes').toggleClass('esconde');
		$('#saude').toggleClass('esconde');
		$('#eco').toggleClass('mostra');
		$('#fistula').toggleClass('esconde');
		$('#convenios').toggleClass('esconde');
		$('#corpo').toggleClass('toggle');
		$('#contato').toggleClass('esconde');
	}
*/



(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$sidebar = $('#sidebar');

		// Hack: Enable IE flexbox workarounds.
			if (skel.vars.IEVersion < 12)
				$body.addClass('is-ie');

		// Disable animations/transitions until the page has loaded.
			if (skel.canUse('transition'))
				$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});



		// Forms.

			// Fix: Placeholder polyfill.
				$('form').placeholder();

			// Hack: Activate non-input submits.
				$('form').on('click', '.submit', function(event) {

					// Stop propagation, default.
						event.stopPropagation();
						event.preventDefault();

					// Submit form.
						$(this).parents('form').submit();

				});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Sidebar.
			if ($sidebar.length > 0) {

				var $sidebar_a = $sidebar.find('a');

				$sidebar_a
					.addClass('scrollya')
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$sidebar_a.removeClass('active');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								top: '-20vh',
								bottom: '-20vh',
								initialize: function() {

									// Deactivate section.
										if (skel.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($sidebar_a.filter('.active-locked').length == 0) {

											$sidebar_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

			}

		// Scrolly.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: function() {

					// If <=large, >small, and sidebar is present, use its height as the offset.
						if (skel.breakpoint('large').active
						&&	!skel.breakpoint('small').active
						&&	$sidebar.length > 0)
							return $sidebar.height();

					return 0;

				}
			});

		// Spotlights.
			$('.spotlights > section')
				.scrollex({
					mode: 'middle',
					top: '-10vh',
					bottom: '-10vh',
					initialize: function() {

						// Deactivate section.
							if (skel.canUse('transition'))
								$(this).addClass('inactive');

					},
					enter: function() {

						// Activate section.
							$(this).removeClass('inactive');

					}
				})
				.each(function() {

					var	$this = $(this),
						$image = $this.find('.image'),
						$img = $image.find('img'),
						x;

					// Assign image.
						$image.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set background position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide <img>.
						$img.hide();

				});

		// Features.
			if (skel.canUse('transition'))
				$('.features')
					.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						initialize: function() {

							// Deactivate section.
								$(this).addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$(this).removeClass('inactive');

						}
					});

	});

})(jQuery);


