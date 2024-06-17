import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="grid justify-center  shadow-md shadow-slate-400 hover:bg-gray-200 ">
        <img
          className="max-h-72 md:h-60 lg:h-72"
          src={props.image}
          alt=""
        />

        <div className="p-4">
          <hr></hr>
          <h2 className="text-center text-xl font-semibold">
            {props.name}
          </h2>
          <p className=" text-center text-lg">{props.price}$</p>
        </div>
      </div>
    </Link>
  );
}
