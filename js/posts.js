const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';
const cardsContEl = document.querySelector('.cards-container');

// parsisiunciam visus posts ir isconsolinam
async function getPosts() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  if (dataInJs.success === true) {
    renderCards(dataInJs.data, cardsContEl);
  }
}
getPosts();

// generuojam korteles kaip ir su properties
function renderCards(cardsArr, dest) {
  dest.innerHTML = cardsArr.map((cObj) => renderCard(cObj)).join('');
}

function renderCard(cardObj) {
  return `
  <div class="card">
    <div class="c-desc">
      <h3>${cardObj.title}</h3>
      <p><i>${cardObj.year}</i></p>
      <p>${cardObj.body}</p>
      <hr />
      <p>${cardObj.author}</p>
    </div>
  </div>
  `;
}

// addPost.html psl su forma sukuri nauja post
// susikuriam forma
// surenkam formos input duomenis i objekta
// siunciam duomeni su fetch POST
/*
  "title": string, min 5 simboliai, privalomas ,
  "author": string, min 5 simboliai, privalomas,
  "body": string, min 5 simboliai, privalomas,
  "year": number, tarp 1970 - 2022
*/

// DELETE  http://localhost:3003/api/posts/62429bc6f94300d1b8a1c8f1
