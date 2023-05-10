import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>Product Details:</h3>
      <hr />
      <p>Title: {product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};
export default Detail;
