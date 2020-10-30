// service
import { API }  from './assets/js/service/Service.js';
// view
import { Movies } from './assets/js/view/Movies.js';
import { Details } from './assets/js/view/Details.js';
import { NotFound } from './assets/js/view/Notfound.js';
// model
import { DataMovies } from './assets/js/model/DataMovies.js';
// element
const elementMovies = document.querySelector('.result-container');
const elementModal = document.querySelector('.detail-modal');
const elementSearch = document.querySelector('.input-keyword');
const elementPrev = document.querySelector('.prev');
const elementNext = document.querySelector('.next');
const elementPages = document.querySelector('.pagination-container');
const elementPagesText = document.querySelector('.pages');

// store data
let store = {};

// search movies
elementSearch.addEventListener('change', async e => {
  const result = await API.GetMovies(e.target.value);
  const [response, total] = result;
  if(response !== undefined){
    store = new DataMovies(e.target.value, total);
    movies(response);
  }else{
    let template = '';
    template += NotFound(e.target.value);
    elementModal.style.display = 'block';
    elementModal.innerHTML = template;
  }
});

const movies = movie => {
  let template = '';
  movie.forEach(item => template += Movies(item));
  elementMovies.innerHTML = template;
  elementPagesText.innerHTML = `${store.currentPage} of ${store.totalPage} total pages`;
  elementPages.style.display = 'flex';
  pageState(store.currentPage);
  getDetailsMovie(); 
};

const pageState = (state) => {
  const [prev, next] = [elementPrev, elementNext];
  state == 1 ? prev.disabled = true : prev.disabled = false;
  state == store.totalPage ? next.disabled = true : next.disabled = false;
}

// detail element 
const getDetailsMovie = () => {
  const elementContent = document.querySelectorAll('.content');
  for(const mov of elementContent){
    mov.addEventListener('click', async () =>{
      const data = await API.GetDetail(mov.dataset.imdbid);
      detailsMovies(data);
    })
  }
};
const detailsMovies = movie => {
  let template = '';
  template += Details(movie);
  elementModal.innerHTML = template;
  elementModal.style.display = 'block';
};

// event next
elementNext.addEventListener('click', async () => {
  const result = await store.nextPage();
  const [response] = result;
  movies(response);
})
// event prev
elementPrev.addEventListener('click', async () => {
  const result = await store.prevPage();
  const [response] = result;
  movies(response);
});
// event close
window.onclick = e => {  
  if (e.target == elementModal || e.target.classList.contains('close')) elementModal.style.display = "none"; 
};