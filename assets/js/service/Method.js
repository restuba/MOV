import { RootPath } from './Config.js';

export const GetData = (path, id) => {
  const promise = new Promise(( resolve, reject ) => {
    fetch(`${RootPath}&${path}=${id}`)
    .then(res => res.json())
    .then(res => resolve(res)
    , err => reject(err))
  });
  return promise;
};