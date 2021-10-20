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
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });
      




const slider = tns({
    container: '.promo__slide',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
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