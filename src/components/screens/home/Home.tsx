import { useState } from "react";
import CreateUser from "./create-user/CreateUser";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
import { useGetAll } from "../../../hooks/useGetAll";
import { IUser } from "../../../types/user.interface";

function Home() {
  const [users, setUsers] = useState<IUser[]>([]);

  useGetAll(setUsers);

  return (
    <div>
      <h1>Users catalog</h1>
      <Header />
      <CreateUser setUsers={setUsers} />
      {users.length ? <Catalog users={users} /> : <p>Loading...</p>}
    </div>
  );
}

export default Home;
