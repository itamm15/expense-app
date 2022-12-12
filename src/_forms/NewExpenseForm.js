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

const NewExpenseForm = ({ isModalOpen, setIsModalOpen }) => {
  // State of values from form
  const [expenseAmount, setExepnseAmount] = useState(0);
  const [expenseDescription, setExpenseDescription] = useState(
    "Provide the description!"
  );
  const [expenseDate, setExpenseDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const createExpense = (event) => {
    event.preventDefault();
    setIsModalOpen(false);


    // 1. Gather all data and check the validity
    // 2. Check, if there is already created folder for given year, (NOT => CREATE)

    const dataToInsert = {
      date: expenseDate,
      amount: expenseAmount,
      description: expenseDescription
    }



    // 3. Check, if there is already created file with given month, (NOT => CREATE)
    // 4. STORE DATA!
  };

  return (
    <ReactModal isOpen={isModalOpen} style={styleModal} ariaHideApp={false}>
      <h3 style={{ textAlign: "center" }}>Create income/outcome</h3>
      <form onSubmit={createExpense}>
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
