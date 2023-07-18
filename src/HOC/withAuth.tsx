import { ComponentType, useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";

const withAuth = (Component: ComponentType) => (props: any) => {
  const { customer } = useContext(AuthContext);

  if (!customer) return <p>You are not authorized to view this page!</p>;

  return <Component {...props} />;
};

export default withAuth;
