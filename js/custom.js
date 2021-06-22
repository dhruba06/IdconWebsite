/*####################################
                SERVICES
######################################*/

$(function() {
    //animate on scroll
    new WOW().init();
});

/*####################################
                WORK
######################################*/

$(function() {
    $("#work").magnificPopup({
        delegate: 'a',
        type : 'image',
        gallery: {
            enabled: true
        }
    });
});

/*####################################
                TEAM
######################################*/

$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // break point from 0 up
            0:{
                items: 1
            },
            // break point from 480 up
            480:{
                items: 2
            },
            // break point from 768 up
            768:{
                items: 3
            
            }           
        }
    });
});

/*####################################
                TESTIMONIAL
######################################*/

$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*####################################
                STATS
######################################*/

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*####################################
                CLIENTS
######################################*/

$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // break point from 0 up
            0:{
                items: 1
            },
            // break point from 480 up
            480:{
                items: 3
            },
            // break point from 768 up
            768:{
                items: 5
            
            },
            // break point from 992 up
            992: {
                items: 6
            }
        }
    });
});

/*####################################
                NAVIGATION
######################################*/
// show / hide black transparent navigation bar
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            //Hide nav
            $("nav").removeClass("idcon-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("idcon-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// smooth scroll

$(function() {
    $("a.smooth-scroll").click(function(event){

        event.preventDefault();

        // get/return id like #about, #work
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top 
        }, 1250, "easeInOutExpo");
    });
});

// close mobile menu on click
// $(function() {

//     $(".navbar-collapse ul li a").on("click touch", function() {
//         $(".navbar-toggle").click();
//     });
// });