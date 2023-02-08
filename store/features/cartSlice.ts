import {
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CartItem, Product } from "interfaces";
import { RootState } from "store/store";

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
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) cartItem.qty++;
      else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
    },
  },
});

const cartItems = (state: RootState) =>
  state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product.id === productId)?.qty
);

export const totalCartItemsSelector = createSelector(
  [cartItems],
  (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItem) =>
        (total += curr.qty),
      0
    )
);
export const TotalPriceSelector = createSelector(
  [cartItems],
  (cartItems) =>
    cartItems.reduce(
      (total: number, curr: CartItem) =>
        (total += curr.qty * curr.product.price),
      0
    )
);

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
