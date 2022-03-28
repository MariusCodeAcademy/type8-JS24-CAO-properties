console.log('main');
const baseUrl = 'https://radial-reinvented-shoe.glitch.me';

const cardsContEl = document.querySelector('.cards-container');

async function getProperties() {
  const res = await fetch(baseUrl);
  const props = await res.json();
  console.log('props ===', props);
  renderCards(props, cardsContEl);
}

getProperties();

function renderCards(cardsArr, dest) {
  dest.innerHTML = cardsArr
    .map(
      (cObj) => `
  <div class="card">
    <img src="${cObj.image}" alt="image" />
    <div class="c-desc">
      <h3>$${cObj.price}</h3>
      <p><i>${cObj.city}</i></p>
      <p>${cObj.description}</p>
    </div>
  </div>
  `
    )
    .join('');
}
