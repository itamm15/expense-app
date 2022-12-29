import useExpenses from "../hooks/useExpenses";

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
            {expensesList.map(
              ({ id, amount, description, expenseType, date }) => (
                <tr style={tableHeaderAndBody}>
                  <th scope="row">{amount}</th>
                  <th>{description}</th>
                  <th>{date}</th>
                  <th>{expenseType}</th>
                  <th style={actions}>
                    <button type="button" className="btn btn-warning btn-sm">
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={(event) => handleDelete(event, id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <h1 style={noExpenses}>{displayErrorOrNoExpensesMessage()}</h1>
      )}
    </div>
  );
};

export default ExpenseList;
