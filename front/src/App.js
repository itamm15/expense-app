import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import useExpenses from "./context/expenseContext";
import ExpenseChart from "./components/ExpenseChart";
import history from "history/browser";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useUser } from "./context/userContext";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const { expensesList } = useExpenses();
  const { session } = useUser();

  const RequireLogged = () => {
    if (session === undefined) {
      return <Navigate to="/register" replace />;
    }
    return <Outlet />;
  };

  return (
    <Routes history={history}>
      <Route element={<RequireLogged />}>
        <Route path="/" element={<NavBar />}>
          <Route index element={<ExpenseList expensesList={expensesList} />} />
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
