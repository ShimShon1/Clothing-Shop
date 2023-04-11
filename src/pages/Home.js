import { Link } from "react-router-dom";
import mainImg from "../images/main.avif";

export default function Home() {
  return (
    <main
      className=" lg:grid grid-cols-2  w-full 
         shadow-lg h-2/3  lg:h-4/5    border-gray-700 border-b-0"
    >
      <img
        className="h-full z-0 absolute w-full  blur-sm lg:block lg:relative lg:blur-none"
        src={mainImg}
        alt=""
      />

      <section
        className="relative z-10 bg-white bg-opacity-70 p-10 lg:p-20  flex flex-col gap-6  
              lg:w-full items-center  lg:items-start tracking-wider "
      >
        <h1 className="text-4xl lg:text-5xl font-semibold p-0">
          Clothing | Shop
        </h1>

        <p className=" text-2xl lg:text-3xl  leading-8 text">
          <span>High quality materials</span>
          <br />
          <br />
          <span>Affordable prices</span>
          <br />
          <br />
          <span> Delivered to you</span>
        </p>

        <Link to={"/shop"}>
          <button
            type="button"
            className="border-2 shadow-sm rounded-md  py-2 px-8 font-semibold 
                    text-xl hover:bg-black bg-gray-800 text-white mt-4 tracking-widest animate-pulse
                    lg:text-2xl mr-20 lg:mr-0 "
          >
            Shop Now
          </button>
        </Link>
      </section>
    </main>
  );
}
