import { GetData } from './Method.js';

const GetMovies = (id, page='1') => GetData('s', id, `&page=${page}`).then(res => [res.Search, res.totalResults]); 
const GetDetail = id => GetData('i', id).then(res => res);

export const API = {
  GetMovies: GetMovies,
  GetDetail: GetDetail
};
