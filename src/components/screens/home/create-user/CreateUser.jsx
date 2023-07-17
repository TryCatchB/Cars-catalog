import React, { useState } from "react";
import styles from "./CreateUser.module.css";
import { useForm } from "react-hook-form";

const clearData = { name: "", email: "", phone: "" };

const CreateUser = ({ setUsers }) => {
  const [data, setData] = useState(clearData);

  const { register, reset, handleSubmit } = useForm({ mode: "onChange" });

  const createUser = (data) => {
    setUsers((prev) => [...prev, { id: prev.length + 1, ...data }]);
    setData(clearData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createUser)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("phone", { required: true })} placeholder="Phone" />
      <button className="btn">Create</button>
    </form>
  );
};

export default CreateUser;
