$(document).ready(function(){
    $('.reviews__wrapper').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });

    $('.clients__wrapper').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 1200,
        prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('[data-modal=subscribe]').on('click', function() {
        $('.overlay, #subscribe').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #subscribe').fadeOut('slow');
    });

    $('[data-modal=register]').on('click', function() {
        $('#register').fadeIn('slow');
        $('#promo, #future, #reviews, #promo-video, #clients, #sponsors, #exibitors, #speakers, #articles, #contacts').fadeOut('fast');
    });

    $('[data-modal=page-detail]').on('click', function() {
        $('#page-detail').fadeIn('slow');
        $('#promo, #future, #reviews, #promo-video, #clients, #sponsors, #exibitors, #speakers, #articles, #contacts').fadeOut('fast');
        $(window).scrollTop(-500);
    });

    $('[data-modal=page-speaker]').on('click', function() {
        $('#page-speaker').fadeIn('slow');
        $('#promo, #future, #reviews, #promo-video, #clients, #sponsors, #exibitors, #speakers, #articles, #contacts').fadeOut('fast');
        $(window).scrollTop(-500);
    });
    $('[data-modal=events]').on('click', function() {
        $('#events').fadeIn('slow');
        $('#promo, #future, #reviews, #promo-video, #clients, #sponsors, #exibitors, #speakers, #articles, #contacts').fadeOut('fast');
        $(window).scrollTop(-500);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $('.pageup').fadeIn();
        }else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#menu]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
