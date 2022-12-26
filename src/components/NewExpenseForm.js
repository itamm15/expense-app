import React, { useState } from "react";
import ReactModal from "react-modal";

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

const NewExpenseForm = ({ isModalOpen, setIsModalOpen, expenseType }) => {

  const [expenseAmount, setExepnseAmount] = useState(0);
  const [expenseDescription, setExpenseDescription] = useState(
    "Provide the description!"
  );
  const [expenseDate, setExpenseDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleExpenseSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(false);

    const expense = {
      date: expenseDate,
      amount: expenseAmount,
      description: expenseDescription,
      expenseType: expenseType,
    };

    fetch("http://localhost:3001/expenses", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(expense),
    }).then((res) => {
      console.log(res, "res");
    });
  };

  return (
    <ReactModal isOpen={isModalOpen} style={styleModal} ariaHideApp={false}>
      <h3 style={{ textAlign: "center" }}>Create income/outcome</h3>
      <form onSubmit={handleExpenseSubmit}>
        <div className="form-group">
          <label key="Amount">Amount</label>
          <input
            type="number"
            name="expense-amount"
            className="form-control"
            value={expenseAmount}
            onChange={(event) => setExepnseAmount(event.target.value)}
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
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default NewExpenseForm;
