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
    <div className="min-h-screen text-center pt-32">
      <h1 className="text-4xl font-bold  text-[#555]">Cart</h1>
      <button
        className="mt-2 px-2 py-1 bg-black text-white dark:bg-white dark:text-black rounded-lg transition-all duration-200 ease-in-out cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length > 0 ? (
        <div className="mx-auto md:w-6/12 p-5 mt-4">
          <ItemsList items={cartItems} showQuantityControls={true} />
          /* Checkout */
          <div className="my-5">
            <button className="px-4 py-1 text-lg bg-black text-white dark:bg-white dark:text-black transition-all duration-200 ease-in-out rounded-full cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-400px)] flex justify-center items-center">
          <h1 className="text-lg dark:text-white">
            Your cart is empty, add items to cart!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
