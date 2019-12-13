var scroll_step = 15;
var scrolling = false;
var scroll_function_running = false;
var scroll_button = false;



function scrollContentup(){
	if (scrolling == true && scroll_button == true){
		window.scrollBy(0,-scroll_step);
		scrolldelay = setTimeout('scrollContentup()',50); // scrolls every 100 milliseconds
		}
	else {
		scroll_function_running = false;
	}
}

function scrollContentdown(){
	if (scrolling == true && scroll_button == true){
		window.scrollBy(0,scroll_step);
		scrolldelay = setTimeout('scrollContentdown()',50); // scrolls every 100 milliseconds
		}
	else {
		scroll_function_running = false;
	}
}


function enable_scrolling(upper_boundary=100, lower_boundary=100) {
	$(document).mousemove(function(e){
		if (scroll_button == true){
			if (10 < e.clientY && e.clientY < upper_boundary && e.clientX < $(window).width()/2){
				if (scroll_function_running == false){
					scrolling = true;
					console.log("scroll up");
					scrollContentup();
					scroll_function_running = true;
				}
			} else if ( $(window).height() - lower_boundary < e.clientY && e.clientY < $(window).height() - 10 && e.clientX > 9*$(window).width()/10) {
				if (scroll_function_running == false){
					scrolling = true;
					console.log("scroll down");
					scrollContentdown();
					scroll_function_running = true;
				}
			} else {
			scrolling = false;
			scroll_function_running = false;
			}
		}
	});
}


$(".toggle_scrolling_button").click(function() {
	scroll_button = !scroll_button;
	console.log("toggle");
})
