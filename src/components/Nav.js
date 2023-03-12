import { Link, NavLink } from "react-router-dom";
import cartImg from "../images/cart.svg"

export default function Nav(props){

    return (
        <nav className=" bg-gray-800 text-white  w-full ">

            <div className="flex sticky top-0 justify-around items-center p-4 pl-0 lg:w-2/3 lg:justify-between lg:p-6 lg:pl-8 ">

                <Link to={'/'} className="self-start"><span className="text-lg font-semibold md:text-xl lg:text-2xl ">Clothing | Shop</span></Link> 
                
                <ul className="flex gap-6 text-base md:text-lg lg:text-xl lg:gap-10 items-center">
                    <li> <NavLink  to={'/'}>Home</NavLink> </li>
                    <li><NavLink to={'/shop'}>Shop</NavLink></li>
                    <li><NavLink to={'/cart'}><img src={cartImg} alt="" /></NavLink></li>
                </ul>

            </div>
         
           
        </nav>
    )
}