import { ReactElement, useEffect } from "react"
import { Product } from './types/Product'
import './ProductList.css'
import { Product } from "./Product"

type Props = {
  products: Array<Product>,
  title: string
}

export const ProductList = (props: Props): ReactElement => {
  const listOfProducts = props.products;

  // Render a product using most of the product properties
  return <div className="ProductList">
    <h1>{props.title}</h1>
    <section className="productList"  >
      {listOfProducts
        .map(product => <Product product={product} />)}
    </section>
  </div>
}
