// swiper
const slider = document.querySelector('.swiper-container');

let swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  }
})

let mySwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  loop: true,
});

let bottomSwiper = new Swiper('.card-preview__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.card-preview__pagination',
      type: 'bullets',
      clicable: true,
  },

  autoHeight: true,
})

// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let close = document.querySelector('.nav__close');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
})

close.addEventListener('click',
  function () {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

// accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// tabs



// search
