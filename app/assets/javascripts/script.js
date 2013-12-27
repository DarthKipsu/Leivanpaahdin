$(document).ready(function() {
	$('.huegroup').mouseenter(function() {
		$(this).find('.huebulbs').stop(true).slideDown(200);
	});
	$('.huegroup').mouseleave(function() {
		$(this).find('.huebulbs').stop(true).slideUp(200);
	});
});