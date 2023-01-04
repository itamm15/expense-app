import { useState } from "react";
import { UPDATE, CREATE } from "../constants/actions";
import { INCOME, OUTCOME } from "../constants/expenseTypes";
import deleteExpense from "../hooks/deleteExpense";
import useExpenses from "../hooks/useExpenses";
import ExpenseForm from "./ExpenseForm";
import currency from "currency.js";
import "../styles/ExpenseList.scss";

const ExpenseList = ({ expensesList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);
  const [expenseType, setExpenseType] = useState("income");
  const [actionType, setActionType] = useState(CREATE);
  const { setExpensesList, error, isLoading } = useExpenses();

  async function handleDelete(event, expenseId) {
    event.preventDefault();
    await deleteExpense(expenseId, expensesList, setExpensesList);
  }

  const createExpense = (event) => {
    setExpenseType(event.target.value);
    setActionType(CREATE);
    setIsModalOpen(true);
  };

  const handleUpdate = (expense) => {
    setExpenseToUpdate(expense);
    setExpenseType(expense.expenseType);
    setActionType(UPDATE);
    setIsModalOpen(true);
  };

  const sumOfExpenses = (expensesList) => {
    const { value } = expensesList.reduce((sum, { amount, expenseType }) => {
      let expenseAmount = expenseType === INCOME ? amount : amount * -1;
      return sum.add(expenseAmount);
    }, currency(0));
    return value;
  };

  const displayErrorOrNoExpensesMessage = () => {
    return error
      ? "Could not fetch data, an error occurred."
      : "You do not have any expenses currently.";
  };

  return (
    <div className="table-view">
      {error && <h2 className="error">{displayErrorOrNoExpensesMessage()}</h2>}
      {!error && expensesList && (
        <>
          <div className="action-buttons">
            <button
              className="btn btn-warning"
              value={INCOME}
              onClick={createExpense}
            >
              Create income
            </button>
            <button
              className="btn btn-danger create-outcome"
              value={OUTCOME}
              onClick={createExpense}
            >
              Create outcome
            </button>
            <ExpenseForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              expenseType={expenseType}
              actionType={actionType}
            />
          </div>
          <table className="table">
            <thead>
              <tr className="table-header-and-body">
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {!isLoading && (
              <tbody>
                {expensesList.map((expense) => (
                  <tr className="table-header-and-body">
                    <th scope="row">{expense.description}</th>
                    <th>{expense.date}</th>
                    <th>{expense.expenseType}</th>
                    <th>{expense.amount}</th>
                    <th className="actions">
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
                        expenseType={expenseType}
                        actionType={actionType}
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
                <tr className="table-header-and-body">
                  <th colSpan="3">&nbsp;</th>
                  <th>Sum: {sumOfExpenses(expensesList)}</th>
                  <th></th>
                </tr>
              </tbody>
            )}
          </table>
        </>
      )}
    </div>
  );
};

export default ExpenseList;
