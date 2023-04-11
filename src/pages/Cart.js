import CartItem from "../components/CartItem";

export default function Cart(props) {
  let cartElements = props.inCart.map((item) => {
    return (
      <CartItem
        name={item.name}
        price={item.price}
        id={item.id}
        key={item.id}
        image={item.image}
        amount={item.amount}
        inCart={props.inCart}
        setInCart={props.setInCart}
      />
    );
  });

  let totalPrice = props.inCart.reduce(
    (accu, item) => accu + item.price * item.amount,
    0
  );

  return (
    <main className="grid gap-6 p-4 ">
      <header className=" grid grid-cols-3 items-center text-center text-lg leading-loose md:text-xl lg:text-2xl">
        <span className="font-semibold">Item</span>
        <span className="font-semibold">Price</span>
        <span className="font-semibold">Quantity</span>
      </header>

      {cartElements}

      <div className="mt-8 space-y-4 text-center text-lg font-semibold   md:text-xl lg:text-2xl">
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
        <button className="rounded-sm  bg-emerald-400 py-2 px-6 text-xl font-semibold tracking-wider hover:bg-emerald-300 md:text-2xl lg:text-3xl ">
          Check Out
        </button>
      </div>
    </main>
  );
}
