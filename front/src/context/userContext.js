import { createContext, useContext, useEffect, useState } from "react";
import { getSession } from "../Utils";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
  const [session, setSession] = useState(getSession());

  useEffect(() => {
    setSession(getSession());
  }, [])

  return <UserContext.Provider value={session}>{children}</UserContext.Provider>;
};
