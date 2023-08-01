import { getNode, renderReview, tiger } from '../lib/index.js';


(async function reviewData() {
  try {
    const { visitList, URL } = {
      visitList: getNode('.visit-list'),
      URL: 'http://localhost:3000/user',
    };

    const response = await tiger.get(URL);
    if (response.ok) {
      const data = await response.data;
      renderReview(visitList, data[0].visited[0]);
    }
  } catch (err) {
    console.error('에러', err);
  }
})();

