import { Product } from "@/constants/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { [id: string]: Product } = {};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload as Product;
      console.log({ item });
      state[item.id] = item;
      state[item.id].qty = 0;
      state[item.id].qty += 1;
    },
    increaseQty: (state, action) => {
      const id = action.payload as string;
      state[id].qty += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload as string;
      state[id].qty -= 1;
    },
  },
});
export const { addToCart, increaseQty, decreaseQty } = CartSlice.actions;

export default CartSlice.reducer;
