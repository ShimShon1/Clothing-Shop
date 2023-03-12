import Item from "./Item"


import itemsData from "../itemsData"
import { useState } from "react"









export default function Shop(props){
    const [items,setItems] = useState(itemsData)
   

    let itemElements = items.map((item)=>{
        return <Item image={item.image} name={item.name} desc={item.desc} key={item.id} id={item.id}  />
    }) 
    return (
        <>
            <div>Shop NOW</div>
            {itemElements}
        </>
    )
}