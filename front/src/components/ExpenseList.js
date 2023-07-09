import { useCallback, useEffect, useState } from "react";
import { UPDATE, CREATE } from "../constants/actions";
import { INCOME, OUTCOME } from "../constants/expenseTypes";
import deleteExpense from "../hooks/expense/deleteExpense";
import useExpenses from "../context/expenseContext";
import ExpenseForm from "./ExpenseForm";
import currency from "currency.js";
import "../styles/ExpenseList.scss";

const ExpenseList = ({ expensesList }) => {
  const [searchedDescription, setSearchedDescription] = useState("");
  const [expenses, setExpenses] = useState(expensesList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);
  const [expenseType, setExpenseType] = useState(INCOME);
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
    setExpenseType(expense.type);
    setActionType(UPDATE);
    setIsModalOpen(true);
  };

  const sumOfExpenses = (filteredExpenses) => {
    const { value } = filteredExpenses.reduce((sum, { amount, type }) => {
      let expenseAmount = type === INCOME ? amount : amount * -1;
      return sum.add(expenseAmount);
    }, currency(0));
    return value;
  };

  const [expensesSum, setExpensesSum] = useState(sumOfExpenses(expensesList));

  const displayErrorOrNoExpensesMessage = () => {
    return error
      ? "Could not fetch data, an error occurred."
      : "You do not have any expenses currently.";
  };

  const filterExpenses = useCallback(() => {
    if (searchedDescription === "") return expensesList;
    return expensesList.filter(({ description }) => {
      return description
        .toLowerCase()
        .includes(searchedDescription.toLowerCase());
    });
  }, [expensesList, searchedDescription]);

  useEffect(() => {
    const filteredExpenses = filterExpenses();
    const total = sumOfExpenses(filteredExpenses);
    setExpenses(filteredExpenses);
    setExpensesSum(total);
  }, [searchedDescription, setSearchedDescription, filterExpenses]);

  return (
    <div className="table-view">
      {error && <h2 className="error">{displayErrorOrNoExpensesMessage()}</h2>}
      {!error && expensesList && (
        <>
          <div className="control-panel">
            <div className="control-panel__filter-expense">
              <input
                className="form-control filter-expense"
                type="search"
                placeholder="Search description"
                aria-label="Search"
                value={searchedDescription}
                onChange={(event) => setSearchedDescription(event.target.value)}
              />
            </div>
            <div className="control-panel__actions-buttons">
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
          </div>
          <table className="table">
            <thead>
              <tr className="table-header-and-body">
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Currency</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {!isLoading && (
              <tbody>
                {expenses.map((expense) => (
                  <tr className="table-header-and-body">
                    <th scope="row">{expense.description}</th>
                    <th>{expense.date}</th>
                    <th>{expense.type}</th>
                    <th>{expense.amount}</th>
                    <th>{expense.currency}</th>
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
                  <th>Sum: {expensesSum}</th>
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
