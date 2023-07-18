import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import User from "../home/user/User";
import withAuth from "../../../HOC/withAuth";
import { IUser } from "../../../types/user.interface";
import { useGetUser } from "./useGetUser";
import styles from "./UserDetail.module.css";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>({} as IUser);

  useGetUser(setUser, id);

  if (!user.name) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link className={styles.btn} to="/">
        Back
      </Link>
      <User user={user} />
    </div>
  );
};

export default withAuth(UserDetail);
