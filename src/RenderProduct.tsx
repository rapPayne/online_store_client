import { Product } from "./types/Product"

type Props = {
  product: Product
}

export function RenderProduct({ product }: Props) {
  return (
    <section className="productCard">
      <img src={product?.imageUrl} alt={product?.name} />
      <div className="name_price">
        <p className="name">{product?.name}</p>
        <p>{product?.price}</p>
      </div>
      <p>{product?.description}</p>
      <p>On hand: {product?.on_hand}</p>
      <button>{product?.category}</button>
    </section>
  )
}

