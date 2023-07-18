import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { TypeCustomer } from "../../types/customer.interface";

type TypeContext = {
  customer: TypeCustomer;
  setCustomer: Dispatch<SetStateAction<TypeCustomer>>;
};

export const AuthContext = createContext<TypeContext>({
  customer: null,
  setCustomer: () => {},
});

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [customer, setCustomer] = useState<TypeCustomer>(null);

  return (
    <AuthContext.Provider value={{ customer, setCustomer }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
