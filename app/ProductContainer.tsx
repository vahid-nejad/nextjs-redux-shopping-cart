"use client";

import { useProductContext } from "context/ProductContext";
import React from "react";
import ProductCard from "./ProductCard";
const ProductContainer = () => {
  const { products } = useProductContext();
  if (products.length === 0)
    return (
      <h3 className="text-center text-red-500 p-5">No Product Added Yet!</h3>
    );
  return (
    <div className="flex flex-wrap gap-3 p-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default ProductContainer;
