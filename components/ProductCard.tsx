import { Product } from "interfaces";
import Image from "next/image";
import React from "react";

interface Props {
  product: Product;
  className?: string;
}
const ProductCard = (props: Props) => {
  return (
    <div className={`border rounded-md p-2 shadow hover:shadow-lg trasnsition`}>
      <Image
        src={`https://picsum.photos/id/${Math.round(Math.random() * 100)}/400/300`}
        height={300}
        width={400}
        alt={`Image of ${props.product.name}`}
      />

      <h6>{props.product.name}</h6>
      <p>{props.product.price} $</p>
    </div>
  );
};

export default ProductCard;
