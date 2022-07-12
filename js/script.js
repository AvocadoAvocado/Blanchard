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
    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
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
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27
    },
  }
})

var buttonSwiper = new Swiper(".projects__swiper", {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },

    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  }
});

// burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const menuClose = document.querySelector(".header__menu-close");

burger.addEventListener('click', function () {
    menu.classList.add('header__menu--visible');
});

menuClose.addEventListener('click', function (){
    menu.classList.remove('header__menu--visible');
});

// select-list
const selectButtons = document.querySelectorAll('.header__select-btn');
selectButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        btn.classList.toggle('header__select-btn-toggle');

        const list = btn.nextElementSibling;
        list.classList.toggle('visible-block');
    });
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
let buttonSearch = document.querySelector('.search');
let wrapperSearch = document.querySelector('.header__container-search');
let formSearch = document.querySelector('.header__container-form');
let buttonSearchClose = document.querySelector('.header__search-close')

buttonSearch.addEventListener('click', ()=> {
  wrapperSearch.classList.add('header__container-search--position');
  formSearch.classList.remove('header__container-form--invis');
})

buttonSearchClose.addEventListener('click', function (){
  wrapperSearch.classList.remove('header__container-search--position');
  formSearch.classList.add('header__container-form--invis');
});

// loupe
let btnLoupe = document.querySelectorAll('.gallery__swiper-btn-img');
let galleryModal = document.querySelector('.gallery__modal');
let buttonModalClose = document.querySelector('.gallery__modal-close')


btnLoupe.forEach(function (btn) {
  btn.addEventListener('click', function () {
    galleryModal.classList.remove('gallery__modal--invis');
  })
})

buttonModalClose.addEventListener('click', function (){
  galleryModal.classList.add('gallery__modal--invis');
});
