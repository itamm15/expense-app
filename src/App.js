import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./hooks/useExpenses";
import { useState } from "react";

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
    </>
  );
}

export default App;
