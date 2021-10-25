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

const sponsors = document.querySelector('.sponsors');
sponsors.addEventListener('click', () => {
    menu.classList.add('display: block');
});

const hamburger = document.querySelector('.hamburger'),
           menu = document.querySelector('.menu'),
           closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-counter'),
    lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});