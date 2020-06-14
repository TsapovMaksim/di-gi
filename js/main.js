$(function () {
    $('.slider__inner').slick({
        dots: true,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/next-arrow.svg" alt="next arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/prev-arrow.svg" alt="previous arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $(".bottom-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});