export interface Product {
  id: number;
  name: string;
  price: number;
  imgPath: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}
