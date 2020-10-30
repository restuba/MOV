import { API } from '../service/Service.js';

export class DataMovies{
    constructor(key, totalPage){
        this.key = key;
        this.currentPage = 1;
        this.totalPage = totalPage;
        this.getTotalPage()
    }

    getTotalPage = () => this.totalPage = Math.floor(this.totalPage / 10 + 1);

    nextPage = async () => {
      ++this.currentPage;
      return await API.GetMovies(this.key, this.currentPage);
    }
  
    prevPage = async () => {
      --this.currentPage;
      return await API.GetMovies(this.key, this.currentPage);
    }
  }