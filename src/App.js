import React, { useEffect, useState } from "react";
// bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
// icons
import "bootstrap-icons/font/bootstrap-icons.css";

// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { BookStoreContent } from "./context/BookStoreContent";

// components
import TopImg from "./components/TopImg";
import Bar from "./components/Bar";
import CartProd from "./components/CartProd";
import UploadProd from "./components/UploadProd";
import ManageProd from "./components/ManageProd";

import Home from "./Home";

// api
import {
  getProducts,
  getFilterProducts,
  getSearchProduct,
  createProduct,
  deleteProduct,
} from "./helper/apiCalls";

const App = () => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const createData = (product) => {
    createProduct(product)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const fetchData = () => {
    getProducts()
      .then((data) => setData(data.products))
      .catch((err) => console.error(err));
  };

  const filterData = (cate) => {
    getFilterProducts(cate)
      .then((data) => setData(data.products))
      .catch((err) => console.error(err));
  };

  const searchData = (prod) => {
    getSearchProduct(prod)
      .then((data) => setData(data.products))
      .catch((err) => console.error(err));
  };

  const removeData = (id) => {
    deleteProduct(id)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array._id === item._id;
    });

    if (isAlreadyAdded !== -1) {
      return toast("ALREADY ADDED IN CART", { type: "error" });
    }

    setCartItem([...cartItem, item]);
    return toast("Product Added to Cart", { type: "success" });
  };

  const buyNow = () => {
    setCartItem([]);
    return toast("Purchase Complete", { type: "success" });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <TopImg />
      <Bar />
      <ToastContainer position="top-right" />
      <BookStoreContent.Provider
        value={{
          data,
          setData,
          searchData,
          fetchData,
          filterData,
          createData,
          removeData,
          cartItem,
          addInCart,
          buyNow,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodCart" element={<CartProd />} />
          <Route path="/prodUpload" element={<UploadProd />} />
          <Route path="/prodMange" element={<ManageProd />} />
        </Routes>
      </BookStoreContent.Provider>
    </BrowserRouter>
  );
};

export default App;
