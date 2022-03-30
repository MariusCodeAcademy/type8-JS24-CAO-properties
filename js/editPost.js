'use strict';
const formEl = document.forms[0];
// 1 pasiimti postId is query params

const postId = getQueryParam('postId');

console.log('postId ===', postId);
// 2 parissiusti posta su id is query params

async function init() {
  const foundPost = await getSinglePost(postId);
  foundObjToFormValues(foundPost);
}

init();

// 3 parsiusto posto duomeni supildyti i forma
function foundObjToFormValues(postObj) {
  console.log('postObj ===', postObj);
  // i formEl formos input el irasyti postObj title reikme
  const elements = formEl.elements;
  elements.title.value = postObj.title;
  elements.author.value = postObj.author;
  elements.year.value = postObj.year;
  elements.body.value = postObj.body;
}

// 4 po to kai forma paeditinama ir submitinama mes siunciam ta forma
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const editedPostObj = {};
  const members = ['title', 'year', 'author', 'body'];
  members.forEach((memb) => {
    editedPostObj[memb] = formEl.elements[memb].value;
  });

  console.log('editedPostObj ===', editedPostObj);
  updatePost(editedPostObj, postId);
});

async function updatePost(postObj, id) {
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postObj),
  };
  const resp = await fetch(`${baseUrl}/${id}`, fetchOptions);
  const dataInJS = await resp.json();
  console.log('dataInJS ===', dataInJS);
  if (dataInJS.success === true) {
    window.location.href = 'posts.html';
  }
}
// su PUT metodu
// PUT https://one-more-mca.herokuapp.com/api/posts/62416561f0048a09af8b471b
// {
//   "title": "Post 1 Edited",
//   "author": "Jills",
//   "body": "Body of post 1",
//   "year": 1990
// }
