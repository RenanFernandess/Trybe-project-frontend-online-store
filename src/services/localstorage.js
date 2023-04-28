export function saveItemToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export default function getItemFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
