import { Link } from "react-router-dom";

export default function Item(props){

    return (
        
        <Link
        
        to={`/product/${props.id}`}>
        
            <div className="shadow-md shadow-slate-400  grid justify-center hover:bg-gray-200 ">


                    <img className="md:max-h-80"  src={props.image} alt="" />

                    <div className="p-4">
                        <hr></hr>
                        <h2 className="text-xl font-semibold text-center">{props.name}</h2>
                        <p className=" text-lg text-center">{props.price}</p>

                    </div>


               
          
            </div>
        
        
        </Link>
      
    )
}