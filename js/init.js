(function($){
	$(function(){
		$('.timepicker').timepicker();
		$('.datepicker').datepicker();
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('.dropdown-trigger').dropdown();
		$('#textarea1').val('New Text');
		M.textareaAutoResize($('#textarea1'));

		 $('.carousel').carousel();
		 setInterval(function() {
		    $('.carousel').carousel('next');
		  }, 4000);

		 $('.carousel.carousel-slider').carousel({
		    fullWidth: true
		  });
	});
})(jQuery);

