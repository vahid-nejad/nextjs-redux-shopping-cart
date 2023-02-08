import { Product } from "interfaces";
import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition overflow-hidden ">
      <Image
        src={props.product.imagePath}
        width={400}
        height={300}
        alt={props.product.name}
      />
      <div className="p-2">
        <h6 className="text-center text-slate-600">
          {props.product.name}
        </h6>
        <p className="text-center text-slate-600">
          {props.product.price} $
        </p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;
