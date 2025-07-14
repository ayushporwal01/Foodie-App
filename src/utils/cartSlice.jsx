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

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    decrementItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== itemId);
        }
      }
      // remove item if quantity = 1 and user clicks minus
      state.items = state.items.filter((i) => i.id !== itemId);
    },

    clearCart: (state) => {
      state.items = []; //Resets the array
    },
  },
});

export const { addItem, decrementItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
