import { useState } from "react";
import useExpenses from "../hooks/useExpenses";
import ExpenseForm from "./ExpenseForm";

const table = {
  margin: "40px auto",
  width: "90%",
};

const actions = {
  display: "flex",
  justifyContent: "center",
  columnGap: "8%",
};

const tableHeaderAndBody = {
  textAlign: "center",
};

const noExpenses = {
  textAlign: "center",
};

const ExpenseList = ({ expensesList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);
  const { setExpensesList, error, isLoading } = useExpenses();

  async function handleDelete(event, expenseId) {
    event.preventDefault();

    await fetch(`http://localhost:3001/expenses/${expenseId}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then(() => {
      const filteredExpenses = expensesList.filter(({ id }) => {
        return expenseId !== id;
      });
      setExpensesList(filteredExpenses);
    });
  }

  const handleUpdate = (expense) => {
    setExpenseToUpdate(expense);
    setIsModalOpen(true);
  };

  const displayErrorOrNoExpensesMessage = () => {
    return error
      ? "Could not fetch data, an error occurred."
      : "You do not have any expenses currently.";
  };

  return (
    <div style={table}>
      {!isLoading && expensesList.length > 0 ? (
        <table className="table">
          <thead>
            <tr style={tableHeaderAndBody}>
              <th scope="col">Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expensesList.map((expense) => (
              <tr style={tableHeaderAndBody}>
                <th scope="row">{expense.amount}</th>
                <th>{expense.description}</th>
                <th>{expense.date}</th>
                <th>{expense.expenseType}</th>
                <th style={actions}>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => handleUpdate(expense)}
                  >
                    Update
                  </button>
                  <ExpenseForm
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    expenseType={expense.expenseType}
                    actionType="Update"
                    expenseToUpdate={expenseToUpdate}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={(event) => handleDelete(event, expense.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 style={noExpenses}>{displayErrorOrNoExpensesMessage()}</h1>
      )}
    </div>
  );
};

export default ExpenseList;
