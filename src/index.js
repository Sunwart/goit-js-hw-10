import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { countriesMarkup, oneCountryMarkup } from './js/markup';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');

searchInput.addEventListener('input', debounce(showCountries, DEBOUNCE_DELAY));

function showCountries() {
  if (searchInput.value.trim() === '') {
    countriesMarkup(' ');
    oneCountryMarkup(' ');
    return;
  }
  fetchCountries(searchInput.value.trim());
}
