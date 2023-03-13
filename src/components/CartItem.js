import trashImg from "../images/trash.svg"


export default function CartItem(props){
    console.log(props)

    return(
        <div className=" grid grid-cols-3 leading-loose text-lg items-center text-center shadow-md
        md:text-xl lg:text-2xl shadow-slate-400 
        border-2">
            <div className="h-15 md:h-20 lg:h-28 overflow-hidden relative  ">




                <div className="h-full w-full absolute flex items-center lg:justify-start lg:p-10 justify-center opacity-20 hover:opacity-100
                hover:bg-gray-300 hover:bg-opacity-40 cursor-pointer">
                    <img src={trashImg} alt=''  onClick={()=>props.removeCartItem(props.id)} />

                </div>

                
                
                
                <img className="self-center h-20 md:h-24 lg:h-32  m-auto" src={props.image} alt="" />

                    
            </div>


            <span>{props.price}</span>

            
                <input className="text-center m-auto w-1/5  border-dashed border-2 border-gray-200 outline-transparent	"
                 type='number' min={1}
                 onChange={(e)=>props.changeAmount(e,props.id)}
                 value={props.amount} />


        
        
        </div>
    )
}