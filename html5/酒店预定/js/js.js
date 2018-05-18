$(function(){
    redy()
    function redy(){
    	$('html').css('fontSize',$(window).width()/375*100)
    }
    $(window).resize(redy) 
})