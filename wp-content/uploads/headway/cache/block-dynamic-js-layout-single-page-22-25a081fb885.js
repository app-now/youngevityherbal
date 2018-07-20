
			jQuery.noConflict();
    		(function ($){
    			jQuery(document).ready(function(){
    					$("#hwr-contact-bss546c2e8e83837 .toggle-direction-board").click(function(e) {

    						var directions_board = "#hwr-directions-board-bss546c2e8e83837";
    						e.preventDefault();

    						if ($(directions_board).hasClass("close")) {

    						$("html,body").animate({
						       scrollTop: $(".hwr-contact").offset().top - 20},
						       "slow", function() {

						           $(directions_board).delay(200).slideDown(500, function() {
				           		   		$(this).delay(500).removeClass("close");
				           		   });

						        });



								$(this).text("Hide Directions");

    						} else {

    							$(directions_board).slideUp(500, function() {
									$(this).delay(500).addClass("close");
								});

    							$(".toggle-direction-board.in-map").text("Get Directions");
    						}

    					});
							$("#hwr-contact-bss546c2e8e83837 .hwr-row").each( function() {

								var columnHeight = $(this).height();
								var updated_height = columnHeight;
										$(this).find(".hwr-form.hwr-inner").css("height", columnHeight + "px");
										$(this).find(".hwr-address.hwr-inner").css("height", columnHeight + "px");
									
										$(this).find(".hwr-map.hwr-inner").css("height", columnHeight + "px");
										$(this).find(".hwr-map-container").css("height", "100%");
									})});
    		})(jQuery);

