import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { routes } from "./routes";
import SignInPage from "./ui/SignInPage";

const Router: FC = () => {
  const { customer } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={customer ? <route.element /> : <SignInPage />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
