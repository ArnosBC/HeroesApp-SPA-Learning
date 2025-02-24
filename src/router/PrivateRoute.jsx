import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPth", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
