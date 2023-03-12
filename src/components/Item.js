import { Link } from "react-router-dom";

export default function Item(props){

    console.log(props)
    return (
        
        <Link to={`/product/${props.id}`}>
        
            <>
                <img width={'250px'} src={props.image} alt="" />
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </>
        
        
        </Link>
      
    )
}