import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummydata";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-4 flex flex-wrap gap-4">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
