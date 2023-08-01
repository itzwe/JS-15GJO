import { getNode } from '../dom/getNode.js'

export function removeTitleDesc() {
  const text = getNode('.title-desc')
  text.innerHTML = "";
}

export function removeListDesc() {
  const text = getNode('.list-desc')
  text.innerHTML = "";
}