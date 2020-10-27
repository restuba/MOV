export const NotFound = (key) => {
  let notfoundText = '404';
  let h1 = '';
  for(const el of notfoundText) h1 += `<span>${el}</span>`;
  return(`
    <div class="not-found">
      <p>Oops! movie not found</p>
      <h1>${h1}</h1>
      <h4>&#x2639; we are sorry, your search - <strong>${key}</strong> - did not match any movie</h4>
    </div>`
  );
};