new Swiper('#trusted-slider', {
  slidesPerView: 5,
  autoplay: { delay: 2500 },
  breakpoints: {
    300: { slidesPerView: 3, spaceBetween: 35 },
    420: { slidesPerView: 3, spaceBetween: 15 },
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
  breakpoints: {
    300: {spaceBetween: 0, slidesPerView: 1},
    768: { spaceBetween: 15, slidesPerView: 2 },
  },
})
