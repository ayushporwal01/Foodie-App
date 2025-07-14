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
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if(existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...item, quantity: 1});
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
