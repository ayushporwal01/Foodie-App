import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage (or use empty array if not present)
const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart, //set initial cart items from localStorage
  },

  reducers: {
    addItem: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
