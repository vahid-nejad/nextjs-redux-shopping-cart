import { CartItem } from "interfaces";
import Image from "next/image";
import React from "react";
import { decrement, increment } from "store/features/cartSlice";
import { useAppDispatch } from "store/store";
import QtyBtn from "./QtyBtn";

interface Props {
  cartItem: CartItem;
}
const CartItemContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-5 items-center border-b py-2">
      <Image
        src={props.cartItem.product.imgPath}
        height={150}
        width={200}
        alt={props.cartItem.product.name}
        className="rounded-md"
      />

      <p className="text-slate-600 "> {props.cartItem.product.name}</p>
      <p>{props.cartItem.product.price} $</p>
      <QtyBtn
        qty={props.cartItem.qty}
        onDecrease={() => dispatch(decrement(props.cartItem.product))}
        onIncrease={() => dispatch(increment(props.cartItem.product))}
      />
      <p>{props.cartItem.qty * props.cartItem.product.price} $</p>
    </div>
  );
};

export default CartItemContainer;
