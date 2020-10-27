import { GetData } from './Method.js';

const GetMovies = (id) => GetData('s', id);
const GetDetail = (id) => GetData('i', id);

export const API = {
  GetMovies: GetMovies,
  GetDetail: GetDetail
};
