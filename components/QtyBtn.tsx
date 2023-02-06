import { Product } from "interfaces";
import React from "react";
import { decrement, increment } from "store/features/cartSlice";
import { useAppDispatch } from "store/store";
import { Button } from "./elements";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button onClick={props.onDecrease} variant="danger">
        -
      </Button>
      <p>{props.qty}</p>

      <Button onClick={props.onIncrease}>+</Button>
    </div>
  );
};

export default QtyBtn;
