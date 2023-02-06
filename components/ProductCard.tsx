import { Product } from "interfaces";
import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";

interface Props {
  product: Product;
  className?: string;
}
const ProductCard = (props: Props) => {
  return (
    <div className={`border rounded-md shadow hover:shadow-lg trasnsition overflow-hidden`}>
      <Image
        src={props.product.imgPath}
        height={300}
        width={400}
        alt={`Image of ${props.product.name}`}
      />
      <div className="p-2">
        <h6>{props.product.name}</h6>
        <p>{props.product.price} $</p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;
