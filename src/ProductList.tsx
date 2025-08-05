import { ReactElement } from "react"
import { Product } from './types/Product'

type Props = {
  products: Array<Product>,
  title: string
}

export const ProductList = (props: Props): ReactElement => {
  const listOfProducts = props.products;
  return <div>
    <h1>{props.title}</h1>
    <pre>{JSON.stringify(listOfProducts, null, 2)}</pre>
  </div>
}