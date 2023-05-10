import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProduct = (event) => {
    event.preventDefault();
    axios
      .patch("http://localhost:8000/api/product/" + id, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Update Product:</h3>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label> <br />
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <p>
          <label>Price</label> <br />
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </p>
        <p>
          <label>Description</label> <br />
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default Update;
