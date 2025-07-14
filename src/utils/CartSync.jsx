import { useSelector } from "react-redux";
import { useEffect } from "react";

const CartSync = () => {
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
};

export default CartSync;
