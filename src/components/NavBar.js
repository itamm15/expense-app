import { useState } from "react";
//import useExpenses from "../hooks/useExpenses";
import NewExpenseForm from "./NewExpenseForm";

const NavBar = ({ searchedDescription, setSearchedDescription }) => {
  // const { expensesList, setExpensesList } = useExpenses();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseType, setExpenseType] = useState("income");
  const createExpense = (event) => {
    setExpenseType(event.target.value);
    setIsModalOpen(true);
  };

  return (
    <ul className="nav nav-pills bg-light d-flex flex-row justify-content-around">
      <li className="nav-item my-2" style={{ width: "40%" }}>
        <h3 className="navbar-brand">Expenses</h3>
      </li>
      <li className="nav-item my-2" style={{ width: "20%" }}>
        <form
          className="form-inline d-flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search description"
            aria-label="Search"
            value={searchedDescription}
            onChange={(event) => setSearchedDescription(event.target.value)}
          />
        </form>
      </li>
      <li className="nav-item my-2" style={{ width: "10%" }}>
        <button
          className="btn btn-warning"
          value="income"
          onClick={createExpense}
        >
          Create income
        </button>
      </li>
      <li className="nav-item my-2" style={{ width: "10%" }}>
        <button
          className="btn btn-danger"
          value="outcome"
          onClick={createExpense}
        >
          Create outcome
        </button>
      </li>
      <NewExpenseForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        expenseType={expenseType}
      />
    </ul>
  );
};

export default NavBar;
