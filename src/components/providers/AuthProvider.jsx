import { createContext, useState } from "react";

export const AuthContext = createContext();

import React from "react";

const AuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);

  return (
    <AuthContext.Provider value={{ customer, setCustomer }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
