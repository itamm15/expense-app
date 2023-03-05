import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./context/expenseContext";
import ExpenseChart from "./components/ExpenseChart";
import history from "history/browser";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "./context/userContext";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const navigate = useNavigate();
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

  const RequireLogged = () => {
    console.log(session, "session from requireLogged");
    if (session === undefined) {
      return <Navigate to="/register" replace />
    }
    return <Outlet />
  }

  return (
      <Routes history={history}>
        <Route element={<RequireLogged />} >
          <Route
            path="/"
            element={ <NavBar searchedDescription={searchedDescription} setSearchedDescription={setSearchedDescription}/>}>
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
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
  );
}

export default App;
