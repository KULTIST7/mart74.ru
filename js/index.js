$(document).ready(() => {
    let rellax = new Rellax('.parallax');

    let swiperCare = new Swiper('.swiper-care', {
        spaceBetween: 20,
        speed: 750,
        navigation: {
            nextEl: '.care__swiper-navigation .swiper-button-next',
            prevEl: '.care__swiper-navigation .swiper-button-prev'
        },
        pagination: {
            el: '.care__swiper-navigation .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    let objectMiniSwiper = new Swiper('.object__mini-swiper', {
        slidesPerView: 5,
        spaceBetween: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            800: {
                spaceBetween: 15
            }
        }
    });

    let objectSwiper = new Swiper('.object__swiper', {
        loop: true,
        speed: 750,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.object__swiper__arrows .swiper-button-next',
            prevEl: '.object__swiper__arrows .swiper-button-prev'
        },
        thumbs: {
            swiper: objectMiniSwiper
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });
    
    Fancybox.bind("[data-fancybox]");

    $('.header__burger-btn').on('click', () => {
        $('.burger').addClass('burger-open');
        $('body').addClass('body-noscroll');
    });

    $('.burger__close-btn').on('click', () => {
        $('.burger').removeClass('burger-open');
        $('body').removeClass('body-noscroll');
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({scrollTop:0}, 500, 'swing');
    });
    
    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
            $('.up').addClass('up-invisible');
        }
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 200) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
});