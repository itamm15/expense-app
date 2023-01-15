import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchExpenses } from "../hooks/fetchExpenses";

const ExpensesContext = createContext();

export function useExpenses() {
  return useContext(ExpensesContext);
}

export const ExpensesContextProvider = ({ children }) => {
  const [expensesList, setExpensesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExpenses(setExpensesList, setError, setIsLoading);
  }, []);

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
