import { FC, useState } from "react";
import CreateUser from "./create-user/CreateUser";
import Catalog from "../../ui/Catalog";
import { useGetAll } from "../../../hooks/useGetAll";
import { IUser } from "../../../types/user.interface";
import styles from "./Home.module.css";

const Home: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useGetAll(setUsers);

  return (
    <div>
      <h1 className={styles.title}>Users catalog</h1>
      <CreateUser setUsers={setUsers} />
      {users.length ? <Catalog users={users} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
