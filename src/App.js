import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data1 from "./data1";
import data2 from "./data2";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };

  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  const buy = () => {
    setCartItems([]);
    alert("Your order has been accepted!");
  };

  return (
    <div className="App">
      <BrowserRouter basename="/sportshop">
        <Header />
        <Routes>
          <Route path="/" element={<p>Main</p>} />
          <Route
            path="/main"
            element={<Main products1={data1} products2={data2} add={add} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} remove={remove} add={add} buy={buy} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
