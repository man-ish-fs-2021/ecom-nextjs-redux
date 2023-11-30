import { Product } from "@/constants/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { [id: string]: Product } = {};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload as Product;
      console.log({ item, state });
      state[item.id] = item;
      state[item.id] = {
        ...state[item.id],
        qty: 0,
      };
      state[item.id].qty += 1;
    },
    increaseQty: (state, action) => {
      const id = action.payload as string;
      state[id].qty += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload as string;
      state[id].qty -= 1;
      if (state[id].qty === 0) {
        delete state[id];
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload as string;
      delete state[id];
    },
  },
});
export const { addToCart, increaseQty, decreaseQty, deleteItem } =
  CartSlice.actions;

export default CartSlice.reducer;
