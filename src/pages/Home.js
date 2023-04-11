import { Link } from "react-router-dom";
import mainImg from "../images/main.avif";

export default function Home() {
  return (
    <main
      className=" h-2/3 w-full  grid-cols-2 
         border-b-0 border-gray-700  shadow-lg    lg:grid lg:h-4/5"
    >
      <img
        className="absolute z-0 h-full w-full  blur-sm lg:relative lg:block lg:blur-none"
        src={mainImg}
        alt=""
      />

      <section
        className="relative z-10 flex flex-col items-center gap-6  bg-white bg-opacity-70 p-10  
              tracking-wider lg:w-full  lg:items-start lg:p-20 "
      >
        <h1 className="p-0 text-4xl font-semibold lg:text-5xl">
          Clothing | Shop
        </h1>

        <p className=" text text-2xl  leading-8 lg:text-3xl">
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
            className="mt-4 mr-20 animate-pulse  rounded-md border-2 bg-gray-800 
                    py-2 px-8 text-xl font-semibold tracking-widest text-white shadow-sm
                    hover:bg-black lg:mr-0 lg:text-2xl "
          >
            Shop Now
          </button>
        </Link>
      </section>
    </main>
  );
}
