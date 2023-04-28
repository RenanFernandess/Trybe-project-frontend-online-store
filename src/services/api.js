const BASE_URL = 'https://api.mercadolibre.com/sites/MLB';

async function fetchAPI(url) {
  const response = await fetch(url);
  return response.json();
}

export async function getCategories() {
  const url = `${BASE_URL}/categories`;
  return fetchAPI(url);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `${BASE_URL}/search?category=$${categoryId}&q=$${query}`;
  return fetchAPI(url);
}
