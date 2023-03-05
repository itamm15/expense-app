import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchExpenses } from "../hooks/expense/fetchExpenses";
import { useUser } from "./userContext";

const ExpensesContext = createContext();

export function useExpenses() {
  return useContext(ExpensesContext);
}

export const ExpensesContextProvider = ({ children }) => {
  const { session } = useUser();
  const [expensesList, setExpensesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      fetchExpenses(session.userId, setExpensesList, setError, setIsLoading);
    }
  }, [session]);

  const value = {
    expensesList,
    setExpensesList,
    isLoading,
    setIsLoading,
    error,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default useExpenses;
