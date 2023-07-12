import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, register, logout } = useAuth();

  return (
    <Context.Provider value={{ isAuthenticated, register, logout }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
