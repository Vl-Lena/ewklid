document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#header-nav').classList.toggle('is-active')
  })

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  })

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      active: 'false',
    });
  });

  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelectorAll('.tabs__btn').forEach(function (tabContent) {
        tabContent.classList.remove('tabs__btn_active')
      })
      event.currentTarget.classList.add('tabs__btn_active')
    })
  })
})
