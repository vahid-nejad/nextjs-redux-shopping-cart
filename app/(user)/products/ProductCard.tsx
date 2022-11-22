import { Product } from "interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <Link href={`/products/${props.product.id}`}>
      <div className="shadow rounded-md hover:shadow-md cursor-pointer overflow-hidden p-4">
        <Image
          src={props.product.imageUrl}
          width={300}
          height={200}
          alt={props.product.name}
        />
        <h6 className="text-center text-slate-600 p-2">{props.product.name}</h6>
        <p className="text-center text-emerald-500 p-2">
          {props.product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
