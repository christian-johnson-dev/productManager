import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products, setProduct } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(products.length);
  return (
    <div>
      <h3>All Products:</h3>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
              {product.title} ${product.price}:{product.description}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
