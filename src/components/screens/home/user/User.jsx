import React from "react";
import styles from "../Home.module.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div key={user.id} className={styles.item}>
      <div className={styles.info}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <Link className="btn" to={`/user/${user.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default User;
