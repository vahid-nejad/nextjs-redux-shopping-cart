import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ProductsLayout = ({ children }: IProps) => {
  return (
    <div className="grid grid-cols-12 mt-1">
      <div className="w-48 h-screen bg-cyan-50 col-span-2">
        This is the Product page layout{" "}
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default ProductsLayout;
