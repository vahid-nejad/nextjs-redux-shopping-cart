export interface Product {
  id?: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  qty: number;
}
