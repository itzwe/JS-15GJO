/* eslint-disable no-undef */

import {getNode} from '../dom/getNode.js'

// renderMap 함수 정의
export function renderMap(latitude, longitude,height, node) {
    // 지도를 렌더링할 요소를 찾아서 크기를 설정.
    var mapWrapper = getNode(node);
    mapWrapper.style.width = 100 + '%';
    mapWrapper.style.height = height +'px';
    // console.log(mapWrapper.getAttribute('id'))
    // 지도의 옵션 설정.
    var mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3
    };

    // 지도를 생성.
    var map = new kakao.maps.Map(mapWrapper, mapOptions);

    // 지도에 마커를 생성.
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(latitude, longitude)
    });

    // 정보창을 생성.
    var infowindow = new kakao.maps.InfoWindow({zIndex:1});

    // 마커에 클릭 이벤트를 추가.
    kakao.maps.event.addListener(marker, 'click', function() {
        // 음식점 검색을 위한 좌표를 생성.
        var placePosition = new kakao.maps.LatLng(latitude, longitude);

        // 지도에서 검색 서비스 객체를 생성.
        var places = new kakao.maps.services.Places(map);

        // 검색 콜백 함수를 정의.
        var callback = function(result, status) {
            // 검색 결과가 정상적으로 반환된 경우
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 가장 가까운 음식점 정보를 가져와 정보창 내용을 구성.
                var content = '<div style="padding:5px;font-size:12px;background-color:white;">';
                if (result[0].thumb_url) {
                    content += '<img src="' + result[0].thumb_url + '" style="width:100%; height:auto;">';
                }
                
                content += '<strong>' + result[0].place_name + '</strong><br>' +
                '<span>' + result[0].road_address_name + '</span>' +
                '</div>';

                // 정보창에 내용을 설정하고 마커 위에 열기.
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }
        };

        // 검색 옵션을 설정.
        var searchOptions = {
            location: placePosition,
            radius: 10,
            sort: kakao.maps.services.SortBy.ACCURACY
        };

        // 음식점 검색을 요청하고 결과를 콜백 함수로 받기. 키워드에 따라 출력 마커가 달라짐
        places.keywordSearch('음식점', callback, searchOptions);
    });
}
