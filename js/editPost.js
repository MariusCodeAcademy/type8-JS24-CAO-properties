// 1 pasiimti postId is query params
const params = new URLSearchParams(window.location.search);
const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';

const postId = params.get('postId');
console.log('postId ===', postId);
// 2 parissiusti posta su id is query params
async function getSinglePost() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  console.log('getSinglePost ===', dataInJs);
  if (dataInJs.success === true) {
    // surasti ir atspausdinti posta kurio id yra postId tarp
    // dataInJs.data masyvo
  }
}
getSinglePost();

// 3 parsiusto posto duomeni supildyti i forma

// 4 po to kai forma paeditinama ir submitinama mes siunciam ta forma
// su PUT metodu
// PUT http://localhost:3003/api/posts/62416561f0048a09af8b471b
// {
//   "title": "Post 1 Edited",
//   "author": "Jills",
//   "body": "Body of post 1",
//   "year": 1990
// }
