import { Link, NavLink } from "react-router-dom";
import cartImg from "../images/cart.svg";
export default function Nav(props) {
  return (
    <nav className=" sticky top-0  w-full bg-gray-800  text-white">
      <div className="flex  items-center justify-around p-4 pl-0 lg:w-2/3 lg:justify-between lg:p-6 lg:pl-8 ">
        <Link to={"/"} className="self-start">
          <span className="text-lg font-semibold md:text-xl lg:text-2xl ">
            Clothing | Shop
          </span>
        </Link>

        <ul className="flex items-center gap-6 text-base md:text-lg lg:gap-10 lg:text-xl">
          <li>
            <NavLink to={"/"}>Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>

          <li className="relative">
            <NavLink to={"/cart"}>
              <img src={cartImg} alt="" />
              {props.inCart.length > 0 && (
                <span className="absolute  top-3 w-3 rounded-[60%] bg-white text-center text-sm text-black">
                  {props.inCart.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
