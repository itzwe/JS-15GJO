function loadHongikRestaurants() {
  const xhr = new XMLHttpRequest();
  // CORS-Anywhere 프록시 서비스를 사용하여 요청 URL을 변경합니다.
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://openapi.naver.com/v1/search/local.json?query=홍익대 맛집&display=5';
  xhr.open('GET', corsProxy + apiUrl, true);

  // 클라이언트 측에서 직접 호출 시, 네이버 Open API 키를 여기에 입력해 주세요.
  xhr.setRequestHeader('X-Naver-Client-Id', 'o1Bc7vyzqTNwCFIuHcLB');
  xhr.setRequestHeader('X-Naver-Client-Secret', 'Xi0J8OjRMm');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const hongikRestaurants = response.items.map(item => ({
        title: item.title,
        imageSrc: item.image,
        content: item.description,
      }));

      renderRestaurants(hongikRestaurants);
    }
  };
  xhr.send();
}

function renderRestaurants(restaurants) {
  const container = document.querySelector('.change');
  container.innerHTML = '';

  restaurants.forEach(restaurant => {
    const restaurantDiv = document.createElement('div');
    const title = document.createElement('h3');
    const image = document.createElement('img');
    const content = document.createElement('p');

    title.innerHTML = restaurant.title;
    image.src = restaurant.imageSrc;
    content.innerHTML = restaurant.content;

    restaurantDiv.appendChild(title);
    restaurantDiv.appendChild(image);
    restaurantDiv.appendChild(content);

    container.appendChild(restaurantDiv);
  });
}

const hongikBtn = document.querySelector('.hongikBtn');
hongikBtn.addEventListener('click', function () {
  console.log('버튼이 클릭되었습니다.');  // 이 줄을 추가합니다.
  loadHongikRestaurants();
});