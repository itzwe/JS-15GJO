
export function keywordSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: '1',
    mousewheel: true,
    centeredSlides: true, 
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-paginate',
      type: 'bullets',
      renderBullet: function (index, className) {
        return `<span class="${className} bg-lionPrimary"></span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
}
