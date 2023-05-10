import { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
const Main = (props) => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h3>Product Manager</h3>
      <ProductForm products={products} setProduct={setProducts} />
      <hr />
      <ProductList products={products} setProduct={setProducts} />
    </div>
  );
};
export default Main;
