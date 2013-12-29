// Hue group selector menu mouseover
$(document).ready(function() {
	var $hg = $('.huegroup');
	$hg.mouseenter(function() {
		$(this).find('.huebulbs').stop(true).slideDown(100);
	});
	$hg.mouseleave(function() {
		if ($(this).find('.dd_bulb:checked').length==0) {
			//.length==0 means the selector is empty (no bulb is selected)
			$(this).find('.huebulbs').stop(true).slideUp(100);
		}
	});
	// Hide the other bulb lists when selecting new one
	$('.huebulbs').click(function() {
		$('.huebulbs').not(this).slideUp(100);
	});
	// Hide bulb lists when selecting group
	$('.dd_group').click(function() {
		$('.huebulbs').not(this).slideUp(100);
	});
});

// Show correct themes when group1 selected
$(document).ready(function() {
	var $huegroup = $('.group1_v');
	$huegroup.change(function() {
		$('.group1').show();
		$('.group2').hide();
		$('.group3').hide();
	});
	if ($huegroup.is(':checked')) {
		$huegroup.change();
	}
});

// Show correct themes when group2 selected
$(document).ready(function() {
	var $huegroup = $('.group2_v');
	$huegroup.change(function() {
		$('.group2').show();
		$('.group1').hide();
		$('.group3').hide();
	});
	if ($huegroup.is(':checked')) {
		$huegroup.change();
	}
});

// Show correct themes when group3 selected
$(document).ready(function() {
	var $huegroup = $('.group3_v');
	$huegroup.change(function() {
		$('.group3').show();
		$('.group1').hide();
		$('.group2').hide();
	});
	if ($huegroup.is(':checked')) {
		$huegroup.change();
	}
});