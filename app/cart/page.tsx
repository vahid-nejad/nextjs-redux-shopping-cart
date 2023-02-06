"use client";

import CartItemContainer from "components/CartItemContainer";
import React from "react";
import { TotalPriceSelector } from "store/features/cartSlice";
import { useAppSelector } from "store/store";

const page = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <div className="p-2 ">
      {cartItems.map((item) => (
        <CartItemContainer cartItem={item} key={item.product.id} />
      ))}
      <p className="text-slate-600">
        Total Price: <span className="text-slate-900 font-bold">{totalPrice} $</span>
      </p>
    </div>
  );
};

export default page;
