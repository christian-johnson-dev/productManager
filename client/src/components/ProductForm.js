import { useState } from "react";
import axios from "axios";
import styles from "./ProductForm.module.css";
const ProductForm = (props) => {
  const { products, setProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...products, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label className={styles["form-label"]} htmlFor="">
          Title
        </label>
        <br />
        <input
          type="text"
          className={styles["form-input"]}
          value={title}
          onChange={handleTitleChange}
        />
      </p>
      <p>
        <label className={styles["form-label"]} htmlFor="">
          Price
        </label>
        <br />
        <input
          type="number"
          className={styles["form-input"]}
          value={price}
          onChange={handlePriceChange}
        />
      </p>
      <p>
        <label className={styles["form-label"]} htmlFor="">
          Description
        </label>
        <br />
        <input
          type="textarea"
          className={styles["form-input"]}
          value={description}
          onChange={handleDescChange}
        />
      </p>
      <button type="submit" className={styles["form-button"]}>
        Create
      </button>
    </form>
  );
};
export default ProductForm;
