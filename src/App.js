import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import itemsData from "./itemsData";
import ItemPage from "./components/ItemPage";
import { useState } from "react";

function App() {
  const [allItems,setAllItems] = useState(itemsData)
  const [inCart,setInCart] = useState([])




  function updateCart(e,id,amount){
    e.preventDefault()

    for(let item of allItems){

      if(item.id === id && !inCart.some((cartI)=>cartI.id === id) ){
        setInCart([
          ...inCart,
          {
            ...item,
            amount:Number(amount)
          }
        ])

      } 
     else if(item.id === id){
          
       setInCart(
        inCart.map((item)=>{
          
          return{
            ...item,
            amount:item.amount + Number(amount)
          }
      
        })
       )
      }

    }

  }




  function removeCartItem(id){
    setInCart(
      inCart.filter((item)=> item.id !== id)
    )


  }


  let productRoutes = itemsData.map((item)=>{
    return <Route path={`/product/${item.id}`} key={item.id}  
    element={<ItemPage image={item.image} name={item.name} desc={item.desc} price={item.price}
    updateCart={updateCart} id={item.id} /> } /> 
    
  })


  return (
    <div className="App text-gray-800 ">
      <Nav />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart inCart={inCart} removeCartItem={removeCartItem}  />}/>
            {productRoutes}
        </Routes>
      

    </div>
  );
}

export default App;
