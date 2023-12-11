new Swiper('#trusted-slider', {
  slidesPerView: 5,
  autoplay: { delay: 2500 },
  breakpoints: {
    310: { slidesPerView: 1 },
    420: { slidesPerView: 2 },
    550: { slidesPerView: 3 },
    768: { slidesPerView: 4, autoplay: true },
    1050: { slidesPerView: 5 },
  },
})

new Swiper('#read-slider', {
  slidesPerView: 2,
  spaceBetween: 36,
  navigation: {
    nextEl: '.read-navigation__right',
    prevEl: '.read-navigation__left',
  },
})
