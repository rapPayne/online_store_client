import { useEffect, useState } from "react";
import { Product as ProductType } from "./types/Product"
import { Home } from "./Home";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router";
import { Checkout, ContactUs, FourOhFourWinkWink, Login, Product } from "./Other";

export function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  console.log(products)
  useEffect(() => {
    const url = `${import.meta.env.VITE_ROOT_API_URL}api/products`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(prods => setProducts(prods))
      .catch(error => {
        console.error('Failed to fetch products:', error);
        setProducts([]);
      });
  }, []);

  return (
    <Router>
      <header>
        <nav>
          <div>
            <Link to="/">Home</Link>
            <Link to="/checkout"> Checkout</Link>
            <Link to="/contact">Contact us</Link>
          </div>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home products={products}></Home>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<FourOhFourWinkWink />} />
        </Routes>
      </main>
      <footer>
        <p>Copyright &copy; us.com {new Date().getFullYear()}, all rights reserved</p>
      </footer>
    </Router>
  )
}

