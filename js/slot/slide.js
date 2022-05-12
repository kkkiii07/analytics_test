
'use strict';

window.addEventListener("DOMContentLoaded", () => {
  const infiniteSlider = new Swiper(".infinite-slider", {
    loop: true,
    // loopedSlides: 8,
    // spaceBetween: 12,
    // slidesPerView: 12,
    // slidesPerView: "auto",
    speed: 10000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1100: {
        slidesPerView: 12,
        slidesPerGroup: 12,
        spaceBetween: 0
      },
      600: {
        slidesPerView: 8,
        slidesPerGroup: 8,
        spaceBetween: 0
      },
      300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0
      }
    },
  });
});