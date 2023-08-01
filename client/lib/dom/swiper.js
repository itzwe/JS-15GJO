import { addClass, getNode, getNodes, removeClass } from './index.js';
import { saveStorage } from '../utils/storage.js';

const keywordButtons = getNodes('.swiper-slide button');
const maxKeyword = 5;
const selectedKeywords = [];

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

export function handleKeyword(event) {
  const target = event.target.closest('.swiper-slide button');
  if (!target) return;

  const isClass = target.classList.contains('bg-lionPrimary');

  if (isClass) {
    removeClass(target, 'bg-lionPrimary');
    const selectedKeyword = target.textContent.trim();
    const index = selectedKeywords.indexOf(selectedKeyword);
    
    if (index !== -1) {
      selectedKeywords.splice(index, 1);
    }
  } else {
    if (selectedKeywords.length < maxKeyword) {
      const selectedKeyword = target.textContent.trim();
      selectedKeywords.push(selectedKeyword);
      addClass(target, 'bg-lionPrimary');

      keywordButtons.forEach((item) => {
        if (item !== target) {
          removeClass(item, 'bg-lionPrimary');
        }
      });
    }
  }

  saveStorage('keywords', selectedKeywords);
}
