export const Details = (data) =>{
  const imageDefault = 'https://raw.githubusercontent.com/restuba/youtube-movie-app/master/src/components/images/notfound.jpg';
  return(`
    <div class="content-modal">
      <div class="header-modal">
        <h1>Movie Details</h1>
        <span class="close">&times;</span>
      </div>
      <div class="container">
        <div class="image-container">
        <img src="${data.Poster == 'N/A' ? imageDefault : data.Poster}" onerror="null;this.src='${imageDefault}'"  alt="">
        </div>   
          <ul>
            <li>
              <div class="title-wrapper">
                <h1>${data.Title}</h1>
                <div class="rating">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9451 20.4C16.7851 20.4 16.6451 20.36 16.5051 20.28L12.0051 17.36L7.50506 20.28C7.22506 20.46 6.86506 20.44 6.60506 20.26C6.34506 20.06 6.22506 19.72 6.30506 19.4L7.72506 14.4L3.50506 10.84C3.26506 10.64 3.16505 10.3 3.26505 9.98C3.36505 9.68 3.64505 9.45999 3.96505 9.41999L9.02506 9.06L11.3051 4.08C11.4451 3.8 11.7251 3.61999 12.0251 3.61999C12.3451 3.61999 12.6251 3.8 12.7451 4.08L15.0251 9.06L20.0851 9.41999C20.4051 9.43999 20.6851 9.66 20.7851 9.98C20.8851 10.28 20.7851 10.62 20.5451 10.84L16.3251 14.4L17.7451 19.4C17.8451 19.72 17.7251 20.06 17.4451 20.26C17.2851 20.34 17.1251 20.4 16.9451 20.4ZM12.0051 15.6C12.1651 15.6 12.3051 15.64 12.4451 15.72L15.6051 17.76L14.6251 14.3C14.5451 14 14.6451 13.68 14.8851 13.48L17.9851 10.86L14.4251 10.6C14.1251 10.58 13.8851 10.4 13.7451 10.14L12.0051 6.31999L10.2651 10.14C10.1451 10.4 9.88506 10.58 9.58506 10.6L6.02506 10.86L9.12506 13.48C9.36506 13.68 9.46506 14 9.38506 14.3L8.40506 17.76L11.5651 15.72C11.7051 15.64 11.8451 15.6 12.0051 15.6Z" fill="gold"/>
                  </svg>
                  <span>${data.Ratings.length == 0 ? '0' : data.Ratings[0].Value }</span>
                </div>
              </div>                  
              <p>${data.Plot}</p>    
            </li>
            <li>
              <h2><strong>Director : </strong>${data.Director}</h2>
            </li>
            <li>
              <h2><strong>Actors : </strong>${data.Actors}</h2>
            </li>
            <li>
              <h2><strong>Writer : </strong>${data.Writer}</h2>
            </li>
            <li>
              <h2><strong>Genre : </strong>${data.Genre}</h2>
            </li>
            <li>
              <h2><strong>Production : </strong>${data.Production}</h2>
            </li>
          </ul>
      </div>
    </div>`);
};