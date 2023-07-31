import { getNode } from "../../lib/index.js";
const backBtn = getNode('.backBtn');

backBtn.addEventListener('click',()=>{
  history.back();
})