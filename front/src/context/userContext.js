import { createContext, useContext } from "react";
import { getSession } from "../Utils";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
  const value = getSession();
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
