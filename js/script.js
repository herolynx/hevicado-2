// RESPONSIVE


	$(window).resize(function() {
		var windowSize = $(window).outerWidth();
		
		if ($(window).width() <= 767) {
			
		
			console.log('mobile');
		}
		
		// else if (($(window).width() >= 768) && ($(window).width() <= 1024)) {
		
				
			// console.log('tablet');
		// }
		
		
		
		else {
			
			$(window).change(function(){
			
				$(window).resize(function(){
					var screen = $(this);    
					var screen_width = $(this).outerWidth();
					var check = $('#trigger');
				
					if(check.is(':checked'))  {
						$('#main-content').animate({			
							width: screen_width - 200,
						},190);
					} else {
						$('#main-content').animate({			
							width: screen_width,
						},50);
					}
				});
				
			 $(window).resize();
			});
			
			console.log('destop');
		}
	});
	
	$(window).resize();

	
	
	$(window).resize(function(){
		var height_box = $('#calendar .week ul li+li .day .box, #calendar .oneday ul li+li .day .box').outerHeight();
		
		$('#calendar .week ul li.hour .day, #calendar .oneday ul li.hour .day').css('height', height_box);

	});
		
	$(window).resize();


// RESIZE FILTER IF SCROLL

$(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 20) {
			$('.filter').addClass('small');
		} else {
			$('.filter').removeClass('small');
		}
	});			
});




// DELETE COMPONENT	

// TABS 

$(document).ready(function(){
	
	$('nav li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('nav li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});


// SLIDER SEARCH 
if ($('.bxslider').length > 0) { 
   $('.bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		mode: 'horizontal',
	});
}


//  TEXTAREA COUNT SIGN (ADD ID!)
	
	
	// $("section#visit textarea").keyup(function(){
	  // $(".count span").text((500 - $(this).val().length));
	// });

// DELETE COMPONENT	





// SOME ACION

// SCROLL NAVIGATON

$(window).load(function(){
	$("#navigation #wrapper").mCustomScrollbar({	
		scrollbarPosition:"outside"
	});
});


$(document).ready(function() {
	
				
	// HIDE FILTER FIELD
	// CREATE BEAUTIFU HIDDEN ANIMATION :)
	
	$('.hide').click(function(){
		$(this).parent().toggleClass('hidden');
	
	});
	
	// LEGEND SHOW / HIDE
	
	$('.legend a').click(function(e){
		e.preventDefault();
		$('ul.position').slideToggle('fast');
	
	});
	
	// TEXTAREA CABINET HEIGHT
	if ($('.elastic').length > 0) { 
		$('.elastic').elastic();
	}
		
	// SELECT

	$('select').niceSelect();

	// SELECT
	
	
	// COLOR PICKER
	if ($('.colorpicker').length > 0) { 
		$('.colorpicker').each( function() {
				$(this).minicolors({
				control: $(this).attr('data-control') || 'hue',
				defaultValue: $(this).attr('data-defaultValue') || '',
				format: $(this).attr('data-format') || 'hex',
				keywords: $(this).attr('data-keywords') || '',
				inline: $(this).attr('data-inline') === 'true',
				letterCase: $(this).attr('data-letterCase') || 'lowercase',
				opacity: $(this).attr('data-opacity'),
				position: $(this).attr('data-position') || 'bottom left',
				change: function(value, opacity) {
					if( !value ) return;
					if( opacity ) value += ', ' + opacity;
					if( typeof console === 'object' ) {
						console.log(value);
					}
				},
				theme: 'default'
			});

		});
	}

	// COLOR PICKER
	
});