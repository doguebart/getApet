import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, register } = useAuth();

  return (
    <Context.Provider value={{ isAuthenticated, register }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
