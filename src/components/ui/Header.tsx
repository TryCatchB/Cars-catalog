import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { customer, setCustomer } = useAuth();

  return (
    <div>
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
    </div>
  );
};

export default Header;
