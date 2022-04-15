
$(document).ready(function(){ 
	 $('#header img.b').hide();
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
	  $('#header img.a').fadeOut(0);
	  $('#header img.b').fadeIn(0);
    } else {
      $('#header').removeClass('header-scrolled');
	   $('#header img.b').fadeOut(0);
	  $('#header img.a').fadeIn(0);
    }
  })

 });
