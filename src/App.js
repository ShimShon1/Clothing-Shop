import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import itemsData from "./itemsData";
import ItemPage from "./components/ItemPage";
import { useEffect, useState } from "react";

function App() {
  const [allItems, setAllItems] = useState(itemsData);
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    let lastCart = JSON.parse(localStorage.getItem("cart"));
    console.log(lastCart);
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

  function changeAmount(e, id) {
    let amount = e.target.value;
    setInCart(
      inCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: amount,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeCartItem(id) {
    setInCart(inCart.filter((item) => item.id !== id));
  }

  let productRoutes = itemsData.map((item) => {
    return (
      <Route
        path={`/product/${item.id}`}
        key={item.id}
        element={
          <ItemPage
            image={item.image}
            name={item.name}
            desc={item.desc}
            price={item.price}
            updateCart={updateCart}
            id={item.id}
          />
        }
      />
    );
  });

  return (
    <div className="App text-gray-800 ">
      <Nav inCart={inCart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <Cart
              inCart={inCart}
              changeAmount={changeAmount}
              removeCartItem={removeCartItem}
            />
          }
        />
        {productRoutes}
      </Routes>
    </div>
  );
}

export default App;
