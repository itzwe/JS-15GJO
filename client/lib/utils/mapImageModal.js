import {getNode, getNodes} from "../dom/getNode.js"

const images  = getNodes('.modal-image');

const modal = getNode('.modal'); 

const modalImage = getNode('.modal-i'); 
const close = getNode('.close');
let currentIndex = 0;

// 모달에 이미지를 설정하는 함수.
export function setModalImage(index) {
  if (index >= images.length || index < 0) return;

  const imageUrl = images[index].getAttribute('src');
  modalImage.setAttribute('src', imageUrl);
  currentIndex = index;
}

// 이전 이미지로 이동하는 함수.
export function prevImage() {
  setModalImage(currentIndex - 1);
}

// 다음 이미지로 이동하는 함수.
export function nextImage() {
  setModalImage(currentIndex + 1);
}

// 이미지 클릭 이벤트를 추가.
images.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    e.preventDefault()
    setModalImage(index);
    modal.style.display = 'block';
  });
});

// 이전, 다음 버튼 클릭 이벤트를 추가.


// x 버튼 클릭 시 모달 닫기.
window.addEventListener('click', (e) => {
  if (e.target === close) {
    modal.style.display = 'none';
  }
});