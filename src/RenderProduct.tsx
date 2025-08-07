import { Product } from "./types/Product"
import { Link } from "react-router";
import './RenderProduct.css'

type Props = {
  product: Product
}

export function RenderProduct({ product }: Props) {
  return (
    <section className="RenderProduct">
      <Link to={"/product/" + product.id}>
        <img src={product?.imageUrl ? product.imageUrl : "/assets/images/image_not_available.png"} alt={product?.name} />
        <div>
          <div className="name_price">
            <p className="name">{product?.name}</p>
            <p>{product?.price}</p>
          </div>
          <p>{product?.description}</p>
          <p>On hand: {product?.on_hand}</p>
          <button className="tag">{product?.category}</button>
        </div>
      </Link>
    </section>
  )
}

