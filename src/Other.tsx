import { useParams } from "react-router"

export const ContactUs = () => <h1>ContactUs</h1>
export const Login = () => <h1>Login</h1>

export const Checkout = () => <h1>Checkout</h1>
export const FourOhFourWinkWink = () => {
  return (
    <>
      <h1>Oh noes! You broke us</h1>
      <p>Maybe you're looking for ...</p>
      <ul>
        <li><a href="/">List of products</a></li>
        <a href="/contact">Contact us</a>
        <a href="/login">Login</a>
      </ul>
    </>
  )
}

export const Product = () => {
  const params = useParams()
  const id = params.id
  return (
    <>
      <h1>Product details</h1>
      You're looking at the deets for product {id}
    </>
  )
}