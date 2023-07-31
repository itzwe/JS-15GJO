
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
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
}
