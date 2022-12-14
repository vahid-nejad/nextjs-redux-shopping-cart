"use client";

import { TextBox, Button } from "components/elements";
import { useProductContext } from "context/ProductContext";
import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { addProduct } = useProductContext();
  const add = () => {
    addProduct({ name, price });
    setPrice(0);
    setName("");
  };

  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <TextBox
        labelText="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextBox
        labelText="Price"
        onChange={(e) => setPrice(parseInt(e.target.value))}
        value={price}
      />
      <Button className="col-span-2 w-52 place-self-center" onClick={add}>
        Add
      </Button>
    </div>
  );
};

export default Add;
