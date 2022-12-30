import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./hooks/useExpenses";
import { useState } from "react";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const { expensesList } = useExpenses();
  const [searchedDescription, setSearchedDescription] = useState("");

  const filterExpenses = () => {
    if (searchedDescription === "") return expensesList;
    return expensesList.filter(({ description }) => {
      return description
        .toLowerCase()
        .includes(searchedDescription.toLowerCase());
    });
  };

  return (
    <>
      <NavBar
        searchedDescription={searchedDescription}
        setSearchedDescription={setSearchedDescription}
      />
      <ExpenseList expensesList={filterExpenses()} />
      <ExpenseChart expensesList={expensesList} />
    </>
  );
}

export default App;
