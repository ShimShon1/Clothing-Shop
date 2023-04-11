import trashImg from "../images/trash.svg";

export default function CartItem(props) {
  function changeAmount(e, id) {
    let amount = e.target.value;
    props.setInCart(
      props.inCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: amount,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeCartItem(id) {
    props.setInCart(props.inCart.filter((item) => item.id !== id));
  }
  return (
    <div
      className=" grid grid-cols-3 items-center border-2 text-center text-lg leading-loose
        shadow-md shadow-slate-400 md:text-xl 
        lg:text-2xl"
    >
      <div className="h-15 relative overflow-hidden md:h-20 lg:h-28  ">
        <div
          className="absolute flex h-full w-full cursor-pointer items-center justify-center opacity-20 hover:bg-gray-300 hover:bg-opacity-40
                hover:opacity-100 lg:justify-start lg:p-10"
        >
          <img src={trashImg} alt="" onClick={() => removeCartItem(props.id)} />
        </div>

        <img
          className="m-auto h-20 self-center md:h-24  lg:h-32"
          src={props.image}
          alt=""
        />
      </div>

      <span>{props.price}</span>

      <input
        className="m-auto w-1/5 border-2  border-dashed border-gray-200 text-center outline-transparent	"
        type="number"
        min={1}
        onChange={(e) => changeAmount(e, props.id)}
        value={props.amount}
      />
    </div>
  );
}
