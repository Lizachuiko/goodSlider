$(function () {
    var topSlider = $(".topSlider");
    var bottomSlider = $(".bottomSlider");
    var slidesPerPage = 3;
    var syncedSecondary = true;

    topSlider.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true
    });

    bottomSlider
        .owlCarousel({
            center: true,
            items : slidesPerPage,
            loop: true,
            dots: false,
            nav: false,
            margin: 10,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            freeDrag: false,
            smartSpeed: 200,
            slideSpeed : 500,
            responsiveRefreshRate : 100,
            responsive: {
                741: {
                    items : slidesPerPage
                }
            }
        })

    topSlider.on('change.owl.carousel', function(event) {
        var target = event.relatedTarget.relative(event.property.value, true);
        bottomSlider.owlCarousel('to', target, 300);
    })

    bottomSlider.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        number += 1;
        topSlider.owlCarousel('to', number, 300);
    });

    $('.test').click(function (e) {
        $('.goodPopup-wrap').fadeIn(300);
        $('html').addClass('fancybox-margin');
    });

    $('.goodPopup-overlay, .goodPopup-close').click(function () {
        $('.goodPopup-wrap').fadeOut(300);
        $('html').removeClass('fancybox-margin');
    })
});