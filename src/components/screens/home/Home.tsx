import { useEffect, useState } from "react";
import CreateUser from "./create-user/CreateUser";
import { UserService } from "../../../services/user.service";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserService.getAll();

      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users catalog</h1>
      <Header />
      <CreateUser setUsers={setUsers} />
      <Catalog users={users} />
    </div>
  );
}

export default Home;
