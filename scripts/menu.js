// ----------------------------------------------------------------------------------
// Swipe menu out function. NOTE this is hidden with css for desktop view port sizes.
// ----------------------------------------------------------------------------------
var pad = document.getElementById("swipe-area");

function closeMenu() {
	$('#menu').removeClass("open");
	$('#dim').removeClass("dimmed");
}

$('.menuBtn').click(function() {
	$('#menu').toggleClass("open");
	$('#dim').toggleClass("dimmed");
});

$('#menu a').click(function() {
	closeMenu();
});

$('#close-menu').click(function() {
	closeMenu();
});

$('#dim').click(function() {
	closeMenu();
});

$(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		Hammer(pad).on("swipeleft", function() {
	    	$('#menu').removeClass("open");
	    });
	    
	    Hammer(pad).on("swiperight", function() {
	    	$('#menu').addClass("open");
	    });
	}
});