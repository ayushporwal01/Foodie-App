import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10 dark:bg-black">
      <h1 className="text-2xl font-bold dark:text-white">Cart</h1>
      <button
        className="m-2 p-2 bg-black dark:bg-gray-200 rounded-lg cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 mx-auto bg-gray-200 p-5 my-4 shadow-lg">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
