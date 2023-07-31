import { getNode, getNodes, keywordSwiper, saveStorage, tiger } from '../lib/index.js';

const swiperWrapper = getNode('.swiper-wrapper');
const reviewTextField = getNode('#reviewTextField');
const reviewSubmitButton = getNode('.reviewSubmitButton');
const keywordButton = getNodes('.swiper-slide button');
const count = getNode('.reviewTextFieldCount');

async function fetchData() {
  try {
    const response = await tiger.get('http://localhost:3000/review');
    if (response.ok) {
      const data = await response.data;
      const targetId = 1234; // 원하는 id (여기서는 123) 설정

      // id가 123인 데이터 찾기
      const targetData = data.find(item => item.id === targetId);

      if (targetData) {
        // id가 123인 데이터의 reviews 값을 변경
        const newValue = '새로운 리뷰 내용'; // 여기에 새로운 리뷰 내용을 넣으세요
        targetData.reviews = newValue;
        saveStorage('review', newValue); // 변경된 리뷰를 로컬 스토리지에 저장 (선택적으로 사용)
      } else {
        console.log(`id가 ${targetId}인 데이터를 찾을 수 없습니다.`);
      }
    }
  } catch (error) {
    console.error('에러', error);
  }
}


fetchData();




async function handleTextField(e) {
  e.preventDefault();

  const value = reviewTextField.value;
  saveStorage('review', value);

  const textLength = value.length;
  count.textContent = textLength;
}


async function handleButton(e) {
  e.preventDefault();

  const value = reviewTextField.value;
  saveStorage('review', value);


  const url = 'http://localhost:3000/review'; 
  const body = { 
    reviews:value,
   };

  try {
    const response = await tiger.post(url, body);
    if (response.ok) {
      console.log('POST 요청 성공!');
      fetchData(); // 데이터를 등록한 후에 새로운 데이터를 불러옵니다.
    } else {
      console.error('POST 요청 실패!');
    }
  } catch (error) {
    console.error('에러', error);
  }
}

keywordSwiper();
reviewTextField.addEventListener('input', handleTextField);
reviewSubmitButton.addEventListener('click', handleButton);

