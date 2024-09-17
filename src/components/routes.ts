import Home from "./screens/home/Home";
import UserDetail from "./screens/user-detail/UserDetail";
import Error from "./ui/Error";
import SignInPage from "./ui/SignInPage";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: SignInPage,
  },
  {
    path: "/user/:id",
    element: UserDetail,
  },
  {
    path: "*",
    element: Error,
  },
];
