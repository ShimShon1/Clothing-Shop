import Item from "./Item"


import itemsData from "../itemsData"
import { useState } from "react"









export default function Shop(props){
    const [items,setItems] = useState(itemsData)
   

    let itemElements = items.map((item)=>{
        return <Item image={item.image} name={item.name} desc={item.desc} key={item.id} id={item.id} price={item.price}  />
    }) 






    return (
        <main className="p-6">
            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 md:gap-4
            ">

                {itemElements}


            </div>
        </main>
    )
}