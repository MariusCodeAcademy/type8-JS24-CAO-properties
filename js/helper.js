const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

async function getSinglePost(id) {
  const resp = await fetch(baseUrl + '/' + id);
  const dataInJs = await resp.json();
  // console.log('getSinglePost ===', dataInJs);
  if (dataInJs.success === true) {
    const foundPost = dataInJs.data;
    // foundObjToHtml(foundPost);
    return foundPost;
  }
}
