import { API }  from './assets/js/service/Service.js';
import { Movies } from './assets/js/components/Movies.js';
import { Details } from './assets/js/components/Details.js';
import { NotFound } from './assets/js/components/Notfound.js';

const elementMovies = document.querySelector('.result-container');
const elementModal = document.querySelector('.detail-modal');
const elementSearch = document.querySelector('.input-keyword');

// search movies
elementSearch.addEventListener('change', async e => {
  const data = await getMovies(e.target.value);
  movies(data, e.target.value);
});

const getMovies = (key) => {
  return API.GetMovies(key).then(res => res.Search);
};

const movies = (movie, key) => {
  if(movie !== undefined){
    let template = '';
    movie.forEach(item => template += Movies(item));
    elementMovies.style.display = 'grid';
    elementMovies.innerHTML = template;
    getDetailsMovie();
  }else{
    let template = '';
    template += NotFound(key);
    elementMovies.style.display = 'block';
    elementMovies.innerHTML = template;
  }  
};

// detail element 
const getDetailsMovie = () => {
  const elementContent = document.querySelectorAll('.content');
  for(const mov of elementContent){
    mov.addEventListener('click', async () =>{
      const data = await getDetails(mov.dataset.imdbid);
      detailsMovies(data);
    })
  }
};

const getDetails =  (key) => {
  return API.GetDetail(key).then(res => res);
};

const detailsMovies = (movie) => {
  let template = '';
  template += Details(movie);
  elementModal.innerHTML = template;
  elementModal.style.display = 'block';
  closeModal();
};

// close modal
const closeModal = () => {
  const elementClose = document.querySelector('.close');
  elementClose.addEventListener('click', function(){
    elementModal.style.display = "none";
  });
};

window.onclick = event => {
  if (event.target == elementModal) elementModal.style.display = "none";
};