new Swiper('#trusted-slider', {
  slidesPerView: 5,
})

new Swiper('#read-slider', {
  slidesPerView: 2,
  spaceBetween: 36,
  navigation: {
    nextEl: '.read-navigation__right',
    prevEl: '.read-navigation__left',
  },
})
