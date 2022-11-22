import { products } from "dummyContents";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  return (
    <div className="flex flex-wrap gap-4 p-2">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsPage;
