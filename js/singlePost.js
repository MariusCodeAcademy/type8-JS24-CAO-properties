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
  // nusitaikom i html elementus
  // supildom ju reiksmes su postObj reiksmem
}

// 4 prideti edit mygtuka ir isimiti is posts.html
