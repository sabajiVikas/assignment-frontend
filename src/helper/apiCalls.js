const backend = process.env.REACT_APP_BACKEND_URL;

export const createProduct = (product) => {
  return fetch(`${backend}/product/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const getProducts = () => {
  return fetch(`${backend}/products`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const getFilterProducts = (cate) => {
  return fetch(`${backend}/product?category=${cate}`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const getSearchProduct = (prod) => {
  return fetch(`${backend}/prodSearch?search=${prod}`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const deleteProduct = (id) => {
  return fetch(`${backend}/product/${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
