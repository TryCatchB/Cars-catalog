import { FC } from "react";
import { useAuth } from "../../hooks/useAuth";

const Header: FC = () => {
  const { customer, setCustomer } = useAuth();

  return (
    <header>
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
    </header>
  );
};

export default Header;
