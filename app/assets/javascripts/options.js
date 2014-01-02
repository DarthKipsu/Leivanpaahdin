$(document).ready(function() {
	var popupStatus = 0; // set value
	$(".option-button").click(function() {
		// add loading animation
		loading();
		var selectedOption = $(this).data('create')
		setTimeout(function() { 
			if (popupStatus == 0) { // if value is 0, show popup
				closeloading();
				if (selectedOption=='theme') {
					$("#theme-popup").fadeIn(0200);
				}
				else if (selectedOption=='schedule') {
					$('#schedule-popup').fadeIn(0200);
				}
				else if (selectedOption=='wakeup') {
					$('#wakeup-popup').fadeIn(0200);
				}
				popupStatus = 1; // and set value to 1
			}
		// open popup in 0.2 secs
		}, 200);
		return false;
	});

	// Functions open
	function loading() {
		$("div.loader").show();
	}

	function closeloading() {
		$("div.loader").fadeOut('normal');
	}

	// show closing tooltip
	$("div.close").hover(
		function() {
			$('span.esc_tip').show();
		},
		function () {
			$('span.esc_tip').hide();
	});

	// close popup fron X
	$("div.close").click(function() {
		disablePopup();
	});

	// close popup with esc
	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Esc' in the keyboard
			disablePopup(); 
		}
	});

	// close when click outside box
	$(document).mouseup(function(e) {
		var popupWindow = $('.popup')
		if (!popupWindow.is(e.target)
			&& popupWindow.has(e.target).length === 0) {
			disablePopup();
		}
	});

	// function close
	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#theme-popup").fadeOut("normal");
			$("#schedule-popup").fadeOut("normal");
			$("#wakeup-popup").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
});