$(document).ready(function(){
	$('.menuBlock>ul>li').hover(
		function(){
			$(this).children().css({'background':'#31a7f0'}).find('.nawImg,.bottArr').css({'opacity':'1'});
			$(this).find('.inner').stop().slideDown();
		},
		function(){
			$(this).children().css({'background':'#0093ec'}).find('.nawImg,.bottArr').css({'opacity':'0.3'});
			$(this).find('.inner').stop().slideUp();
		}
	); //menu hover end
	
	if ( $('#foo2')[0] ){ 
               var carousel = $("#foo2");
                carousel.carouFredSel({
                    width: "100%",
                    height: "auto",
                    pagination: ".pager2",
                    mousewheel: true,
                    responsive: true,
                    circular: false,
                    auto: false,
                    items: {
                    visible: 1,
                    },
                    swipe: {
                        onMouse: true,
                        onTouch: true
                    },
                    scroll: {
                        fx: 'directscroll'
                    },
                    onCreate: function () {
                    $(window).on('resize', function () {
                      carousel.parent().add(carousel).height(carousel.children().first().height());
                    }).trigger('resize');
                    
                     $('#foo2 img.slide ').css('visibility', 'visible');
                    }
                });

        }//slider end
});//document ready end
