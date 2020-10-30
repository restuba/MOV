export const Movies = (item) =>{ 
  const imageDefault = 'https://raw.githubusercontent.com/restuba/youtube-movie-app/master/src/components/images/notfound.jpg';
  return(`
    <div class="content" data-imdbid="${item.imdbID}">
      <div class="content-wrapper">
        <div class="image-wrap">
          <img src="${item.Poster == 'N/A' ? imageDefault : item.Poster}" onerror="null;this.src='${imageDefault}'"  alt="">
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </div>
        <div class="content-body">
          <h5 class="title">${item.Title}</h5>
          <h6 class="subtitle">${item.Year}</h6>
        </div>
      </div>
    </div>`);
};