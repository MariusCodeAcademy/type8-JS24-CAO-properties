const baseUrl = 'https://one-more-mca.herokuapp.com/api/posts';

// parsisiunciam visus posts ir isconsolinam
async function getPosts() {
  const resp = await fetch(baseUrl);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
}
getPosts();

// generuojam korteles kaip ir su properties
