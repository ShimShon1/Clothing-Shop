import { useEffect, useState } from "react";
import itemsData from "../data/itemsData";
import { useParams } from "react-router-dom";

export default function ItemPage({ updateCart }) {
  const [amount, setAmount] = useState(1);

  let item = {};

  for (let i of itemsData) {
    if (i.id == useParams().id) {
      item = i;
    }
  }

  function onAmountChange(e) {
    setAmount(e.target.value);
  }

  function addFeedback() {
    let noti = document.querySelector(".feedback");
    noti.id = "feedback";
    noti.classList.toggle("hidden");

    setTimeout(() => {
      noti.id = "";
      noti.classList.toggle("hidden");
    }, 4000);
  }

  return (
    <main
      className="flex grid-cols-3 flex-col items-center space-y-6 p-6 shadow-lg shadow-slate-400  lg:grid lg:space-y-0
             "
    >
      <section
        className="flex justify-center shadow-lg lg:border-r-2 lg:p-4 lg:shadow-none
                   "
      >
        <img className="h-96" src={item.image} alt="" />
      </section>

      <section className="col-span-2 w-full  p-4 shadow-md lg:h-full lg:shadow-none  ">
        <h1 className="text-center text-3xl font-semibold leading-8 lg:text-left lg:leading-loose">
          {item.name}
          <br />{" "}
        </h1>
        <hr></hr>
        <p className="p-2 text-lg lg:w-1/2  lg:text-xl lg:leading-loose">
          {" "}
          {item.desc}{" "}
        </p>
        <hr></hr>
        <p className="pt-2 text-center text-xl font-semibold lg:pl-6 lg:text-left lg:text-2xl lg:leading-loose">
          {item.price}$
        </p>

        <form
          onSubmit={(e) => {
            updateCart(e, item.id, amount);
            addFeedback();
          }}
          className="flex justify-center gap-2 p-2 lg:justify-start"
        >
          <button className=" rounded-sm bg-emerald-400 py-2 px-6 text-xl font-semibold hover:bg-emerald-300 active:bg-emerald-100 lg:text-2xl">
            Add To Cart
          </button>

          <select name="amount" className="px-3" onChange={onAmountChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </form>
      </section>

      <div className="feedback fixed bottom-0 left-0 hidden w-full bg-gray-700 p-6 text-center text-xl text-white opacity-0 md:text-2xl lg:text-2xl ">
        Item has been added to your cart
      </div>
    </main>
  );
}
