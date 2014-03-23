/*
*  jscript routine to change font size within the page
*  written by Barry Sharpen
*  
*  v0.1 05/03/2014
*    
*/
// device apis are available
function onDeviceReady() {
    // empty
}

function showAlertBox() {
    navigator.notification.alert(
       'Message box please display', // message
       alertDismissed,               // no callback
       'Message Box Title',          // title
       'Continue'                    // button text
    );
}
function alertDismissed(){
    navigator.notification.alert("alert box is dismissed");
}

function displayFont(fontPercent, fontSize) {
    $("html").css('font-size', fontPercent);
    $(".ui-btn").css('font-size', (fontSize - 2) + 'px');
    $(".ui-li-divider").css('font-size', fontSize + 'px');
    $(".ui-mobile label").css('font-size', fontSize + 'px');
}

function getFont() {
	FMS.printDebug('Update font details - ' + localStorage.font);
	calcFont(localStorage.font);
}

function setFont(font) {
	localStorage.setItem('font',font);
	calcFont(font);
}

function calcFont(font) {
	switch (font)
	{
	case 'l':
		// large
		displayFont('150%', '22');
		break;
	case 'x':
		// xlarge
		displayFont('180%', '26');
		break;		
	case 'm':
		// mega large
		displayFont('270%', '41');
		break;	
	default:
		displayFont('100%', '16');
	    break;
	}
}

function getTheme() {
	FMS.printDebug('Update theme details - ' + localStorage.Swatch);
	changeTheme(localStorage.Swatch);
}


function changeTheme(theme)
{
 //Dynamically changes the theme of all UI elements on all pages,
 //also pages not yet rendered (enhanced) by jQuery Mobile.
 
	
 // These themes will be cleared, add more
 // swatch letters as needed.
 var themes = " a b c";

 // Updates the theme for all elements that match the
 // CSS selector with the specified theme class.
 function setTheme(cssSelector, themeClass, theme)
 {
     $(cssSelector)
         .removeClass(themes.split(" ").join(" " + themeClass + "-"))
         .addClass(themeClass + "-" + theme)
         .attr("data-theme", theme);
 }

 // Add more selectors/theme classes as needed.
 setTheme(".ui-mobile-viewport", "ui-overlay", theme);
 setTheme("[data-role='page']", "ui-body", theme);
 setTheme("[data-role='header']", "ui-bar", theme);
 setTheme("[data-role='listview'] > li", "ui-bar", theme);
 setTheme(".ui-btn", "ui-btn-up", theme);
 setTheme(".ui-btn", "ui-btn-hover", theme);
 setTheme(".footernav", "ui-footer", theme);
 localStorage.setItem('Swatch',theme);
};
