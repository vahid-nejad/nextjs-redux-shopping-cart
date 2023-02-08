import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummtdata";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductCard product={dummyProducts[0]} />
    </div>
  );
};

export default page;
