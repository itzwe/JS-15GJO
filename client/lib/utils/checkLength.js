import { getNode } from '../dom/getNode.js'


export function checkTitleLength(e) {
  let titleLength = e.currentTarget.value.length;

  let titleCount = getNode('.titleCount');
  titleCount.innerHTML = titleLength;

  if (titleLength > 20) {
    alert('입력 가능한 글자수를 초과했습니다!')
  }
}

export function checkListLength(e) {
  let listLength = e.currentTarget.value.length;

  let listCount = getNode('.listCount');
  listCount.innerHTML = listLength;

  if (listLength > 100) {
    alert('입력 가능한 글자수를 초과했습니다!')
  }
}