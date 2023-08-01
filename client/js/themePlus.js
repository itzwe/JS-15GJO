import { getNode, tiger, checkTitleLength, checkListLength, removeTitleDesc, removeListDesc } from "../lib/index.js";


const title = getNode('#title');
const list = getNode('#list');
const image = getNode('.imageBtn')
const upload = getNode('.uploadImage')
const submitBtn = getNode('.submitBtn');
const imageContainer = getNode('.imageContainer');
let filePath;

function getImageFile(e) {
  const files = e.currentTarget.files;
  const fileReader = new FileReader();

  if ([...files].length >= 2) {
    alert('이미지는 최대 1개까지 업로드가 가능합니다.');
    return;
  }

  [...files].forEach(file => {
    if (!file.type.match("image/.*")) {
      alert('이미지 파일만 업로드가 가능합니다.');
      return;
    }

    if ([...files].length < 2) {
      fileReader.readAsDataURL(...files);

      fileReader.onload = function() {
        imageContainer.style.backgroundImage = "url(" + fileReader.result + ")";
        filePath = fileReader.result;
      }
    }
  })
}

async function handleSubmit() {
  let titleData = title.value;
  let listData = list.value;

  let themeList = {
      theme: [
        {
            title: titleData,
            list: listData,
            image: filePath
        }
      ]
  };

  tiger.patch('http://localhost:3000/user/1', themeList)
  .then((res)=> {
    if (res.status === 200) {
      window.location.href = './themeList.html';
    }
  })
  .catch(()=>{
    alert('이미지 파일 크기가 너무 큽니다. 다른 걸로 변경해주세요.')
  })

}

image.addEventListener('click', () => upload.click());
upload.addEventListener('change', getImageFile);

submitBtn.addEventListener('click', handleSubmit);

title.addEventListener("click", removeTitleDesc);
list.addEventListener("click", removeListDesc);

title.addEventListener("keyup", checkTitleLength);
list.addEventListener("keyup", checkListLength);