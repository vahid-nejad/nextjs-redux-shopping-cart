"use clinet";
import React from "react";
import { TotalPriceSelector } from "store/features/cartSlice";
import { useAppSelector } from "store/store";

export const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.product.id}></div>
      ))}
      <p>Total Price: {totalPrice} $</p>
    </div>
  );
};
