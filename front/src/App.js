import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./context/expenseContext";
import ExpenseChart from "./components/ExpenseChart";
import history from "history/browser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useUser } from "./context/userContext";
import Login from "./components/Login";

function App() {
  const { expensesList } = useExpenses();
  const { session } = useUser();
  const [searchedDescription, setSearchedDescription] = useState("");

  const filterExpenses = () => {
    if (searchedDescription === "") return expensesList;
    return expensesList.filter(({ description }) => {
      return description
        .toLowerCase()
        .includes(searchedDescription.toLowerCase());
    });
  };

  if (session === undefined) history.push("/login");

  return (
    <BrowserRouter>
      <Routes history={history}>
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
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
