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
  dest.innerHTML = '';
  cardsArr.forEach((cObj) => {
    dest.append(renderCard(cObj));
  });
}

function renderCard(cardObj) {
  const divEl = document.createElement('div');
  divEl.className = 'card';
  divEl.innerHTML = `
   <div class="c-desc">
      <h3>${cardObj.title}</h3>
      <p><i>${cardObj.year}</i></p>
      <p>${cardObj.body}</p>
      <hr />
      <p>${cardObj.author}</p>
      <a class='f__btn' href='edit-post.html?postId=${cardObj._id}'>Edit me</a>
    </div>
 `;
  const btnEl = document.createElement('button');
  btnEl.textContent = 'delete me';
  btnEl.className = 'f__btn';
  btnEl.addEventListener('click', () => deletePost(cardObj._id));
  divEl.append(btnEl);
  return divEl;
}

async function deletePost(postId) {
  console.log('delete', postId);
  const patvirtinimas = confirm('Ar tikrai norite istrinti?');
  if (patvirtinimas === false) return;
  // DELETE  http://localhost:3003/api/posts/62429bc6f94300d1b8a1c8f1
  const resp = await fetch(`${baseUrl}/${postId}`, {
    method: 'DELETE',
  });
  const dataInJs = await resp.json();
  console.log('dataInJs deletePost ===', dataInJs);
  if (dataInJs.data.deletedCount === 1) {
    // istrinta sekmingai
    getPosts();
  }
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
