import { getNode, tiger, renderReviewItem, renderThemeItem } from "../../lib/index.js";


const reviewContainer = getNode('.reviewContainer')
const themeContainer = getNode('.themePosition')
const imageContainer = getNode('.imageContainer')

async function renderReviewList() {
  let response = await tiger.get('http://localhost:3000/user');
  let visited = response.data[0].visited;

  // console.log(visited);

  let reviewData = [];

  visited.forEach(item => {
    reviewData.push({
      id: item.id,
      name: item.name,
      date: item.date,
      review: item.review,
      location: item.location,
      keywords: item.keywords,
      image: item.image
    })
  });

  reviewData.forEach((item) => {
    renderReviewItem(reviewContainer, item)
  })
}

async function renderThemeList() {
  let response = await tiger.get('http://localhost:3000/user');
  let theme = response.data[0].theme[0];

  imageContainer.style.backgroundImage = "url(" + theme.image + ")";
  renderThemeItem(themeContainer, theme);
}

renderReviewList();
renderThemeList();