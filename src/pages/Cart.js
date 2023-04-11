import CartItem from "../components/CartItem";

export default function Cart(props) {
  let cartElements = props.inCart.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        id={item.id}
        image={item.image}
        amount={item.amount}
        removeCartItem={props.removeCartItem}
        changeAmount={props.changeAmount}
      />
    );
  });

  let totalPrice = props.inCart.reduce(
    (accu, item) => accu + item.price * item.amount,
    0
  );

  return (
    <main className="p-4 grid gap-6 ">
      <header className=" grid grid-cols-3 leading-loose text-lg items-center text-center md:text-xl lg:text-2xl">
        <span className="font-semibold">Item</span>
        <span className="font-semibold">Price</span>
        <span className="font-semibold">Quantity</span>
      </header>

      {cartElements}

      <div className="text-center space-y-4 text-lg md:text-xl lg:text-2xl   font-semibold mt-8">
        <hr></hr>
        <div>
          Total :{" "}
          {totalPrice < 10
            ? totalPrice.toPrecision(3)
            : totalPrice < 1000
            ? totalPrice.toPrecision(4)
            : totalPrice.toPrecision(5)}
          $
        </div>
        <button className="bg-emerald-400  hover:bg-emerald-300 text-xl md:text-2xl lg:text-3xl tracking-wider rounded-sm py-2 font-semibold px-6 ">
          Check Out
        </button>
      </div>
    </main>
  );
}
