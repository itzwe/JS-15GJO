/* eslint-disable no-undef */

// import { tiger } from "../../lib/utils/tiger.js";
import { getNode, tiger } from './../../lib/index.js';


export async function renderThemeMap(node) {
  let response = await tiger.get('http://localhost:3000/user');
  let review = response.data[0].visited;

  // 마커를 표시할 위치와 title 객체 배열입니다
  let positions = [];
  let selectedMarker = null; // 클릭한 마커를 담을 변수

  for (let i = 0; i < review.length; i++) {
    positions.push({
      title: review[i].name,
      latlng: new kakao.maps.LatLng(review[i].position.lat, review[i].position.lng)
    });
  }

  let mapContainer = getNode(node) // 지도를 표시할 div

  let mapOption = {
    center: new kakao.maps.LatLng(review[0].position.lat, review[0].position.lng), // 지도의 중심좌표
    level: 7, // 지도의 확대 레벨
  };

  let map = new kakao.maps.Map(mapContainer, mapOption) // 지도 생성

  // let imageSrc = "url("../assets/icon/icon-bubble.svg")"
  let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  for (let i = 0; i < positions.length; i++) {
    var imageSize = new kakao.maps.Size(24, 35);

    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title,
      image: markerImage
    })

    let infowindow = new kakao.maps.InfoWindow({
      content:  positions[i].title
    });

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
  }

  function makeOverListener(map, marker, infowindow) {
    return function() {
      infowindow.open(map, marker);
    }
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수
  function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
  }
}

renderThemeMap('.themeMap')
