$(document).ready(function(){

    // PAGE UP SECTION
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#topBtn').fadeIn();
        }else{
          $('#topBtn').fadeOut();
        }
        });
      
        $("#topBtn").click(function(){
        $('html,body').animate({scrollTop: 0},900)
    });

});

// PAGE LOADING SECTION
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

// MOBILE MENU 
function openNav(){
	document.getElementById("myNav").style.width = "90%";
}

function closeNav(){
	document.getElementById("myNav").style.width = "0%";
}

// SEARCH BOX BY NAVIGATION SECTION
function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}