import React from "react";
import { Button } from "./elements";
import { TrashIcon } from "@heroicons/react/24/solid";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        variant="danger"
        className="w-12 h-10"
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? (
          <TrashIcon className="w-4" />
        ) : (
          "-"
        )}
      </Button>
      <p>{props.qty}</p>
      <Button
        className="w-12 h-10"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
