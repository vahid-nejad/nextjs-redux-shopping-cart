import { TrashIcon } from "@heroicons/react/24/solid";
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
      <Button onClick={props.onDecrease} variant="danger" className="w-12 h-10">
        {props.qty === 1 ? <TrashIcon className="w-4" /> : "-"}
      </Button>
      <p>{props.qty}</p>

      <Button onClick={props.onIncrease} className="w-12 h-10">
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
