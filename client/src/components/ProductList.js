import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products, setProduct } = props;
  const removeFromDom = (productId) => {
    setProduct(products.filter((product) => product._id !== productId));
  };
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/product/" + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>All Products:</h3>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <p>
              {product.title} ${product.price}:{product.description}
            </p>
            <Link to={`/product/${product._id}`}>View</Link>
            <Link to={`/product/edit/${product._id}`}>Edit</Link>
            <button
              onClick={(event) => {
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
