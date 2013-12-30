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
	// Hide bulb lists when selecting group or bulb
	$('.huegroup').click(function() {
		$('.huebulbs').not($(this).find('.huebulbs')).slideUp(100);
	});
});

$(document).ready(function() {
	var $hue_themes = $('.themebutton');
	var $hue_groups = $('.huegroup');
	$hue_groups.change(function() {
		// get group id
		var selected_group = $(this).data('groupid');
		// first hide all themes, then filter which themes to show
		$hue_themes.hide().filter('.group' + selected_group).show();
	});
	$('input:checked').closest('.huegroup').change();
});