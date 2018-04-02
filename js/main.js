/*  splash page fading in and out code taken from https://stackoverflow.com/questions/20823767/welcome-screen-before-website-loads-click-to-enter-splash-screen*/
 $('.enter_link').click(function() {
        $(this).parent().fadeOut(1000);
 });

/* hover over menu sections audio turn on/off 
code taken from http://jsfiddle.net/PsyWolf/W3XdA/8/ */
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

/* expand/shrink menu sections homepage */
$(function() {
    $('.home_nav_section').hover(function() {
        $(this).toggleClass('expand');
        $('.home_nav_section').not(this).toggleClass('shrink');
    });
});


( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            console.log(data.curTop);
        }
    });
} )( jQuery );

jQuery(function($) {
    setSkrollr($('.highlighter'), [[0, 'transform:translateX(-100%)'], [750, 'transform:translateX(100%)'], [1500, 'transform:translateX(-100%)']]);

    skrollr.init({
        smoothScrolling: false
    });
});


/* 2.27 */
