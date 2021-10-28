$(document).ready(function(){
    $('.reviews__wrapper').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
    });
    $('.clients__wrapper').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 1200,
        prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
    });
    $('.promo__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="prev"><img src="icons/left_white.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/right_white.svg"></button>',
    });
});

$('[data-modal=subscribe]').on('click', function() {
    $('.overlay, #subscribe').fadeIn('slow');
});
$('.modal__close').on('click', function(){
    $('.overlay, #subscribe').fadeOut('slow');
});
