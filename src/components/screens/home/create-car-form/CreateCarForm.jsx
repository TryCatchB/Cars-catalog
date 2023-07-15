import React, { useState } from "react";
import styles from "./CreateCarForm.module.css";

const clearData = { name: "", price: "", image: "" };

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (event) => {
    event.preventDefault();
    setCars((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <input
        value={data.name}
        onChange={(event) =>
          setData((prev) => ({ ...prev, name: event.target.value }))
        }
        placeholder="Name"
      />
      <input
        value={data.price}
        onChange={(event) =>
          setData((prev) => ({ ...prev, price: event.target.value }))
        }
        placeholder="Name"
      />
      <input
        value={data.image}
        onChange={(event) =>
          setData((prev) => ({ ...prev, image: event.target.value }))
        }
        placeholder="Name"
      />
      <button className="btn" onClick={(event) => createCar(event)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
