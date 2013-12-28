// Hue group selector menu mouseover
$(document).ready(function() {
	$('.huegroup').mouseenter(function() {
		$(this).find('.huebulbs').stop(true).slideDown(100);
	});
	$('.huegroup').mouseleave(function() {
		$(this).find('.huebulbs').stop(true).slideUp(100);
	});
});

// Show correct themes when group1 selected
$(document).ready(function() {
	var $huegroup = $('#groupselector-group1')
	$huegroup.click(function() {
		$('.group1').show();
		$('.group2').hide();
		$('.group3').hide();
	});
});

// Show correct themes when group2 selected
$(document).ready(function() {
	var $huegroup = $('#groupselector-group2')
	$huegroup.click(function() {
		$('.group2').show();
		$('.group1').hide();
		$('.group3').hide();
	});
});

// Show correct themes when group3 selected
$(document).ready(function() {
	var $huegroup = $('#groupselector-group3')
	$huegroup.click(function() {
		$('.group3').show();
		$('.group1').hide();
		$('.group2').hide();
	});
});