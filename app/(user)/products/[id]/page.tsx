import React from "react";
interface Props {
  params: {
    id: string;
  };
}

const ProductPage = (props: Props) => {
  return <div>{props.params.id}</div>;
};

export default ProductPage;
