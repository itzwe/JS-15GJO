import {getNode, getNodes} from "../dom/getNode.js"

const images  = getNodes('.modal-image');
const modal = getNode('.modal'); 
const modalImage = getNode('.modal-i'); 
const close = getNode('.close');

let currentIndex = 0;

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
images.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    e.preventDefault()
    setModalImage(index);
    modal.style.display = 'block';
  });
});
window.addEventListener('click', (e) => {
  if (e.target === close) {
    modal.style.display = 'none';
  }
});
window.addEventListener("keydown", (e) => {
  const modal = getNode('.modal');
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  }
});