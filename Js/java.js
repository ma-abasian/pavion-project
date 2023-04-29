// videoPlayer
// videoPlayer
// videoPlayer

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function playPause(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
    myVideo.play();
}

function stopVideo() {
    myVideo.pause();
    videoPlayer.style.display = "none";
}

// if (myVideo.paused) {
//         $('#video-s').show();
//         myVideo.play();
//     }
//     else {
//         $('#video-s').hide();
//         myVideo.pause();
//     }


// sub menu
// sub menu

var timer = {};
var menu = document.getElementById("menu");

$('> li > a', menu).hover(function () {
    var tag = $(this).parents('.item');
    var timerAttr = tag.attr('data-time');

    clearTimeout(timer[timerAttr]);
    timer[timerAttr] = setTimeout(function () {
        $('> .sub-menu',tag).fadeIn(0);
                
    }, 400);
}, function () {

    var tag = $(this).parents('.item');
    var timerAttr = tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
            
    timer[timerAttr] = setTimeout(function () {
        $('> .sub-menu',tag).fadeOut(0);

    }, 400);
});

// footer social
// footer social


var social = document.getElementById("social");

function socialClick(tag) {

    if ($(tag).hasClass('active')) {
        $('a', social).hide();
        $('span', social).removeClass('active');
    } else {

        $('a', social).hide();
        $('span', social).removeClass('active');
        $('> a', tag).show();
        $(tag).addClass('active');
    }

}

// responsive menu
// responsive menu
var topMenu = document.getElementById("top-menu"); 

function menuBtn(tag) {
    if ($(tag).hasClass('active')){
        $(topMenu).slideUp();
        $(tag).removeClass('active');
    } else{
        $(topMenu).slideDown();
        $(tag).addClass('active');
    }
}