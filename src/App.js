import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import itemsData from "./data/itemsData";
import ItemPage from "./pages/ItemPage";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    let lastCart = JSON.parse(localStorage.getItem("cart"));
    if (lastCart !== undefined && lastCart !== null) {
      if (lastCart.length > 0) {
        setInCart(lastCart);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(inCart));
  }, [inCart]);

  function updateCart(e, id, amount) {
    e.preventDefault();

    for (let item of allItems) {
      if (item.id === id && !inCart.some((cartI) => cartI.id === id)) {
        setInCart([
          ...inCart,
          {
            ...item,
            amount: Number(amount),
          },
        ]);
      } else if (item.id === id) {
        setInCart(
          inCart.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                amount: Number(amount) + Number(item.amount),
              };
            } else {
              return item;
            }
          })
        );
      }
    }
  }

  return (
    <div className="App text-gray-800 ">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout inCart={inCart} />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/cart"
              element={<Cart inCart={inCart} setInCart={setInCart} />}
            />
            <Route
              path="/product/:id"
              element={<ItemPage updateCart={updateCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
