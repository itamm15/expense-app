import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import useExpenses from "../hooks/useExpenses";
import { UPDATE } from "../constants/actions";
import createExpense from "../hooks/createExpense";
import updateExpense from "../hooks/updateExpense";
//import currency from 'currency.js';

const styleModal = {
  content: {
    margin: "auto",
    width: "400px",
    height: "375px",
  },
};

const styleSubmitAndCloseButton = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: "20px",
};

const ExpenseForm = ({
  isModalOpen,
  setIsModalOpen,
  expenseType,
  actionType,
  expenseToUpdate,
}) => {
  const { expensesList, setExpensesList } = useExpenses();
  const [expenseAmount, setExpenseAmount] = useState();
  const [expenseDescription, setExpenseDescription] = useState();
  const [expenseDate, setExpenseDate] = useState();

  useEffect(() => {
    setExpenseAmount(expenseToUpdate ? expenseToUpdate.amount : 0);
    setExpenseDescription(
      expenseToUpdate ? expenseToUpdate.description : "Provide the description!"
    );
    setExpenseDate(
      expenseToUpdate
        ? expenseToUpdate.date
        : new Date().toISOString().slice(0, 10)
    );
  }, [expenseToUpdate]);

  async function handleExpenseSubmit(event) {
    event.preventDefault();

    const newExpense = {
      date: expenseDate,
      amount: expenseAmount,
      description: expenseDescription,
      expenseType: expenseType,
    };

    if (actionType === UPDATE) {
      await updateExpense(
        newExpense,
        expensesList,
        setExpensesList,
        expenseToUpdate.id
      );
    } else {
      await createExpense(newExpense, expensesList, setExpensesList);
    }
    setExpenseAmount(0);
    setExpenseDescription("Provide the description!");
    setExpenseDate(new Date().toISOString().slice(0, 10));
    setIsModalOpen(false);
  }

  return (
    <ReactModal isOpen={isModalOpen} style={styleModal} ariaHideApp={false}>
      <h3 style={{ textAlign: "center" }}>Create income/outcome</h3>
      <form>
        <div className="form-group">
          <label key="Amount">Amount</label>
          <input
            type="number"
            name="expense-amount"
            className="form-control"
            value={expenseAmount}
            onChange={(event) => setExpenseAmount(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label key="Description">Description</label>
          <input
            type="text"
            name="expense-description"
            className="form-control"
            placeholder={expenseDescription}
            onChange={(event) => setExpenseDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label key="Date">Date</label>
          <input
            type="date"
            name="expense-date"
            className="form-control"
            value={expenseDate}
            onChange={(event) => setExpenseDate(event.target.value)}
          />
        </div>
        <div style={styleSubmitAndCloseButton}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => {
              handleExpenseSubmit(event).then(() => setIsModalOpen(false));
            }}
          >
            {actionType}
          </button>
          <button
            type="close"
            className="btn btn-primary"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default ExpenseForm;