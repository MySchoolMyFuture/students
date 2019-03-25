$(document).ready(function () {
    // start carrousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: false
    });


    // move next carousel
    $('.moveNextCarousel').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    // move prev carousel
    $('.movePrevCarousel').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });

    // move prev carousel
    $('.movePrevNewsCarousel').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#divNews').carousel('prev');
    });

    // move prev carousel
    $('.moveNextNewsCarousel').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('#divNews').carousel('next');
    });

    $('select').formSelect();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.parallax').parallax();
    $('.slider').slider({
        indicators: false,
        duration: 20
    });
    
    $('.slider').removeAttr('style');
    $('.slides').removeAttr('style');
    $("#divNews").removeAttr('style');
    $('.fixed-action-btn').floatingActionButton();
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 10000);
    }

    $('ul.tabs').on('click', 'a', function (e) {
        
        if (window.matchMedia('(max-width: 768px)').matches) {
            // do functionality on screens smaller than 768px
           // $("#test2").css('display', "block");
        }
        else{
           // $("#test2").css('display', "flex");
        }
    });

    //remove attributes

});