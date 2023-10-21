import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    async function getCart() {
      const response = await axios.get(`http://localhost:3001/cart`);
      setCartItems(response.data.data);
    }
    getCart();
  }, []);

  const placeOrder = async (e) => {
    e.preventDefault();
    const fname = e.target[0].value;
    const lname = e.target[1].value;
    const address = e.target[2].value;

    const res = await axios.post(`http://localhost:3001/orderPlaced`, {
      user: { fname, lname, address },
      cartItems,
    });

    if (res.data === "ok") {
      toast.success("Order placed successfully", {
        autoClose: 3000,
        position: "top-center",
      });
      setCartItems([]);
    } else {
      toast.error("Something went wrong", {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="cart-main">
        <div className="cart-child-div">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "1rem",
                  boxShadow: "rgba(31, 33, 35, 0.2) 0px 8px 24px",
                }}
              >
                <img src={item.image} />
                <h1>{item.name}</h1>
                <h2>Price: ${item.price}</h2>
              </div>
            ))
          ) : (
            <div>
              <img src="https://www.arteastic.in/assets/images/empty-cart.gif" />
              <h2 style={{ textAlign: "center" }}>No Items so far!!!!</h2>
            </div>
          )}
        </div>
        <div>
          <h1>Total Amount</h1>
          <h2>${totalPrice}</h2>
          <br />
          <br />
          <form className="form" onSubmit={placeOrder}>
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Address" required />
            <button className="btn-order">Order Placed</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
