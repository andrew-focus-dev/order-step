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
    300: { spaceBetween: 0, slidesPerView: 1 },
    768: { spaceBetween: 15, slidesPerView: 2 },
  },
})

const accardion = () => {
  const activeCls = 'benefits-item--show'
  const triggers = document.querySelectorAll('[data-acardion]')

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      const valueAttr = e.target.dataset.acardion
      const current = document.querySelector(`[data-el=${valueAttr}]`)

      current.classList.toggle(activeCls)
    })
  })
}

const tabs = ({ activeTabCls, activeBtnCls, btns, tabs }) => {
  const resetTabs = () => {
    tabs.forEach(tab => tab.classList.remove(activeTabCls))
    btns.forEach(btn => btn.classList.remove(activeBtnCls))
  }

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      resetTabs()

      const valueAttr = e.target.dataset.tabBtn
      const current = document.querySelector(`[data-tab="${valueAttr}"]`)

      current.classList.add(activeTabCls)
      btn.classList.add(activeBtnCls)
    })
  })

  btns[0].click()
}

tabs({
  activeTabCls: 'features-row--show',
  activeBtnCls: 'btn--blue',
  btns: document.querySelectorAll('.features [data-tab-btn]'),
  tabs: document.querySelectorAll('.features [data-tab]'),
})

tabs({
  activeTabCls: 'benefits-row--show',
  activeBtnCls: 'btn--blue',
  btns: document.querySelectorAll('.benefits [data-tab-btn]'),
  tabs: document.querySelectorAll('.benefits [data-tab]'),
})

accardion()
