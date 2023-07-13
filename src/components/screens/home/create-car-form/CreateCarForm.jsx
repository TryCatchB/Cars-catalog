import React, { useState } from "react";
import styles from "./CreateCarForm.module.css";

const clearData = {
  name: "",
  price: "",
  image: "",
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        value={data.name}
        onChange={(event) =>
          setData((prev) => ({
            ...prev,
            name: event.target.value,
          }))
        }
      />
      <input
        placeholder="Price"
        value={data.price}
        onChange={(event) =>
          setData((prev) => ({
            ...prev,
            price: event.target.value,
          }))
        }
      />
      <input
        placeholder="Image"
        value={data.image}
        onChange={(event) =>
          setData((prev) => ({
            ...prev,
            image: event.target.value,
          }))
        }
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
