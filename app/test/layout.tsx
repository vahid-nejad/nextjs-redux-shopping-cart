"use client";
import { Button } from "components/elements";
import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Button
        onClick={() => setCounter((prev) => prev + 1)}
      >
        {counter}
      </Button>
      {children}
    </div>
  );
};

export default layout;
