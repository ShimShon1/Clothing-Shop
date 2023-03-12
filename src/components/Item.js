import { Link } from "react-router-dom";

export default function Item(props){

    console.log(props)
    return (
        
        <Link
        
        to={`/product/${props.id}`}>
        
            <div className="shadow-md h-full grid justify-center ">


                    <img className="h-full"  src={props.image} alt="" />

                    <div className="p-4">
                        <hr></hr>
                        <h2 className="text-xl font-semibold text-center">{props.name}</h2>
                        {/* <p>{props.desc}</p> */}

                    </div>


               
          
            </div>
        
        
        </Link>
      
    )
}