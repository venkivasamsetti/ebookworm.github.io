jQuery("#play").click(function () {
    jQuery("body,html").animate({
	
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#play").addClass("visible");
    } else {
        jQuery("#pause").addClass("visible");
    }
})