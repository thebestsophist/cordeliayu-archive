/*  Author: 

	Basic media queries, set in pixels to better deal
	with images. I've included a basic image replacement 
	examples for responsive images but you'll want to 
	edit your own based on how the how the images work
	in your layout.

*/
// Sets window properties as cookies for server-side optimizations
$(document).ready(function(){
	getWindowProperties();
	getScreenProperties();
	$("html").removeClass('no-js');
	$("header[role=banner] h1").fitText(1.2);

//	Initializes day/night/auto cookie
	if ($.cookie('night') == null){
		$.cookie('night', 'auto', {path:'/'});
	}

//	Lowers nav element opacity when over main text
	silenceNav();

//	Tooltips
	$('div#utilities a, div#utilities button, nav#global a').tipsy({trigger:'focus', gravity:'n'});
	$('div#utilities a, div#utilities button, nav#global a').tipsy({ gravity:'n'});


});
$(window).resize(getWindowProperties);
$(screen).resize(getScreenProperties);
/* Help info modal window */
$("a[href=#info]").colorbox({inline:true, href:"#info"});

/* Toggle Permalinks */
$("button#show-permalinks").click(function() {
	$("body").toggleClass("permalinks",750);
});

/* Toggle Permalinks */
$("button#show-annotations").click(function() {
	$("body").toggleClass("annotations",750);
});

/* Switch Day/Night mode */
$("button#day-night").click(
	function() {
		if ($.cookie('night') === 'auto') {
			$.cookie('night','no', {path:'/'});
			$("button#day-night").addClass("entypo-light-up").removeClass("entypo-light-down").removeClass("entypo-adjust");
			$("body").removeClass("night",750);
		}
		else if ($.cookie('night') === 'no') {
			$.cookie('night','yes', {path:'/'});
			$("button#day-night").addClass("entypo-light-down").removeClass("entypo-light-up").removeClass("entypo-adjust");
			$("body").addClass("night",750);
		}
	
		else if ($.cookie('night') === 'yes') {
			$.cookie('night', 'auto', {path:'/'});
			$("button#day-night").addClass("entypo-adjust").removeClass("entypo-light-up").removeClass("entypo-light-down");
			
			$.get('/back/day-night/', function(data){
				daynight = $(data).find("daynight").text();
				if (daynight == 'night') { $("body").addClass("night",750); }
				if (daynight == 'day') { $("body").removeClass("night",750); }
			});
		}
});

/* Keyboard shortcuts */
$(document).keypress(function(keypress) {
    if ($(keypress.target).is('input, textarea, svg, object, iframe')) {
    	/* Kills keypress when in an input, textarea, &c. */
    }
    
    else {
		switch (keypress.which) {
			case 104:
				window.location = $("[role=banner] h1 a").attr('href');
			break;

			case 112:
				$("body").toggleClass("permalinks",750);
			break;

			case 100:
				$("button#day-night").trigger('click');
			break;
		}
    }
});

/* 
	Hi! Have you figured out what this is? If you like it,
	feel free to copy it, just send us a message when you do.
	(We want to see it in action!)
	By the way, don't forget to include Ben Alman's replaceText 
	plugin http://benalman.com/projects/jquery-replacetext-plugin/
*/
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";  
	$(document).keydown(function(e) {
		kkeys.push( e.keyCode );  
		if ( kkeys.toString().indexOf( konami ) >= 0 ){  
	    	$(document).unbind('keydown',arguments.callee);  
	
			{
				$("header[role=banner] h1").attr('style','font-size: 90px');
				$('body *, head title').replaceText(/an/g, 'un').replaceText(/An/g, 'An').replaceText(/au/g, 'oo').replaceText(/Au/g, 'Oo').replaceText(/a/g,'e').replaceText(/A/g,'E').replaceText(/en\b/g,'ee').replaceText(/\Bew/g,'oo').replaceText(/\be/g,'e-a').replaceText(/\be/g,'i').replaceText(/\bE/g,'I').replaceText(/\Bf/g,'ff').replaceText(/\Bir/g,'ur').replaceText(/\Bi/g,'ee').replaceText(/\Bow/g,'oo').replaceText(/\bo/g,'oo').replaceText(/\BO/g,'Oo').replaceText(/\bo/g,'u').replaceText(/the/g,'zee').replaceText(/\bThe/g,'Zee').replaceText(/th\b/g,'t').replaceText(/th\b/g,'shun').replaceText(/u/g,'oo').replaceText(/\bU/g,'Oo').replaceText(/v/,'f').replaceText(/\bV/g,'F').replaceText(/w/g,'v').replaceText(/W/g,'V').replaceText(/\&\#8217;s\b/g,"\'\&\#8217;s a");
				$('#home_page .page_title h1').replaceWith('<h1 class="vemake">Ve meke zee Internet ooseffool.</h1>');
				$('#contact i').replaceWith('<i>(It&#8217;ll be totelly vort yooor teeme, ve promeese.)</i>');
			};
		};
	});

/* Only < 48em */
if (Modernizr.mq('only screen and (max-width: 767px)')) {

}

/* Anything > 48em */
if (Modernizr.mq('only screen and (min-width: 768px)')) {

	/* Replaces a mobile full-width image at 768px into one at 960px
	   
	   Similar to the ideas in
	 - https://github.com/joshje/Responsive-Enhance and
	 - https://github.com/filamentgroup/Responsive-Images
	   but takes advantage of the JIT image manipulation
	   extension that is included by default.
	*/
	
/*	$('img').attr('src', function(index, attr) {
		return attr.replace('image/1/768', 'image/1/960');
	});
*/
}

/* Between 48em and 60em */
if (Modernizr.mq('only screen and (min-width: 768px) and (max-width: 960px)')) {

}

/* Anything > 60em */
if (Modernizr.mq('only screen and min-width: 960px)')) {

}


/* High pixel density */
if (window.devicePixelRatio >= 1.5) {

}

/* Portrait orientation */
if (window.orientation == 0 || 180) {

}

/* Landscape orientation */
if (window.orientation == 90 || 240) {

}
