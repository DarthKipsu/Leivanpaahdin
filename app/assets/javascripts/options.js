$(document).ready(function() {
	$("#create-theme").click(function() {
		loading(); // loading
		setTimeout(function(){ // then show popup, deley in .5 second
			loadPopup(); // function show popup
		}, 200); // .5 second
		return false;
	});
	/* event for close the popup */
	$("div.close").hover(
		function() {
			$('span.ecs_tooltip').show();
		},
		function () {
			$('span.ecs_tooltip').hide();
	});
	$("div.close").click(function() {
		disablePopup();  // function close pop up
	});
	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			disablePopup();  // function close pop up
		}
	});

/************** start: functions. **************/
	function loading() {
		$("div.loader").show();
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');
	}

	var popupStatus = 0; // set value

	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#theme-popup").fadeIn(0500); // fadein popup div
			popupStatus = 1; // and set value to 1
		}
	}
	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#theme-popup").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
/************** end: functions. **************/
});