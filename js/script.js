$(function(){
	AOS.init();	
});
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
	var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.booking').fadeIn();
    } else {
        $('.booking').fadeOut();
    }
});