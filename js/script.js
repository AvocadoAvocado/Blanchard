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
  },
  breakpoints: {
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },
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

let mySlider = new Swiper('.card-preview__swiper', {
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
    clickable: 'boolean',
  },
  breakpoints: {
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27
    },
  }
})

var buttonSwiper = new Swiper(".projects__swiper", {
  //effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 32
    },
  }
});

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

// map
function init() {
  var myMap = new ymaps.Map("map", {

    center: [55.76033441718593, 37.61357447360226],
    zoom: 14,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([55.76033441718593, 37.61357447360226], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

ymaps.ready(init);

// search
