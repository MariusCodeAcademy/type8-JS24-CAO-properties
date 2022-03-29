console.log('addPosts');
const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';

// formos el
const formEl = document.forms[0];

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('js is in control');

  const newPostObj = {
    title: formEl.elements.title.value,
    year: formEl.elements.year.value,
    author: formEl.elements.author.value,
    body: formEl.elements.body.value,
  };
  const members = ['title', 'year', 'author', 'body'];
  const newPostObjTitle = {
    title: formEl.elements.title.value,
  };

  console.log('newPostObj ===', newPostObj);
});
