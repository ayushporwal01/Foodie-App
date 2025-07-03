import { useSelector } from "react-redux";
import ItemsList from "./itemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto bg-gray-200 p-5 my-4 shadow-lg">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
