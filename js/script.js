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
