import getItemFromLocalStorage, { saveItemToLocalStorage } from './localstorage';
import fetchAPI, {
  getCategories,
  getProduct,
  getProductsFromCategoryAndQuery,
} from './api';

export default getItemFromLocalStorage;

export {
  saveItemToLocalStorage,
  fetchAPI,
  getCategories,
  getProduct,
  getProductsFromCategoryAndQuery,
};
