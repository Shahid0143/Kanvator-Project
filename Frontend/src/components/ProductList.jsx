import React, { useState, useEffect } from "react";
import * as api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

import "../App.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api
      .getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = (productId) => {
    // Check if the product is already in the cart
    if (cart.includes(productId)) {
      toast.error("Product is already in the cart", {
        position: "top-center",
      });
    } else {
      api
        .addToCart(productId)
        .then((response) => {
          // Update the cart state
          setCart([...cart, productId]);
          toast.success("Product added to the cart", {
            position: "top-center",
          });
          console.log(response);
        })
        .catch((error) => {
          toast.error(`Failed to add product to cart: ${error}`, {
            position: "bottom-right",
          });
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="product">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              className="btn-addtocart"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
