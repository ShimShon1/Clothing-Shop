import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import itemsData from "./itemsData";
import ItemPage from "./components/ItemPage";
import { useState } from "react";



function App() {

  const [inCart,setInCart] = useState([])



  let productRoutes = itemsData.map((item)=>{
    return <Route path={`/product/${item.id}`} key={item.id}  
    element={<ItemPage image={item.image} name={item.name} desc={item.desc} /> }/> 
    
  })
  return (
    <div className="App text-gray-800">
      <Nav />

      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" setInCart={setInCart} element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            {productRoutes}
        </Routes>
      </main>
      

    </div>
  );
}

export default App;
