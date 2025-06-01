import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  cart: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addtoCart: (state, action) => {
      const item = action.payload;
      const exists = state.cart.find((i) => i.id === item.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 })
      }

    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id)
    }
  },
});

export const { setAllProducts, addtoCart, removeFromCart } = shopSlice.actions;

export default shopSlice.reducer;
