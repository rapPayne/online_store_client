export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  on_hand: number;
  description?: string;
  imageUrl?: string;
}