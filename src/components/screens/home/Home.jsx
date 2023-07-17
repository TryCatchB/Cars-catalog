import { useContext, useEffect, useState } from "react";
import User from "./user/User";
import CreateUser from "./create-user/CreateUser";
import { UserService } from "../../../services/user.service";
import { AuthContext } from "../../providers/AuthProvider";

function Home() {
  const [users, setUsers] = useState([]);

  const { customer, setCustomer } = useContext(AuthContext);

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

      {customer ? (
        <>
          <h2> Welcome, {customer.name}</h2>
          <button onClick={() => setCustomer(null)}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            setCustomer({
              name: "Key",
            })
          }
        >
          Login
        </button>
      )}

      <CreateUser setUsers={setUsers} />
      <div>
        {users.length ? (
          users.map((user) => <User key={user.id} user={user} />)
        ) : (
          <p>There is no users</p>
        )}
      </div>
    </div>
  );
}

export default Home;
