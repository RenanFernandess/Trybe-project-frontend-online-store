const BASE_URL = 'https://api.mercadolibre.com';

export default async function fetchAPI(url) {
  const response = await fetch(url);
  return response.json();
}

export async function getCategories() {
  const url = `${BASE_URL}/sites/MLB/categories`;
  return fetchAPI(url);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `${BASE_URL}/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  return fetchAPI(url);
}

export async function getProduct(id) {
  const url = `${BASE_URL}/items/${id}`;
  return fetchAPI(url);
}
