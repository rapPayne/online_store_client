import { ProductList } from "./ProductList"
import { Product } from "./types/Product"

const products: Product[] = [
  {
    "id": 3,
    "name": "Laptop Stand",
    "price": 45,
    "category": "Office Supplies",
    "on_hand": 25,
    "description": "Adjustable aluminum laptop stand for better ergonomics",
    "imageUrl": "https://m.media-amazon.com/images/I/71UgYJkbOSL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "name": "Wireless Headphones",
    "price": 99.99,
    "category": "Electronics",
    "on_hand": 50,
    "imageUrl": "/assets/images/headphones1.jpg"
  },
  {
    "id": 1,
    "name": "Coffee Mug",
    "price": 12.99,
    "category": "Home & Kitchen",
    "on_hand": 100,
    "description": "Ceramic coffee mug with ergonomic handle",
    "imageUrl": "/assets/images/coffeemug1.jpg"
  },
]

export function App() {
  return (
    <>
      <header>
        <h1>The store</h1>
      </header>
      <main>
        <div>
          <p>Hello world</p>
          <hr />
          <img src="foo.jpg" alt="image of a foo" />
          <p className="name">Hello there</p>
          <ProductList products={products} title="Stuff to buy" />
        </div>
      </main>
      <footer>
        <p>Copyright &copy; us.com {new Date().getFullYear()}, all rights reserved</p>
      </footer>
    </>
  )
}

