import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "interfaces";

export interface CartState {
  cartItems: CartItem[];
}
const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find((el) => el.product.id === action.payload.id);
      if (cartItem) cartItem.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find((el) => el.product.id === action.payload.id);
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter((el) => el.product.id !== action.payload.id);
        }
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
