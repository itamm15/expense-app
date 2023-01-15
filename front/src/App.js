import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./context/expensesContext";
import ExpenseChart from "./components/ExpenseChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NavBar
              searchedDescription={searchedDescription}
              setSearchedDescription={setSearchedDescription}
            />
          }
        >
          <Route
            index
            element={<ExpenseList expensesList={filterExpenses()} />}
          />
          <Route
            path="charts"
            element={<ExpenseChart expensesList={expensesList} />}
          />
          <Route path="bureau" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
