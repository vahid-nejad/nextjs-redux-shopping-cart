"use client";
import React from "react";
import { totalCartItemsSelector } from "store/features/cartSlice";
import { useAppSelector } from "store/store";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
interface Props {
  className?: string;
}
const CartButton = (props: Props) => {
  const totalItem = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className} relative`}>
      <ShoppingCartIcon className="w-9 text-slate-500" />
      {!!totalItem && (
        <div
          key={totalItem}
          className="bg-red-500 text-white flex justify-center items-center rounded-full absolute w-6 -top-2 -right-2 animate-pingOnce"
        >
          {totalItem}
        </div>
      )}
    </div>
  );
};

export default CartButton;
