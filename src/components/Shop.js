import Item from "./Item"


import itemsData from "../itemsData"
import { useState } from "react"









export default function Shop(props){
    const [itemsShown,setItemsShown] = useState(itemsData)
   


    function updateItemsShown(gender="all"){
        if(gender === "all"){
            setItemsShown(itemsData)
        }

        else if(gender === "men"){
            setItemsShown(
                itemsData.filter((item)=>{
                    return item.gender === "men"
                })
            )
        }

        else if(gender === "women"){
            setItemsShown(
                itemsData.filter((item)=>{
                    return item.gender === "women"
                })
            )
        }
 
 
    }


    let itemElements = itemsShown.map((item)=>{
        return <Item image={item.image} name={item.name} desc={item.desc} key={item.id} id={item.id} price={item.price}  />
    }) 






    return (
        <main className="">
            <nav className=" text-lg grid grid-cols-7 text-center bg-slate-700 text-gray-200 cursor-pointer">
                <span className="col-span-3" onClick={()=>updateItemsShown("men")}>Men</span>
                <span className="bg-slate-600" onClick={()=>updateItemsShown()}>All</span>
                <span className="col-span-3" onClick={()=>updateItemsShown("women")}>Women</span>

            </nav>
            <div className="grid p-6 justify-center md:grid-cols-2 lg:grid-cols-4 gap-4
            ">

                {itemElements}


            </div>
        </main>
    )
}