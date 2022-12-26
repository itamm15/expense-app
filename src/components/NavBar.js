import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = () => {
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
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </li>
      <li className="nav-item my-2" style={{ width: "10%" }}>
        <button className="btn btn-warning" onClick={handleChange}>
          Create income
          <NewExpenseForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            expenseType="income"
          />
        </button>
      </li>
      <li className="nav-item my-2" style={{ width: "10%" }}>
        <button className="btn btn-danger" onClick={handleChange}>
          Create outcome
          <NewExpenseForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            expenseType="outcome"
          />
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
