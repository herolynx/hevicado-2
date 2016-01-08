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
	
// SELECT

$(document).ready(function() {
	$('select').niceSelect();
});	

// SELECT

// TABS 


$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});



// SOME ACION

// SCROOL NAVIGATON

$(window).load(function(){
	$("#navigation #wrapper").mCustomScrollbar({	
		scrollbarPosition:"outside"
	});
});


$(document).ready(function() {
	
				
	// HIDE FILTER FIELD
	// ZROBIĆ ŁADNĄ ANIMACJE, ZMIENIC KOMUNIKAT i IKONĘ ORAZ TITLE
	
	$('.hide').click(function(){
		$(this).parent().toggleClass('hidden');
	
	});
	
	//  TEXTAREA COUNT SIGN (ADD ID!)
	
	$("section#visit textarea").keyup(function(){
	  $(".count span").text((500 - $(this).val().length));
	});
	
	

	
});