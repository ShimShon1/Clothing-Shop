import Item from "../components/Item";
import itemsData from "../data/itemsData";
import { useState } from "react";

export default function Shop() {
  const [itemsShown, setItemsShown] = useState(itemsData);

  function updateItemsShown(gender = "all") {
    if (gender === "all") {
      setItemsShown(itemsData);
    } else if (gender === "men") {
      setItemsShown(
        itemsData.filter((item) => {
          return item.gender === "men";
        })
      );
    } else if (gender === "women") {
      setItemsShown(
        itemsData.filter((item) => {
          return item.gender === "women";
        })
      );
    }
  }

  let itemElements = itemsShown.map((item) => {
    return (
      <Item
        image={item.image}
        name={item.name}
        desc={item.desc}
        key={item.id}
        id={item.id}
        price={item.price}
      />
    );
  });

  return (
    <main className="">
      <nav className=" grid cursor-pointer grid-cols-7 bg-slate-700 text-center text-lg text-gray-200">
        <span
          className="col-span-3 hover:bg-slate-500"
          onClick={() => updateItemsShown("men")}
        >
          Men
        </span>
        <span
          className="bg-slate-600 hover:bg-slate-800"
          onClick={() => updateItemsShown()}
        >
          All
        </span>
        <span
          className="col-span-3 hover:bg-slate-500"
          onClick={() => updateItemsShown("women")}
        >
          Women
        </span>
      </nav>
      <div
        className="grid justify-center gap-4 p-6 md:grid-cols-2 lg:grid-cols-4
            "
      >
        {itemElements}
      </div>
    </main>
  );
}
