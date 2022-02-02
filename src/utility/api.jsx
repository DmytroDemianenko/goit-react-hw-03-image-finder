function fetchImage(imageName) {
  return fetch(
    `https://pixabay.com/api/?q=${imageName}&page=1&key=24297910-266d35e9d32fe9ab4dcc44a53&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет такой картинки ${imageName}`));
  });
}

const api = { fetchImage };
export default api;
