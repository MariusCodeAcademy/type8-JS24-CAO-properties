'use strict';

// nusitaikom el
const h1El = document.querySelector('h1');
const contEl = document.querySelector('.single-post-content');
const btnLinkEl = document.querySelector('.btn-link');

// 1 pasiimti postId is query params
const postId = getQueryParam('postId');
console.log('postId ===', postId);
// 2 parissiusti singlePost duomenis

async function init() {
  const singlePostObj = await getSinglePost(postId);
  console.log('singlePostObj ===', singlePostObj);
  foundObjToHtml(singlePostObj);
}
init();
// 2.1 iskelti async function getSinglePost()  i helper.js

// 3 surasyti duomenis i html
function foundObjToHtml(postObj) {
  console.log('postObj ===', postObj);
  // nusitaikom i html elementus
  h1El.textContent = postObj.title;
  contEl.querySelector('h2').textContent = postObj.year;
  contEl.querySelector('p i').textContent = postObj.author;
  contEl.querySelector('.text').textContent = postObj.body;
  // supildom ju reiksmes su postObj reiksmem
}

// 4 prideti edit mygtuka ir isimiti is posts.html
const editLink = `<a class='f__btn' href='edit-post.html?postId=${postId}'>Edit me</a>`;
// ideti po btnLinkEl el
btnLinkEl.insertAdjacentHTML('afterend', editLink);
