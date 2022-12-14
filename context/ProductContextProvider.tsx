"use client";

import { Product } from "interfaces";
import React, { ReactNode, useState } from "react";
import { ProductContext } from "./ProductContext";

interface IProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    product.id = products.length;
    setProducts([...products, product]);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
