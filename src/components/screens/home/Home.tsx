import { useState } from "react";
import CreateUser from "./create-user/CreateUser";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
import { useGetAll } from "../../../hooks/useGetAll";

function Home() {
  const [users, setUsers] = useState([]);

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
