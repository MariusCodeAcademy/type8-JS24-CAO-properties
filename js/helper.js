'use strict';
const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

const getSinglePost = async (id) => {
  const resp = await fetch(baseUrl + '/' + id);
  const dataInJs = await resp.json();
  // console.log('getSinglePost ===', dataInJs);
  if (dataInJs.success === true) {
    const foundPost = dataInJs.data;
    // foundObjToHtml(foundPost);
    return foundPost;
  }
};

function getFormInputsToObj(formEl, formInputsArr) {
  const newObj = {};
  // const members = ['title', 'year', 'author', 'body'];
  formInputsArr.forEach((memb) => {
    newObj[memb] = formEl.elements[memb].value;
  });
  return newObj;
}
