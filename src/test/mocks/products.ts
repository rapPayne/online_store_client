import { Product } from '../../types/Product'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Test Product 1',
    price: 19.99,
    category: 'Electronics',
    on_hand: 10,
    description: 'A great test product',
    imageUrl: 'https://example.com/image1.jpg'
  },
  {
    id: 2,
    name: 'Test Product 2',
    price: 29.99,
    category: 'Books',
    on_hand: 5,
    description: 'Another test product',
    imageUrl: 'https://example.com/image2.jpg'
  },
  {
    id: 3,
    name: 'Test Product 3',
    price: 39.99,
    category: 'Clothing',
    on_hand: 0,
    description: 'Out of stock product'
  }
]