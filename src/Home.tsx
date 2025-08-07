
import { ProductList } from "./ProductList"
import { Product } from "./types/Product"

export const Home = ({ products }: { products: Product[] }) => {
  return (
    <>
      <div>
        <input type="search" placeholder="🔍" />
        <button>Search</button>
      </div>
      <div>
        <ProductList products={products} title="Stuff to buy" />
      </div>
    </>
  )
}