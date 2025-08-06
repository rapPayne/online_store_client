import { ReactElement } from "react"
import { Product } from './types/Product'
import './ProductList.css'
import { RenderProduct } from "./RenderProduct"

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
        .map(product => <RenderProduct product={product} />)}
    </section>
  </div>
}

//const prodNameStyle = { fontWeight: "bold", fontSize: "1.2em" }