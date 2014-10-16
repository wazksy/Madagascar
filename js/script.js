jQuery(function($) {

	



	// Animations start
	
	$('.has-animation').waypoint(function() {

		var type = $(this).data('animation');

		$(this).toggleClass('animated ' + type);

	},
	{
		offset: '70%',
		triggerOnce: true
	});

	// [end] Animations start





	// Boxes close
	
	$('.box__close').click(function(e) {

		e.preventDefault();

		$(this).parent('.box').hide();
	});

	// [end] Boxes close





	// Toggle
	
	$('.toggle__link').click(function(e) {

		e.preventDefault();

		$(this).toggleClass('toggle__link--active').siblings('.toggle__content').toggleClass('toggle__content--active');
	});

	// [end] Toggle





	// Toggle Accordion
	
	$('.toggle--accordion__link').click(function(e) {

		e.preventDefault();

		var $parent = $(this).parents('.toggle--accordion__nav');

		$parent.find('.toggle--accordion__link').removeClass('toggle--accordion__link--active');
		$parent.find('.toggle--accordion__content').removeClass('toggle--accordion__content--active');

		$(this).addClass('toggle--accordion__link--active').siblings('.toggle--accordion__content').addClass('toggle--accordion__content--active');
	});

	// [end] Toggle





	// Tabs
	
	$('.tab__link').click(function(e) {

		e.preventDefault();

		var tabNum = $(this).parent().index();
		var nthChild = tabNum + 1;

		$(this).parents('.tab__nav').find('.tab__link').removeClass('tab__link--active');
		$(this).addClass('tab__link--active');

		$(this).parents('.tab').find('.tab__tab').removeClass('tab__tab--active');
		$(this).parents('.tab').find('.tab__content .tab__tab:nth-child('+nthChild+')').addClass('tab__tab--active');

	});

	// [end] Tabs

});