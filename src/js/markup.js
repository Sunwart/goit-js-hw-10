export const countriesMarkup = function (markup) {
  document.querySelector('.country-list').innerHTML = markup;
};

export const oneCountryMarkup = function (markup) {
  document.querySelector('.country-info').innerHTML = markup;
};
